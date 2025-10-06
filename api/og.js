export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  
  // Blog posts data
  const blogPosts = [
    {
      "id": 1,
      "slug": "zelenata-idnina-na-prilep",
      "title": "Тоа што не се мери, не може ни да се подобри - нов пристап за почист воздух",
      "excerpt": "Детален план за подобрување на квалитетот на воздухот во нашиот град преку 10 нови мерни станици и нови зелени површини.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Екологија",
      "image": "/images/green-air-monitoring.jpg"
    },
    {
      "id": 2,
      "slug": "ai-sovetnik-revolucija",
      "title": "АИ Агент: Револуција во транспарентноста, брзина и ефикасност. Агент кој ќе дава препораки за јавни набавки и јавни огалси за да се искорени корупцијата!",
      "excerpt": "Како вештачката интелигенција ќе ја трансформира општинската администрација, а дополнително сите процеси ќе бидат без корупција и значително побрзи...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Технологија",
      "image": "/images/ai-government-digital.jpg"
    },
    {
      "id": 3,
      "slug": "mladite-se-idninata",
      "title": "Возачката дозвола не смее да биде луксуз - Програма за субвенција на трошоци за возачка дозвола",
      "excerpt": "Општината ќе ги финансира часовите за возачка дозвола за младите кои навршиле 18 години...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Младински програми",
      "image": "/images/youth-driving-program.jpg"
    },
    {
      "id": 4,
      "slug": "prilep-fudbalski-grad",
      "title": "Прилеп – Фудбалски град со нови терени за мал фудбал",
      "excerpt": "Прилеп отсекогаш бил фудбалски град...",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Спорт", "Младински програми"],
      "image": "/images/football-youth-field.jpg"
    },
    {
      "id": 5,
      "slug": "startap-hub-prilep",
      "title": "Стартап Хаб Прилеп: Поддршка за млади претприемачи",
      "excerpt": "Простор и ресурси за создавање на нови претприемачи во нашиот град.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Претприемништво", "Младински програми"],
      "image": "/images/startup-hub-space.jpg"
    },
    {
      "id": 6,
      "slug": "biciklisticki-pateki-prilep",
      "title": "10 километри нови велосипедски патеки",
      "excerpt": "Мрежа од безбедни и модерни патеки за велосипедисти низ градот.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Транспорт",
      "image": "/images/bicycle-lanes-city.jpg"
    },
    {
      "id": 8,
      "slug": "teatar-na-otvoreno",
      "title": "Театар на отворено на Марковите Кули",
      "excerpt": "Културни настани под ѕвезденото небо со поглед кон Марковите Кули.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Култура",
      "image": "/images/outdoor-theater-towers.jpg"
    },
    {
      "id": 9,
      "slug": "digitalizacija-prilep",
      "title": "100% дигитализација на општинските услуги",
      "excerpt": "Сите услуги достапни со еден клик – побрзо, поефикасно, потранспарентно.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Технологија",
      "image": "/images/ai-advisor-government.jpg"
    },
    {
      "id": 11,
      "slug": "moderni-gradski-avtobusi",
      "title": "Нови модерни градски автобуси",
      "excerpt": "Еколошки и удобни автобуси за сите граѓани.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Урбанизам",
      "image": "/images/modern bus.png"
    },
    {
      "id": 12,
      "slug": "novo-gradsko-shetalishte",
      "title": "Атлетска патека на кејот на реката",
      "excerpt": "Разубавување на кејот на реката со поставување на атлетска патека, пешачка зона и станици за вежбање со справи.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Спорт", "Инфраструктура"],
      "image": "/images/river-embankment-track.png"
    },
    {
      "id": 13,
      "slug": "biznis-inkubator-prilep",
      "title": "Бизнис Инкубатор Прилеп",
      "excerpt": "Поддршка и менторство за мали бизниси и стартапи.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Претприемништво", "Младински програми"],
      "image": "/images/startup-hub-space.jpg"
    },
    {
      "id": 14,
      "slug": "kontinuitet-na-rakovodenje",
      "title": "Континуитет во раководењето на институциите - нов пристап за долгорочни резултати",
      "excerpt": "Жарко Бошкоски ќе ги задржи сите директори и одговорни лица најмалку една година по доаѓањето на власт, со цел да обезбеди стабилност и континуитет.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Управување",
      "image": "/images/directors.jpg"
    },
    {
      "id": 15,
      "slug": "subvencii-za-bunari",
      "title": "Субвенции за бунар во секое домаќинство",
      "excerpt": "Општината ќе субвенционира до 60% од трошоците за ископ на бунар со цел рационално користење на водата за пиење и намалување на непотребната потрошувачка.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Инфраструктура",
      "image": "/images/bunar.jpg"
    },
    {
      "id": 16,
      "slug": "renoviranje-basket-igralishta",
      "title": "Осветлување и реновирање на кошаркарски игралишта",
      "excerpt": "Реконструкција и современо осветлување на сите игралишта за баскет со цел да се поттикне спортот, дружбата и здравите навики кај младите.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Спорт", "Младински програми"],
      "image": "/images/An_outdoor_recreational_basketball_court_with_6_LED-sports-lighting.webp"
    },
    {
      "id": 17,
      "slug": "podzemni-kontejneri",
      "title": "Подземни контејнери за почисти населби",
      "excerpt": "Расчистување на сметот околу контејнерите преку поставување на современи подземни контејнери кои ќе спречат неред и непријатни миризби.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Урбанизм",
      "image": "/images/underground_garbage.png"
    },
    {
      "id": 18,
      "slug": "smart-osvetluvanje-prilep",
      "title": "Паметно регулирање на јавното осветлување",
      "excerpt": "Интерактивна мапа на Прилеп со сите улични светилки, брзо пријавување на дефекти и ефикасно одржување од страна на надлежните служби.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": "Технологија",
      "image": "/images/public-lightning.jpg"
    },
    {
      "id": 19,
      "slug": "reshenie-ulichni-kuchinja",
      "title": "Хумано решение за уличните кучиња",
      "excerpt": "Стационар под 24/7 видео надзор, транспарентно управување и субвенции за вдомување со цел трајно и хумано решавање на проблемот со уличните кучиња.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Урбанизам", "Животни"],
      "image": "/images/dogs.jpg"
    },
    {
      "id": 20,
      "slug": "elektricni-vozila-prilep",
      "title": "Прилеп – град лидер за електрични возила",
      "excerpt": "Инсталација на 25 нови бесплатни станици за полнење на електрични возила со цел Прилеп да стане модерен и еколошки град.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Екологија", "Транспорт"],
      "image": "/images/eletric cars.png"
    },
    {
      "id": 21,
      "slug": "lokalna-berza-na-chovechki-kapital",
      "title": "Локална берза на човечки капитал во Прилеп",
      "excerpt": "Дигитална платформа која ќе ја поврзува понудата и побарувачката на труд, во соработка со компаниите и Агенцијата за вработување.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Вработување", "Технологија"],
      "image": "/images/hr marketplace.jpg"
    },
    {
      "id": 22,
      "slug": "poddrstka-lica-so-poprechenost",
      "title": "Поддршка на лицата со попреченост",
      "excerpt": "Отворена канцеларија за комуникација со лицата со попреченост и нивните семејства со соодветно обучено лице за поддршка и помош.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Социјални услуги", "Инклузија"],
      "image": "/images/support for people with disabilities.jpg"
    },
    {
      "id": 23,
      "slug": "preporaki-za-zamena-azbestni-pokrivi",
      "title": "Препораки и субвенции за замена на азбестни покриви во Прилеп",
      "excerpt": "Општина Прилеп ќе обезбеди субвенции за замена на азбестни покриви на куќи и згради, со строго почитување на законските стандарди за безбедност и животна средина.",
      "date": "2025-09-29",
      "author": "Жарко Бошкоски",
      "category": ["Здравство", "Екологија"],
      "image": "/images/asbestos-roof-removal.jpg"
    },
    {
      "id": 24,
      "slug": "javni_trotineti_velosipedi",
      "title": "Јавни велосипеди и тротинети за модерен Прилеп",
      "excerpt": "100 велосипеди и 100 тротинети за јавна употреба преку општинска апликација.",
      "date": "2025-09-30",
      "author": "Жарко Бошкоски",
      "category": ["Транспорт", "Екологија"],
      "image": "/images/eletricBikesAndScooters.png"
    },
    {
      "id": 25,
      "slug": "cistenje-na-opstinska-zgrada-prilep",
      "title": "Чистење на фасадата на општинската зграда",
      "excerpt": "Општината ќе ја врати убавината на општинската зграда – исчистена од боите предизвикани од протестите, уште во првите 30 дена.",
      "date": "2025-10-01",
      "author": "Жарко Бошкоски",
      "category": ["Урбанизам", "Културно наследство"],
      "image": "/images/city building cleaning.png"
    },
    {
      "id": 26,
      "slug": "mikro-gradinki-za-prilep",
      "title": "Микро-градинки: мали групи, блиска грижа",
      "excerpt": "Микро-градинки со групи од 5-9 деца, поставени блиску до работното место, за поблиска грижа и подобри услови.",
      "date": "2025-10-01",
      "author": "Жарко Бошкоски",
      "category": ["Образование", "Социјални политики"],
      "image": "/images/kindergarden.jpg"
    },
    {
      "id": 27,
      "slug": "pivofest-prilep-mogila-2026",
      "title": "Пивофест Прилеп на Могила од 2026та со нов пристап",
      "excerpt": "Традиционалниот Пивофест добива нов живот – повеќе пиварници, повеќе вкусови и нова локација на Могила за поголема удобност и помал метеж во градот.",
      "date": "2025-10-02",
      "author": "Жарко Бошкоски",
      "category": ["Култура", "Туризам", "Забава"],
      "image": "/images/pivofest.png"
    },
    {
      "id": 28,
      "slug": "nacionalen-biznis-roadshow-prilep",
      "title": "Национален Бизнис Roadshow – Прилеп како нова инвестициска дестинација",
      "excerpt": "Жарко Бошкоски ќе организира национален roadshow за привлекување инвестиции, каде директно ќе ги поврзе најголемите компании во Македонија со можностите за развој во Прилеп.",
      "date": "2025-10-02",
      "author": "Жарко Бошкоски",
      "category": ["Економија", "Инвестиции", "Вработување"],
      "image": "/images/business-roadshow.jpg"
    },
    {
      "id": 29,
      "slug": "finansiska-edukacija-za-mladite",
      "title": "Бесплатна финансиска едукација за секое младо лице – Младински центар за финансиска писменост",
      "excerpt": "Финансиски едуцирана младина е слободна, одговорна и неподложна на манипулации. Финансиската писменост е моќ – и секој млад човек заслужува да биде финансиски писмен.",
      "date": "2025-10-02",
      "author": "Жарко Бошкоски",
      "category": ["Образование", "Младински програми", "Финансии"],
      "image": "/images/financial-education.jpg"
    }
  ];
  
  // Find the blog post
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return new Response('Post not found', { status: 404 });
  }

  const baseUrl = 'https://www.zharkozaprilep.mk';
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