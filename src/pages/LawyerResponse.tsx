import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Scale, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface LawyerRequest {
  id: string;
  caseDescription: string;
  budget: string;
  urgency: string;
  clientName: string;
  createdAt: string;
}

const LawyerResponse = () => {
  const { token } = useParams<{ token: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [request, setRequest] = useState<LawyerRequest | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    lawyerName: '',
    lawyerEmail: '',
    lawyerPhone: '',
    acceptsBudget: true,
    suggestedBudget: '',
    solutionProposal: '',
    estimatedTimeline: '',
    additionalNotes: ''
  });

  // Mock request data - in real app, this would be fetched via API
  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        if (token && token.length > 10) {
          // Mock successful token validation
          setRequest({
            id: '1',
            caseDescription: 'Потребна ми е помош за решавање на спор со соседот околу граници на имотот. Спорот трае веќе 6 месеци и се обидуваме да најдеме мирно решение, но безуспешно. Потребна ми е правна консултација и можна застапка во постапката.',
            budget: '12,000 ден.',
            urgency: 'medium',
            clientName: 'Марко С.',
            createdAt: '2025-10-01T09:00:00Z'
          });
        } else {
          setError('Неважечки или истечен линк');
        }
        setIsLoading(false);
      }, 1000);
    };

    fetchRequest();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.lawyerName || !formData.lawyerEmail || !formData.lawyerPhone || !formData.solutionProposal) {
      setError('Ве молиме пополнете ги сите задолжителни полиња');
      return;
    }

    // Simulate API submission
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const getUrgencyBadgeColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'Високо';
      case 'medium': return 'Средно';
      case 'low': return 'Ниско';
      default: return 'Средно';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-campaign-blue border-t-transparent rounded-full mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold">Се вчитува барањето...</h2>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !request) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Грешка - Правни услуги</title>
        </Helmet>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-red-800 mb-2">Грешка</h2>
                <p className="text-red-700">{error || 'Барањето не може да се најде'}</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Одговор пратен - Правни услуги</title>
        </Helmet>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  Вашиот одговор е успешно пратен!
                </h2>
                <p className="text-green-700 mb-4">
                  Клиентот ќе ги види вашите предлози и ќе ве контактира доколку сака да соработува со вас.
                </p>
                <p className="text-sm text-green-600">
                  Очекувајте контакт во наредните денови.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Одговори на барање - Правни услуги</title>
        <meta name="description" content="Одговорете на барање за правна помош од граѓани на Прилеп" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Scale className="w-16 h-16 text-campaign-blue mx-auto mb-4" />
            <h1 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-4">
              Одговори на барање за правна помош
            </h1>
            <p className="text-lg text-muted-foreground">
              Граѓанин бара правна помош. Прегледајте го барањето и дајте ја вашата понуда.
            </p>
          </div>

          {/* Client Request Details */}
          <Card className="mb-8 border-l-4 border-l-campaign-blue">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Детали за барањето</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge className={getUrgencyBadgeColor(request.urgency)}>
                    {getUrgencyLabel(request.urgency)} приоритет
                  </Badge>
                  <Badge variant="outline">
                    {new Date(request.createdAt).toLocaleDateString('mk-MK')}
                  </Badge>
                </div>
              </div>
              <CardDescription>
                Клиент: {request.clientName}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                    Опис на правниот случај
                  </h4>
                  <p className="leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {request.caseDescription}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                    Буџет на клиентот
                  </h4>
                  <p className="text-lg font-semibold text-campaign-blue">
                    {request.budget}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Form */}
          <Card>
            <CardHeader>
              <CardTitle>Вашиот одговор</CardTitle>
              <CardDescription>
                Пополнете ги податоците за да се претставите на клиентот и да дадете понуда
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Ваши контакт информации</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Име и презиме *
                      </label>
                      <Input
                        value={formData.lawyerName}
                        onChange={(e) => setFormData({...formData, lawyerName: e.target.value})}
                        placeholder="Адв. Вашето име"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Е-пошта *
                      </label>
                      <Input
                        type="email"
                        value={formData.lawyerEmail}
                        onChange={(e) => setFormData({...formData, lawyerEmail: e.target.value})}
                        placeholder="vashe@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <Input
                        value={formData.lawyerPhone}
                        onChange={(e) => setFormData({...formData, lawyerPhone: e.target.value})}
                        placeholder="070 123 456"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Budget Response */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Одговор за буџетот</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="accept-budget"
                        name="budget-response"
                        checked={formData.acceptsBudget}
                        onChange={() => setFormData({...formData, acceptsBudget: true, suggestedBudget: ''})}
                        className="text-campaign-blue"
                      />
                      <label htmlFor="accept-budget" className="text-sm">
                        Го прифаќам предложениот буџет ({request.budget})
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="suggest-budget"
                        name="budget-response"
                        checked={!formData.acceptsBudget}
                        onChange={() => setFormData({...formData, acceptsBudget: false})}
                        className="text-campaign-blue"
                      />
                      <label htmlFor="suggest-budget" className="text-sm">
                        Предлагам друг буџет
                      </label>
                    </div>
                    {!formData.acceptsBudget && (
                      <div className="ml-6">
                        <Input
                          value={formData.suggestedBudget}
                          onChange={(e) => setFormData({...formData, suggestedBudget: e.target.value})}
                          placeholder="нпр. 15,000 ден."
                          className="max-w-xs"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Solution Proposal */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Предложено решение *
                  </label>
                  <Textarea
                    value={formData.solutionProposal}
                    onChange={(e) => setFormData({...formData, solutionProposal: e.target.value})}
                    placeholder="Опишете како можете да му помогнете на клиентот, вашиот пристап кон случајот, релевантното искуство..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Проценет временски рок
                  </label>
                  <Input
                    value={formData.estimatedTimeline}
                    onChange={(e) => setFormData({...formData, estimatedTimeline: e.target.value})}
                    placeholder="нпр. 2-3 недели, 1 месец"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Дополнителни напомени
                  </label>
                  <Textarea
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                    placeholder="Достапност за консултации, специјални услови, бесплатна првична консултација..."
                    className="min-h-[80px]"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Се праќа...
                    </div>
                  ) : (
                    'Пратете одговор'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">ℹ</span>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Важно</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Вашиот одговор ќе биде прикажан на клиентот заедно со одговорите од другите адвокати.
                    Клиентот ќе ги разгледа сите понуди и ќе ве контактира директно доколку сака да соработува со вас.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LawyerResponse;