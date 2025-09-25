import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);

  // SEO Meta tags for social sharing
  useEffect(() => {
    if (post) {
      // Update page title
      document.title = `${post.title} - Жарко Бошкоски`;
      
      // Create or update meta tags
      const updateMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      const updateNameMetaTag = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Open Graph tags for Facebook
      updateMetaTag('og:title', post.title);
      updateMetaTag('og:description', post.excerpt);
      updateMetaTag('og:image', `${window.location.origin}${post.image}`);
      updateMetaTag('og:url', window.location.href);
      updateMetaTag('og:type', 'article');
      updateMetaTag('og:site_name', 'Жарко Бошкоски - Кандидат за градоначалник');

      // Twitter Card tags
      updateNameMetaTag('twitter:card', 'summary_large_image');
      updateNameMetaTag('twitter:title', post.title);
      updateNameMetaTag('twitter:description', post.excerpt);
      updateNameMetaTag('twitter:image', `${window.location.origin}${post.image}`);

      // Additional meta tags
      updateNameMetaTag('description', post.excerpt);
      updateNameMetaTag('author', post.author);
      updateNameMetaTag('keywords', `${post.category}, Прилеп, Жарко Бошкоски, локални избори`);
    }

    return () => {
      // Reset title when component unmounts
      document.title = 'Жарко Бошкоски - Кандидат за градоначалник на Град Прилеп';
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-campaign-blue hover:text-campaign-blue-dark mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад кон проекти
          </Link>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('mk-MK')}</span>
              <User className="w-4 h-4 ml-2" />
              <span>{post.author}</span>
            </div>
            
            <Badge className="mb-4">{post.category}</Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-4">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          {/* Post Content */}
          <article className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Social Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Споделете го овој текст</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-campaign-blue text-white rounded-lg hover:bg-campaign-blue-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад кон сите проекти
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;