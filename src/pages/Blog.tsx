import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Filter out undefined/null posts
  const filteredPosts = blogPosts.filter(post => post);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-campaign-blue/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-campaign-blue mb-6">
            Проекти
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Актуелни проекти, планови и визии за развој на Прилеп. Следете ги најновите информации од нашата кампања.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
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
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {(() => {
                        if (post.categories && Array.isArray(post.categories)) {
                          return post.categories.map((cat, index) => (
                            <Badge key={index} className="w-fit">{cat}</Badge>
                          ));
                        } else if (post.category) {
                          return <Badge className="w-fit">{post.category}</Badge>;
                        }
                        return null;
                      })()}
                    </div>
                    
                    <CardTitle className="text-campaign-blue hover:text-campaign-blue-dark transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-sm text-muted-foreground line-clamp-4">
                      {post.content && typeof post.content === 'string' ? post.content.substring(0, 150) + '...' : 'Нема достапен содржај...'}
                    </div>
                    <button className="mt-4 text-campaign-blue hover:text-campaign-blue-dark font-semibold transition-colors">
                      Прочитај повеќе →
                    </button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;