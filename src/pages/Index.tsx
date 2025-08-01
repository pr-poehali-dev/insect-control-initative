import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Уничтожение тараканов",
      description: "Профессиональная дезинсекция от тараканов безопасными препаратами",
      price: "от 2000₽",
      icon: "Bug"
    },
    {
      title: "Борьба с клопами",
      description: "Эффективное уничтожение постельных клопов с гарантией результата",
      price: "от 2500₽",
      icon: "Shield"
    },
    {
      title: "Уничтожение ос и шершней",
      description: "Безопасное удаление гнезд ос и шершней с выездом на дом",
      price: "от 3000₽",
      icon: "Zap"
    },
    {
      title: "Обработка от клещей",
      description: "Защита территории от клещей в летний период",
      price: "от 1500₽",
      icon: "TreePine"
    },
    {
      title: "Борьба с блохами",
      description: "Комплексная обработка помещений от блох",
      price: "от 1800₽",
      icon: "Target"
    },
    {
      title: "Профилактика для бизнеса",
      description: "Регулярная обработка для предприятий общепита",
      price: "договорная",
      icon: "Building"
    }
  ];

  const certificates = [
    "Сертификат качества препаратов",
    "Лицензия на дезинсекцию",
    "Страхование ответственности",
    "Экологическая безопасность"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={32} className="text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">DezPro</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#certificates" className="text-gray-600 hover:text-blue-600 transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Профессиональная дезинсекция
                <span className="text-blue-600 block">Быстро и безопасно</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Уничтожение тараканов, клопов, ос, клещей и других насекомых. 
                Используем только сертифицированные препараты, безопасные для человека и природы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать специалиста
                </Button>
                <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center mt-8 space-x-6">
                <div className="flex items-center">
                  <Icon name="Shield" size={24} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Безопасные препараты</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Выезд в день обращения</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/96695111-b494-4d15-9857-c5d7f7d5b644.jpg" 
                alt="Профессиональная дезинсекция" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={24} className="text-green-500 mr-2" />
                  <span className="font-semibold text-gray-900">Гарантия результата</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения по дезинсекции для частных лиц и предприятий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={service.icon} size={48} className="text-blue-600" />
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-xl text-gray-600">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Базовый</CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-4">от 1500₽</div>
                <CardDescription>Обработка 1-комнатной квартиры</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Диагностика проблемы</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Обработка одного вида насекомых</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Консультация специалиста</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Стандарт</CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-4">от 2500₽</div>
                <CardDescription>Комплексная обработка квартиры</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Полная диагностика</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Обработка всех видов насекомых</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Гарантия 6 месяцев</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Повторная обработка бесплатно</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Премиум</CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-4">от 4000₽</div>
                <CardDescription>Для предприятий и больших объектов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Полное обследование объекта</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Профилактическая программа</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Гарантия 12 месяцев</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-600">Договор на регулярное обслуживание</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании DezPro</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы специализируемся на профессиональной дезинсекции и дератизации, своевременно выполняя все виды работ. 
                В своей деятельности используем большой спектр новых препаратов, которые безопасны для человека и природы.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Все препараты сертифицированы и обладают высокой эффективностью в борьбе с тараканами, клопами, блохами, 
                осами, всеми видами насекомых и грызунов.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3 года</div>
                  <div className="text-gray-600">На рынке услуг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Гарантия результата</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Техподдержка</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Icon name="Leaf" size={24} className="text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Экологическая безопасность</h3>
                </div>
                <p className="text-gray-600">
                  Все препараты безопасны для человека, животных и окружающей среды
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <Icon name="Award" size={24} className="text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Сертифицированные препараты</h3>
                </div>
                <p className="text-gray-600">
                  Используем только проверенные и сертифицированные средства
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <Icon name="Users" size={24} className="text-gray-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Опытная команда</h3>
                </div>
                <p className="text-gray-600">
                  Работаем без разбора имущества, аккуратно и профессионально
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Сертификаты и лицензии</h2>
            <p className="text-xl text-gray-600">Подтверждение качества наших услуг</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name="FileCheck" size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{cert}</h3>
                  <Button variant="outline" size="sm" className="mt-4">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@dezpro.by</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Адрес</h3>
                  <p className="text-gray-600">г. Минск, ул. Примерная, 123</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Круглосуточно, без выходных</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Заказать обратный звонок</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Проблема</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    placeholder="Опишите вашу проблему"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">DezPro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональные услуги дезинсекции и дератизации с гарантией качества
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Уничтожение тараканов</li>
                <li>Борьба с клопами</li>
                <li>Уничтожение ос</li>
                <li>Обработка от клещей</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Сертификаты</li>
                <li>Гарантии</li>
                <li>Отзывы клиентов</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@dezpro.by</li>
                <li>г. Минск, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 DezPro. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;