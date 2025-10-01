export const config = {
  runtime: 'edge',
}

// In-memory storage for demo purposes (use a database in production)
// This would be shared with lawyer-request.js in a real database
let responses = [];
let requests = []; // Would be imported from database

function generateId() {
  return Date.now().toString();
}

export default async function handler(request) {
  const { method } = request;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (method === 'POST') {
      // Submit lawyer response
      const data = await request.json();

      // Validate required fields
      if (!data.token || !data.lawyerName || !data.lawyerEmail || !data.solutionProposal) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // Find the original request by token
      const originalRequest = requests.find(r => r.token === data.token);
      if (!originalRequest) {
        return new Response(
          JSON.stringify({ error: 'Invalid or expired token' }),
          {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      // Check if this lawyer already responded
      const existingResponse = responses.find(
        r => r.requestId === originalRequest.id && r.lawyerEmail === data.lawyerEmail
      );
      if (existingResponse) {
        return new Response(
          JSON.stringify({ error: 'You have already responded to this request' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const newResponse = {
        id: generateId(),
        requestId: originalRequest.id,
        lawyerName: data.lawyerName,
        lawyerEmail: data.lawyerEmail,
        lawyerPhone: data.lawyerPhone,
        acceptsBudget: data.acceptsBudget,
        suggestedBudget: data.suggestedBudget || null,
        solutionProposal: data.solutionProposal,
        estimatedTimeline: data.estimatedTimeline || '',
        additionalNotes: data.additionalNotes || '',
        respondedAt: new Date().toISOString()
      };

      responses.push(newResponse);

      // Update request status
      const requestIndex = requests.findIndex(r => r.id === originalRequest.id);
      if (requestIndex !== -1) {
        requests[requestIndex].status = 'responses_received';
      }

      // In a real application, you would:
      // 1. Save to database
      // 2. Send notification email to client
      // 3. Log the response

      console.log(`New response from ${data.lawyerName} for request ${originalRequest.id}`);

      return new Response(
        JSON.stringify({
          success: true,
          responseId: newResponse.id,
          message: 'Response submitted successfully'
        }),
        {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );

    } else if (method === 'GET') {
      // Get responses for a request
      const url = new URL(request.url);
      const requestId = url.searchParams.get('requestId');

      if (!requestId) {
        return new Response(
          JSON.stringify({ error: 'Missing requestId parameter' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const requestResponses = responses.filter(r => r.requestId === requestId);

      return new Response(
        JSON.stringify(requestResponses),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
}