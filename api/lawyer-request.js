export const config = {
  runtime: 'edge',
}

// In-memory storage for demo purposes (use a database in production)
let requests = [];
let responses = [];

function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function generateId() {
  return Date.now().toString();
}

export default async function handler(request) {
  const { method } = request;
  const url = new URL(request.url);

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
      // Create new lawyer request
      const data = await request.json();

      // Validate required fields
      if (!data.caseDescription || !data.budget || !data.name || !data.email) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const newRequest = {
        id: generateId(),
        caseDescription: data.caseDescription,
        budget: data.budget,
        urgency: data.urgency || 'medium',
        contactInfo: {
          name: data.name,
          email: data.email,
          phone: data.phone
        },
        status: 'pending',
        createdAt: new Date().toISOString(),
        token: generateToken() // For sharing with lawyers
      };

      requests.push(newRequest);

      // In a real application, you would:
      // 1. Save to database
      // 2. Send emails to registered lawyers with token link
      // 3. Set up notifications

      // Simulate sending emails to lawyers
      const lawyerEmails = [
        'marija.petrovska@law.mk',
        'petar.nikoloski@advocates.mk',
        'ana.stojanovic@legal.mk'
      ];

      // Email content would include: https://yoursite.com/respond/${newRequest.token}
      console.log(`Email would be sent to lawyers: ${lawyerEmails.join(', ')}`);
      console.log(`Response link: https://www.zharkozaprilep.mk/respond/${newRequest.token}`);

      return new Response(
        JSON.stringify({
          success: true,
          requestId: newRequest.id,
          message: 'Request submitted successfully'
        }),
        {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );

    } else if (method === 'GET') {
      // Get request by ID or token
      const requestId = url.searchParams.get('id');
      const token = url.searchParams.get('token');

      if (token) {
        // Find request by token (for lawyers)
        const foundRequest = requests.find(r => r.token === token);
        if (!foundRequest) {
          return new Response(
            JSON.stringify({ error: 'Invalid or expired token' }),
            {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Return request details without sensitive info
        const sanitizedRequest = {
          id: foundRequest.id,
          caseDescription: foundRequest.caseDescription,
          budget: foundRequest.budget,
          urgency: foundRequest.urgency,
          clientName: foundRequest.contactInfo.name.split(' ')[0] + ' ' +
                     foundRequest.contactInfo.name.split(' ').slice(-1)[0]?.charAt(0) + '.',
          createdAt: foundRequest.createdAt
        };

        return new Response(
          JSON.stringify(sanitizedRequest),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );

      } else if (requestId) {
        // Get request with responses (for clients)
        const foundRequest = requests.find(r => r.id === requestId);
        if (!foundRequest) {
          return new Response(
            JSON.stringify({ error: 'Request not found' }),
            {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Get all responses for this request
        const requestResponses = responses.filter(r => r.requestId === requestId);

        return new Response(
          JSON.stringify({
            request: foundRequest,
            responses: requestResponses
          }),
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Missing id or token parameter' }),
        {
          status: 400,
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