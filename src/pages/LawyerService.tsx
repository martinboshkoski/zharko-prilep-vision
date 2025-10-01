import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Scale, Clock, Users, CheckCircle } from 'lucide-react';

interface LawyerRequest {
  id: string;
  caseDescription: string;
  budget: string;
  urgency: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  status: 'pending' | 'responses_received';
  createdAt: string;
}

interface LawyerResponse {
  id: string;
  lawyerName: string;
  lawyerEmail: string;
  lawyerPhone: string;
  acceptsBudget: boolean;
  suggestedBudget?: string;
  solutionProposal: string;
  estimatedTimeline: string;
  additionalNotes?: string;
  respondedAt: string;
}

const LawyerService = () => {
  const [isFormCollapsed, setIsFormCollapsed] = useState(false);
  const [activeRequest, setActiveRequest] = useState<LawyerRequest | null>(null);
  const [responses, setResponses] = useState<LawyerResponse[]>([]);
  const [expandedResponse, setExpandedResponse] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    caseDescription: '',
    budget: '',
    urgency: 'medium',
    name: '',
    email: '',
    phone: ''
  });

  // Mock data for demonstration
  const mockResponses: LawyerResponse[] = [
    {
      id: '1',
      lawyerName: 'Адв. Марија Петровска',
      lawyerEmail: 'marija.petrovska@law.mk',
      lawyerPhone: '070 123 456',
      acceptsBudget: true,
      solutionProposal: 'Можам да ви помогнам со вашиот случај. Имам искуство во слични предмети и верувам дека можеме да постигнеме добар резултат.',
      estimatedTimeline: '2-3 недели',
      additionalNotes: 'Достапна сум за консултации во понделник, среда и петок.',
      respondedAt: '2025-10-01T10:30:00Z'
    },
    {
      id: '2',
      lawyerName: 'Адв. Петар Николоски',
      lawyerEmail: 'petar.nikoloski@advocates.mk',
      lawyerPhone: '070 789 012',
      acceptsBudget: false,
      suggestedBudget: '15,000 ден.',
      solutionProposal: 'Вашиот случај бара посеопфатен пристап. Предлагам детална анализа на документацијата и стратегија за најдобар исход.',
      estimatedTimeline: '3-4 недели',
      additionalNotes: 'Можам да понудам бесплатна првична консултација.',
      respondedAt: '2025-10-01T14:15:00Z'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mock request
    const newRequest: LawyerRequest = {
      id: Date.now().toString(),
      caseDescription: formData.caseDescription,
      budget: formData.budget,
      urgency: formData.urgency,
      contactInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      },
      status: 'responses_received',
      createdAt: new Date().toISOString()
    };

    setActiveRequest(newRequest);
    setResponses(mockResponses);
    setIsFormCollapsed(true);

    // Reset form
    setFormData({
      caseDescription: '',
      budget: '',
      urgency: 'medium',
      name: '',
      email: '',
      phone: ''
    });
  };

  const toggleResponseExpansion = (responseId: string) => {
    setExpandedResponse(expandedResponse === responseId ? null : responseId);
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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Правни услуги - Жарко Бошкоски</title>
        <meta name="description" content="Пронајдете квалификувани адвокати во Прилеп. Поднесете барање и добијте понуди од искусни правници." />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 text-campaign-blue mx-auto mb-4" />
            <h1 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-4">
              Правни услуги за граѓаните на Прилеп
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Поврзете се со квалификувани адвокати во Прилеп. Поднесете го вашето барање и добијте понуди од искусни правници.
            </p>
          </div>

          {/* Active Request Status */}
          {activeRequest && (
            <Card className="mb-8 border-l-4 border-l-campaign-blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">Активно барање</CardTitle>
                  </div>
                  <Badge className={getUrgencyBadgeColor(activeRequest.urgency)}>
                    {getUrgencyLabel(activeRequest.urgency)} приоритет
                  </Badge>
                </div>
                <CardDescription>
                  Поднесено: {new Date(activeRequest.createdAt).toLocaleDateString('mk-MK')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Опис на случајот</h4>
                    <p className="text-sm">{activeRequest.caseDescription}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Буџет</h4>
                    <p className="text-sm">{activeRequest.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{responses.length} адвокати одговорија на вашето барање</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Request Form */}
          <Card className={`mb-8 transition-all duration-300 ${isFormCollapsed ? 'opacity-60' : ''}`}>
            <CardHeader
              className={`cursor-pointer ${isFormCollapsed ? 'pb-4' : ''}`}
              onClick={() => isFormCollapsed && setIsFormCollapsed(false)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    {isFormCollapsed ? 'Поднеси ново барање' : 'Побарајте правна помош'}
                  </CardTitle>
                  {!isFormCollapsed && (
                    <CardDescription>
                      Опишете го вашиот правен предизвик и добијте понуди од локални адвокати
                    </CardDescription>
                  )}
                </div>
                {isFormCollapsed && (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>

            {!isFormCollapsed && (
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Опис на правниот случај *
                    </label>
                    <Textarea
                      value={formData.caseDescription}
                      onChange={(e) => setFormData({...formData, caseDescription: e.target.value})}
                      placeholder="Опишете го детално вашиот правен предизвик, потребната помош и сите релевантни детали..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Буџет *
                      </label>
                      <Input
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        placeholder="нпр. 10,000 ден."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Приоритет *
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="low">Ниски приоритет</option>
                        <option value="medium">Среден приоритет</option>
                        <option value="high">Висок приоритет</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Име и презиме *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Вашето име"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Е-пошта *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="vashe@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="070 123 456"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Поднеси барање за правна помош
                  </Button>
                </form>
              </CardContent>
            )}
          </Card>

          {/* Lawyer Responses */}
          {responses.length > 0 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-campaign-blue mb-2">
                  Одговори од адвокати
                </h2>
                <p className="text-muted-foreground">
                  {responses.length} адвокати се заинтересирани за вашиот случај
                </p>
              </div>

              <div className="space-y-4">
                {responses.map((response) => (
                  <Card key={response.id} className="border-l-4 border-l-green-500">
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => toggleResponseExpansion(response.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{response.lawyerName}</CardTitle>
                          <CardDescription>
                            Одговорено: {new Date(response.respondedAt).toLocaleDateString('mk-MK')} во {new Date(response.respondedAt).toLocaleTimeString('mk-MK', { hour: '2-digit', minute: '2-digit' })}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={response.acceptsBudget ? "default" : "secondary"}>
                            {response.acceptsBudget ? 'Го прифаќа буџетот' : 'Предлага друг буџет'}
                          </Badge>
                          {expandedResponse === response.id ?
                            <ChevronUp className="w-5 h-5" /> :
                            <ChevronDown className="w-5 h-5" />
                          }
                        </div>
                      </div>
                    </CardHeader>

                    {expandedResponse === response.id && (
                      <CardContent className="border-t">
                        <div className="space-y-4 pt-4">
                          {!response.acceptsBudget && response.suggestedBudget && (
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                                Предложен буџет
                              </h4>
                              <p className="text-lg font-semibold text-campaign-blue">
                                {response.suggestedBudget}
                              </p>
                            </div>
                          )}

                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                              Предложено решение
                            </h4>
                            <p className="text-sm leading-relaxed">
                              {response.solutionProposal}
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                                Проценет рок
                              </h4>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{response.estimatedTimeline}</span>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                                Контакт информации
                              </h4>
                              <div className="space-y-1 text-sm">
                                <div>📧 {response.lawyerEmail}</div>
                                <div>📞 {response.lawyerPhone}</div>
                              </div>
                            </div>
                          </div>

                          {response.additionalNotes && (
                            <div>
                              <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                                Дополнителни напомени
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {response.additionalNotes}
                              </p>
                            </div>
                          )}

                          <div className="pt-4 border-t">
                            <div className="flex gap-2">
                              <Button asChild className="flex-1">
                                <a href={`mailto:${response.lawyerEmail}`}>
                                  Контактирај преку е-пошта
                                </a>
                              </Button>
                              <Button variant="outline" asChild className="flex-1">
                                <a href={`tel:${response.lawyerPhone.replace(/\s+/g, '')}`}>
                                  Повикај
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Info Section */}
          {!activeRequest && (
            <Card className="bg-campaign-blue/5 border-campaign-blue/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-campaign-blue mb-3">
                  Како функционира?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-campaign-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                    <h4 className="font-semibold mb-1">Поднесете барање</h4>
                    <p className="text-muted-foreground">Опишете го вашиот правен предизвик и потребниот буџет</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-campaign-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                    <h4 className="font-semibold mb-1">Добијте понуди</h4>
                    <p className="text-muted-foreground">Адвокатите ќе одговорат со своите предлози и услови</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-campaign-blue text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                    <h4 className="font-semibold mb-1">Изберете адвокат</h4>
                    <p className="text-muted-foreground">Контактирајте го адвокатот што најдобро ви одговара</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LawyerService;