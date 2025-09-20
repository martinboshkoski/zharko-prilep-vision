import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Зелената иднина на Прилеп: План за чист воздух",
    excerpt: "Детален план за подобрување на квалитетот на воздухот во нашиот град преку нови мерни станици и зелени површини.",
    content: `Квалитетот на воздухот во Прилеп е еден од најголемите предизвици со кои се соочуваме денес. Како ваш иден градоначалник, јас имам јасна визија за тоа како да го решиме овој проблем.

Нашиот план вклучува поставување на 10 нови мерни станици за квалитет на воздух на стратешки локации низ градот. Овие станици ќе обезбедат податоци во реално време, достапни за сите граѓани преку мобилна апликација.

Дополнително, планираме засадување на 5,000 нови дрвја и создавање на три нови парка. Овие зелени површини не само што ќе го подобрат воздухот, туку ќе создадат и простори за рекреација за граѓаните.

Исто така, ќе воведеме субвенции за еколошки грејни единици, овозможувајќи им на граѓаните да ги заменат старите, загадувачки системи со модерни, еколошки решенија. Овој проект е дел од нашата поширока визија за одржлив развој на Прилеп.`,
    date: "2024-03-15",
    author: "Жарко Бошкоски",
    category: "Екологија",
    image: "https://images.unsplash.com/photo-1569163139394-de4e5f43e4e3?w=800&h=400&fit=crop"
  },
  {
    id: 2,
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
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
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
                  <button className="mt-4 text-campaign-blue hover:text-campaign-blue-dark font-semibold transition-colors">
                    Прочитај повеќе →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;