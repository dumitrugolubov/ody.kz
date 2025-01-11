import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Users, BarChart3, Rocket, Shield, Globe, TrendingUp } from 'lucide-react';

export default function Partners() {
  const canonicalUrl = 'https://ody.kz/partners';
  
  return (
    <>
      <Helmet>
        <title>Серіктестік Бағдарлама | Odyssey Exchange - 50% дейін Комиссия Табыңыз</title>
        <meta name="description" content="Odyssey Exchange-тің серіктестік бағдарламасына қосылып, 50% дейін комиссия табыңыз. Крипто серіктестік саяхатыңызды бүгін бастаңыз." />
        <meta name="keywords" content="Odyssey Exchange, Odyssey Trade, Ody Exchange, Odyssey Биржасы, крипто серіктестік, серіктестік бағдарлама, Қазақстан криптобиржасы, Odyssey алмасу, криптовалюта серіктестік, мемкоин серіктестік, крипто реферал, биткоин серіктестік" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Odyssey Exchange Серіктестік Бағдарламасы - Жоғары Комиссиялар Табыңыз" />
        <meta property="og:description" content="Серіктес болып, жіберілген саудалардан 50% дейін комиссия табыңыз. Қазақстанның жетекші мемкоин сауда платформасының серіктесі болыңыз." />
        <meta property="og:image" content="https://ody.kz/og-image.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Odyssey Exchange" />
        <meta property="og:locale" content="kk_KZ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t_dmi3" />
        <meta name="twitter:creator" content="@t_dmi3" />
        <meta name="twitter:title" content="Odyssey Exchange Серіктестік Бағдарламасы - 50% Комиссия" />
        <meta name="twitter:description" content="Мемкоин саудасының болашағын бірге құрайық. Серіктес болып, жоғары комиссиялар табыңыз." />
        <meta name="twitter:image" content="https://ody.kz/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Odyssey Exchange" />
        <meta name="application-name" content="Odyssey Exchange" />
        <meta name="apple-mobile-web-app-title" content="Odyssey Exchange" />
        <meta name="theme-color" content="#111827" />
        
        <link rel="alternate" type="application/rss+xml" title="Odyssey Exchange Turbo" href="https://ody.kz/turbo.xml" />
        
        {/* Breadcrumbs Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Басты бет",
                  "item": "https://ody.kz"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Серіктестер",
                  "item": "https://ody.kz/partners"
                }
              ]
            }
          `}
        </script>
        
        {/* Partners Program Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Odyssey Exchange Серіктестік Бағдарламасы",
              "description": "50% дейін комиссия ұсынатын серіктестік бағдарлама",
              "provider": {
                "@type": "Organization",
                "name": "Odyssey Exchange",
                "url": "https://ody.kz",
                "sameAs": [
                  "https://x.com/t_dmi3",
                  "https://t.me/t_dmi3",
                  "https://github.com/odysseyexchange"
                ]
              },
              "mainEntity": {
                "@type": "Service",
                "name": "Odyssey Exchange Серіктестік Бағдарламасы",
                "description": "Крипто саудагерлерге арналған серіктестік бағдарлама",
                "provider": {
                  "@type": "Organization",
                  "name": "Odyssey Exchange"
                },
                "offers": {
                  "@type": "Offer",
                  "description": "50% дейін комиссия",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceType": "Online",
                    "serviceUrl": "https://ody.kz/partners"
                  }
                },
                "serviceType": "Affiliate Program"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Rest of the existing JSX remains exactly the same */}
      <main className="pt-16">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-8">Серіктестік Бағдарлама</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Біздің серіктестік бағдарламаға қосылып, мемкоин сауда қауымдастығын өсіруге көмектесе отырып, жетекші комиссиялар табыңыз. Odyssey Exchange-тің серіктесі болып, криптовалюта нарығындағы табыс мүмкіндіктерін ашыңыз.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="p-6 rounded-lg bg-gray-800 text-center">
                <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">50%</h3>
                <p className="text-gray-400">Максималды Комиссия</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800 text-center">
                <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">10k+</h3>
                <p className="text-gray-400">Белсенді Серіктестер</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800 text-center">
                <BarChart3 className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">$1M+</h3>
                <p className="text-gray-400">Айлық Төлемдер</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-800 text-center">
                <Rocket className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">24с</h3>
                <p className="text-gray-400">Жылдам Төлемдер</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-8">Серіктестік Бағдарламаның Артықшылықтары</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Shield className="w-12 h-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Тұрақты Табыс</h3>
                    <p className="text-gray-300">
                      Рефералдарыңыздың әрбір саудасынан комиссия алыңыз. Біздің серіктестік бағдарлама өмір бойы табыс әкеледі - сіздің рефералдарыңыз сауда жасаған сайын, сіз комиссия аласыз.
                    </p>
                  </div>
                  <div>
                    <Globe className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Жаһандық Мүмкіндіктер</h3>
                    <p className="text-gray-300">
                      Әлемнің кез келген жерінен серіктес болыңыз. Біздің платформа халықаралық деңгейде жұмыс істейді, сондықтан сіздің табыс мүмкіндіктеріңіз шектеусіз.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-8">Серіктес болу жолы</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">1. Тіркелу және Верификация</h3>
                    <p className="text-gray-300">
                      Odyssey Exchange-те тіркеліп, жеке басыңызды растаңыз. Бұл процесс қарапайым және жылдам, әдетте 5 минуттан аз уақыт алады. Верификация сіздің серіктестік аккаунтыңыздың қауіпсіздігін қамтамасыз етеді.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">2. Реферал Сілтемеңізді Алу</h3>
                    <p className="text-gray-300">
                      Серіктестік тақтаңыздан бірегей реферал сілтемеңізге қол жеткізіңіз. Әрбір сілтеме бірегей және қауіпсіз, сіздің рефералдарыңызды автоматты түрде қадағалайды. Сілтемеңізді әлеуметтік желілерде, блогтарда немесе веб-сайттарда бөлісе аласыз.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">3. Аудиторияңызбен Бөлісу</h3>
                    <p className="text-gray-300">
                      Сілтемеңізді әлеуметтік желілерде, блогтарда немесе басқа платформаларда бөлісіңіз. Біз сізге маркетингтік материалдар, баннерлер және промо-материалдар ұсынамыз. Сіздің аудиторияңыз Odyssey Exchange-тің артықшылықтарын білгенде, олар сіздің сілтемеңіз арқылы тіркеледі.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">4. Табыс Табу және Өсу</h3>
                    <p className="text-gray-300">
                      Рефералдарыңыздың саудаларынан комиссия алыңыз. Төлемдер автоматты түрде 24 сағат ішінде жүзеге асырылады. Сіздің табысыңыз рефералдарыңыздың белсенділігіне байланысты, сондықтан оларға қолдау көрсетіп, платформаны белсенді пайдалануға шақырыңыз.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-8">Серіктестік Деңгейлер</h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Бастапқы Деңгей</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 30% дейін комиссия</li>
                      <li>• Негізгі маркетингтік материалдар</li>
                      <li>• Серіктестік тақта қол жетімділігі</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">VIP Деңгей</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 40% дейін комиссия</li>
                      <li>• Кеңейтілген маркетингтік материалдар</li>
                      <li>• Жеке менеджер</li>
                      <li>• Арнайы промо-кодтар</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Элиталық Деңгей</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 50% дейін комиссия</li>
                      <li>• Эксклюзивті маркетингтік материалдар</li>
                      <li>• Басымдықты қолдау</li>
                      <li>• Арнайы бонустар мен сыйлықтар</li>
                      <li>• Серіктестік іс-шараларға қатысу</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-8">Серіктестік Қолдау</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <TrendingUp className="w-12 h-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Маркетингтік Қолдау</h3>
                    <p className="text-gray-300">
                      Біз сізге маркетингтік материалдар, баннерлер, промо-материалдар және әлеуметтік медиа контентін ұсынамыз. Сонымен қатар, біздің маркетинг мамандары сіздің промо-стратегияңызды жақсартуға көмектеседі.
                    </p>
                  </div>
                  <div>
                    <Users className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Техникалық Қолдау</h3>
                    <p className="text-gray-300">
                      24/7 техникалық қолдау қызметі сіздің сұрақтарыңызға жауап беруге және проблемаларыңызды шешуге дайын. Біз сіздің табысты серіктес болуыңызға көмектесеміз.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}