import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Play, User } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Жарко Бошкоски - Визија за Прилеп",
      description: "Запознајте се со визијата и плановите за развој на нашиот град",
      videoId: "2FPty-sdlHw", // YouTube video ID
      platform: "youtube",
      category: "Кампања",
      date: "2025-09-29",
      author: "Жарко Бошкоски"
    },
    {
      id: 2,
      title: "Жарко Бошкоски - Промоција на кампањата",
      description: "Гледајте го промотивното видео од кампањата за градоначалник на Прилеп",
      videoId: "2021937671949629", // Facebook video ID
      platform: "facebook",
      category: "Кампања",
      date: "2025-10-01",
      author: "Жарко Бошкоски"
    }
  ];

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getFacebookEmbedUrl = (videoId: string) => {
    return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${videoId}&show_text=false&width=560&height=315&appId`;
  };

  const getEmbedUrl = (video: any) => {
    if (video.platform === "youtube") {
      return getYouTubeEmbedUrl(video.videoId);
    } else if (video.platform === "facebook") {
      return getFacebookEmbedUrl(video.videoId);
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-campaign-blue/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-campaign-blue mb-6">
            Видеа
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Погледнете ги најновите видеа од кампањата, интервјуа и презентации на проекти за развој на Прилеп.
          </p>
        </div>
      </section>

      {/* Videos Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100">
                  <iframe
                    src={getEmbedUrl(video)}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{video.date}</span>
                    <User className="w-4 h-4 ml-4 mr-2" />
                    <span>{video.author}</span>
                  </div>

                  <Badge className="w-fit mb-2">{video.category}</Badge>

                  <CardTitle className="text-campaign-blue">
                    {video.title}
                  </CardTitle>

                  <CardDescription>
                    {video.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Play className="w-4 h-4 mr-2" />
                    <span>{video.platform === "youtube" ? "YouTube видео" : "Facebook видео"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State for Future Videos */}
          <div className="text-center mt-16 p-8 border-2 border-dashed border-gray-300 rounded-lg">
            <Play className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Повеќе видеа наскоро
            </h3>
            <p className="text-gray-500">
              Следете ни за најновите видеа од кампањата и проектите за Прилеп
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;