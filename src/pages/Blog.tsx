import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "zelenata-idnina-na-prilep",
    title: "Зелената иднина на Прилеп: План за чист воздух",
    excerpt: "Детален план за подобрување на квалитетот на воздухот во нашиот град преку нови мерни станици и зелени површини.",
    content: `Квалитетот на воздухот во Прилеп е еден од најголемите предизвици со кои се соочуваме денес. Како ваш иден градоначалник, јас имам јасна визија за тоа како да го решиме овој проблем.

Нашиот план вклучува поставување на 10 нови мерни станици за квалитет на воздух на стратешки локации низ градот. Овие станици ќе обезбедат податоци во реално време, достапни за сите граѓани преку мобилна апликација.

Дополнително, планираме засадување на 5,000 нови дрвја и создавање на три нови парка. Овие зелени површини не само што ќе го подобрат воздухот, туку ќе создадат и простори за рекреација за граѓаните.

Исто така, ќе воведеме субвенции за еколошки грејни единици, овозможувајќи им на граѓаните да ги заменат старите, загадувачки системи со модерни, еколошки решенија. Овој проект е дел од нашата поширока визија за одржлив развој на Прилеп.`,
    date: "2024-03-15",
    author: "Жарко Бошкоски",
    category: "Екологија",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    slug: "ai-sovetnik-revolucija",
    title: "АИ Советник: Револуција во транспарентноста",
    excerpt: "Како вештачката интелигенција ќе ја трансформира јавната администрација во Прилеп и ќе обезбеди целосна транспарентност.",
    content: `Денес сме сведоци на дигитална револуција која го менува светот. Време е и Прилеп да стане дел од оваа трансформација. АИ Советникот претставува најиновативниот проект во нашата кампања.

Овој вештачки интелигентен систем ќе биде постојано активен, следејќи ги сите тендери, рокови и јавни документи. Неговата задача е да обезбеди дека ниту еден процес нема да се одвива во мрак, далеку од очите на јавноста.

АИ Советникот ќе автоматски организира податоци, ќе укажува на потенцијални ризици и непрецизности, и ќе овозможи на граѓаните брз пристап до сите информации што ги бараат. Сè ова ќе биде достапно преку едноставна веб-платформа.

Ова не е само технолошка иновација - тоа е фундаментална промена во начинот на кој функционира локалната власт. Транспарентноста нема да биде само збор, туку свесекидневна реалност за сите граѓани на Прилеп.`,
    date: "2024-03-12",
    author: "Жарко Бошкоски",
    category: "Технологија",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    slug: "mladite-se-idninata",
    title: "Младите се иднината: Програма за возачка дозвола",
    excerpt: "Зошто Општината ќе ги финансира часовите за возачка дозвола за сите млади од 18 години и како ова ќе им помогне.",
    content: `Младите луѓе се движечката сила на секое општество. За да ги поддржиме нашите млади граѓани во нивниот развој, воведуваме револуционерна програма за финансирање на возачката дозвола.

Секој младинец кој ќе наполни 18 години ќе има право на целосно финансирање на часовите за возачка дозвола од страна на Општината. Ова не е само практична помош, туку инвестиција во нивната иднина.

Возачката дозвола денес е неопходност за работа, образование и социјален живот. Многу семејства се соочуваат со финансиски предизвици кога станува збор за оваа инвестиција. Нашата програма ќе обезбеди дека ниту еден младинец нема да биде ограничен поради финансиската состојба на семејството.

Програмата ќе биде достапна за сите жители на Прилеп кои ќе наполнат 18 години, без исклучок. Ова е наш начин да покажеме дека верувале во младите и дека сакаме да им помогнеме да ја градат својата иднина во нашиот град.`,
    date: "2024-03-08",
    author: "Жарко Бошкоски",
    category: "Младински програми",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop"
  }, 
  {
  "id": 4,
  "slug": "prilep-fudbalski-grad",
  "title": "Прилеп – Фудбалски град со нови терени за младите",
  "excerpt": "Прилеп отсекогаш бил фудбалски град, но младите немаат доволно достапни терени. Затоа ќе се изградат нови модерни игралишта во неколку населби.",
  "content": "Прилеп отсекогаш бил познат како фудбалски град, место каде љубовта кон спортот и особено кон фудбалот се пренесува од генерација на генерација. Сепак, и покрај оваа традиција, реалноста е дека младите често се соочуваат со недостаток на терени каде можат слободно да играат и да се натпреваруваат. Постојните игралишта се ограничени, често во лоша состојба или пак недостапни за сите.\n\nПо позитивниот пример на фудбалскиот терен во населба Типски, Општината ќе започне со изградба на уште неколку современи и функционални терени за младите. Нови фудбалски терени ќе бидат изградени во населба Точила, населба Варош и населба Рид. Секој од овие терени ќе биде целосно обезбеден со ограда, современа тревна подлога и квалитетна инфраструктура која ќе овозможи одржување на редовни тренинзи и натпревари.\n\nПосебно внимание ќе се посвети на осветлувањето – сите игралишта ќе имаат современо рефлекторско осветлување кое ќе овозможи натпревари и тренинзи и во вечерните часови. На тој начин младите нема да бидат ограничени само на дневните услови, туку ќе можат да го користат времето по завршување на училишните или работните обврски.\n\nСо оваа иницијатива, Општината не само што инвестира во спортската инфраструктура, туку и директно во здравиот животен стил и иднината на младите. Новите терени ќе бидат место за дружење, развој на спортски дух и создавање нови спортски таленти кои ќе го продолжат фудбалското наследство на Прилеп. Ова е чекор напред кон враќање на сјајот на фудбалот во нашиот град и обезбедување еднакви можности за сите млади љубители на спортот.",
  "date": "2024-03-08",
  "author": "Жарко Бошкоски",
  "category": "Младински програми",
  "image": "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?_gl=1*69gnvb*_ga*MTUwNTI5NTI1LjE3NTg2NDQ2MDI.*_ga_8JE65Q40S6*czE3NTg2NDQ2MDIkbzEkZzAkdDE3NTg2NDQ2MDIkajYwJGwwJGgw"
}
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-campaign-blue mb-4">
              Блог
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Најнови вести, проекти и размислувања за иднината на Прилеп
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer hover:bg-campaign-blue-light transition-colors"
              onClick={() => setSelectedCategory(null)}
            >
              Сите
            </Badge>
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-campaign-blue-light transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('mk-MK')}</span>
                    <User className="w-4 h-4 ml-2" />
                    <span>{post.author}</span>
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-campaign-blue hover:text-campaign-blue-dark transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground line-clamp-4">
                    {post.content.split('\n\n')[0]}...
                  </div>
                  <div className="mt-4 text-campaign-blue hover:text-campaign-blue-dark font-semibold transition-colors">
                    Прочитај повеќе →
                  </div>
                </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;