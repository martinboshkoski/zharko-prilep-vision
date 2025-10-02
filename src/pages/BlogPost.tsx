import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.slug === slug);

  // Additional DOM manipulation for Facebook crawler compatibility
  useEffect(() => {
    if (post) {
      // Force update meta tags in DOM for Facebook crawler
      const updateOrCreateMetaTag = (property: string, content: string, isProperty = true) => {
        const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
        let meta = document.querySelector(selector) as HTMLMetaElement;

        if (meta) {
          meta.content = content;
        } else {
          meta = document.createElement('meta');
          if (isProperty) {
            meta.setAttribute('property', property);
          } else {
            meta.setAttribute('name', property);
          }
          meta.content = content;
          document.head.appendChild(meta);
        }
      };

      // Update critical meta tags for Facebook
      updateOrCreateMetaTag('fb:app_id', '123456789012345');
      updateOrCreateMetaTag('og:title', post.title);
      updateOrCreateMetaTag('og:description', post.excerpt);
      updateOrCreateMetaTag('og:image', `https://www.zharkozaprilep.mk${post.image}`);
      updateOrCreateMetaTag('og:url', `https://www.zharkozaprilep.mk/blog/${post.slug}`);
      updateOrCreateMetaTag('og:type', 'article');

      // Twitter meta tags
      updateOrCreateMetaTag('twitter:card', 'summary_large_image', false);
      updateOrCreateMetaTag('twitter:image', `https://www.zharkozaprilep.mk${post.image}`, false);
      updateOrCreateMetaTag('twitter:title', post.title, false);
      updateOrCreateMetaTag('twitter:description', post.excerpt, false);
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} - Жарко Бошкоски</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta name="keywords" content={`${Array.isArray(post.category) ? post.category.join(', ') : post.category}, Прилеп, Жарко Бошкоски, локални избори`} />

        {/* Open Graph / Facebook */}
        <meta property="fb:app_id" content="123456789012345" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.zharkozaprilep.mk/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://www.zharkozaprilep.mk${post.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Жарко Бошкоски - Кандидат за градоначалник" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.zharkozaprilep.mk/blog/${post.slug}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://www.zharkozaprilep.mk/blog/${post.slug}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://www.zharkozaprilep.mk${post.image}`} />
      </Helmet>
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
            
            <div className="mb-4 flex gap-2">
              {Array.isArray(post.category) ?
                post.category.map((cat, index) => (
                  <Badge key={index}>{cat}</Badge>
                )) :
                <Badge>{post.category}</Badge>
              }
            </div>
            
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

          {/* Suggested Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-campaign-blue mb-2">
                Прочитајте исто така
              </h3>
              <p className="text-muted-foreground">
                Други проекти и идеи што можат да ве интересираат
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id) // Exclude current post
                .sort(() => 0.5 - Math.random()) // Randomize
                .slice(0, 6) // Take 6 posts
                .map((suggestedPost) => (
                  <Link
                    key={suggestedPost.id}
                    to={`/blog/${suggestedPost.slug}`}
                    className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-campaign-blue/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-campaign-blue/10 to-campaign-blue/5 overflow-hidden">
                      <img
                        src={suggestedPost.image}
                        alt={suggestedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Category Badge */}
                      <div className="mb-3">
                        {Array.isArray(suggestedPost.category) ? (
                          <div className="flex flex-wrap gap-1">
                            {suggestedPost.category.slice(0, 2).map((cat, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-campaign-blue/10 text-campaign-blue text-xs font-medium rounded-full"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="px-2 py-1 bg-campaign-blue/10 text-campaign-blue text-xs font-medium rounded-full">
                            {suggestedPost.category}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-campaign-blue transition-colors duration-200 line-clamp-2 mb-2">
                        {suggestedPost.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {suggestedPost.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(suggestedPost.date).toLocaleDateString('mk-MK')}</span>
                        </div>
                        <div className="flex items-center gap-1 text-campaign-blue group-hover:text-campaign-blue-dark">
                          <span>Прочитај повеќе</span>
                          <ArrowLeft className="w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
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