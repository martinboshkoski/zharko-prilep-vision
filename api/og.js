export default function handler(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  
  // Blog posts data
  const blogPosts = [
    {
      "id": 1,
      "slug": "zelenata-idnina-na-prilep",
      "title": "Зелената иднина на Прилеп: План за чист воздух",
      "excerpt": "Детален план за подобрување на квалитетот на воздухот во нашиот град преку нови мерни станици и зелени површини.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Екологија",
      "image": "/src/assets/green-city-clean-air.jpg"
    },
    {
      "id": 2,
      "slug": "ai-sovetnik-revolucija",
      "title": "АИ Советник: Револуција во транспарентноста",
      "excerpt": "Како вештачката интелигенција ќе ја трансформира јавната администрација...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Технологија",
      "image": "/src/assets/ai-advisor-government.jpg"
    },
    {
      "id": 3,
      "slug": "mladite-se-idninata",
      "title": "Младите се иднината: Програма за возачка дозвола",
      "excerpt": "Зошто Општината ќе ги финансира часовите за возачка дозвола...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Младински програми",
      "image": "/src/assets/youth-park-modern.jpg"
    },
    {
      "id": 4,
      "slug": "prilep-fudbalski-grad",
      "title": "Прилеп – Фудбалски град со нови терени за младите",
      "excerpt": "Прилеп отсекогаш бил фудбалски град...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Младински програми",
      "image": "/src/assets/football-field-modern.jpg"
    },
    {
      "id": 5,
      "slug": "startap-hub-prilep",
      "title": "Стартап Хаб Прилеп: Поддршка за млади претприемачи",
      "excerpt": "Простор и ресурси за нови генерации претприемачи во нашиот град.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Претприемништво",
      "image": "/src/assets/startup-hub-space.jpg"
    },
    {
      "id": 6,
      "slug": "biciklisticki-pateki-prilep",
      "title": "10 километри нови велосипедски патеки за поздрав Прилеп",
      "excerpt": "Мрежа од безбедни и модерни патеки за велосипедисти низ градот.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Транспорт",
      "image": "/src/assets/bicycle-lanes-city.jpg"
    },
    {
      "id": 8,
      "slug": "teatar-na-otvoreno",
      "title": "Театар на отворено кај Марковите Кули",
      "excerpt": "Културни настани под ѕвезденото небо со поглед кон Марковите Кули.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Култура",
      "image": "/src/assets/outdoor-theater-towers.jpg"
    },
    {
      "id": 12,
      "slug": "novo-gradsko-shetalishte",
      "title": "Атлетска патека на кејот на реката",
      "excerpt": "Модерна патека за трčање и прошетки покрај реката со отпочивалишта и вежбалишта.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Спорт",
      "image": "/src/assets/river-embankment-track.png"
    }
  ];
  
  // Find the blog post
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  const baseUrl = 'https://zharko-prilep-vision.lovable.app';
  const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const html = `<!DOCTYPE html>
<html lang="mk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} - Жарко Бошкоски</title>
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${postUrl}">
  <meta property="og:title" content="${post.title}">
  <meta property="og:description" content="${post.excerpt}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Жарко Бошкоски - Кандидат за градоначалник">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${postUrl}">
  <meta name="twitter:title" content="${post.title}">
  <meta name="twitter:description" content="${post.excerpt}">
  <meta name="twitter:image" content="${imageUrl}">
  
  <!-- Regular meta -->
  <meta name="description" content="${post.excerpt}">
  <meta name="author" content="${post.author}">
  <meta name="keywords" content="${post.category}, Прилеп, Жарко Бошкоски, локални избори">
  
  <!-- Canonical -->
  <link rel="canonical" href="${postUrl}">
  
  <!-- Redirect to actual page after 1 second for human visitors -->
  <meta http-equiv="refresh" content="1;url=${postUrl}">
  <script>
    // Immediate redirect for non-crawler agents
    if (!navigator.userAgent.match(/facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp/i)) {
      window.location.href = '${postUrl}';
    }
  </script>
</head>
<body>
  <h1>${post.title}</h1>
  <p>${post.excerpt}</p>
  <img src="${imageUrl}" alt="${post.title}" width="800" height="400">
  <p><a href="${postUrl}">Прочитај го целиот текст овде</a></p>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}