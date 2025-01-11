import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Percent, BarChart3, Shield, Users, Clock } from 'lucide-react';

export default function Features() {
  const canonicalUrl = 'https://ody.kz/features';
  
  return (
    <>
      <Helmet>
        <title>Мүмкіндіктер | Odyssey Exchange - Озық Мемкоин Саудасы</title>
        <meta name="description" content="Odyssey Exchange-тің бірегей мүмкіндіктерін зерттеңіз: 777x леверидж, 0% спот комиссиясы, 10% ликвидация қайтарымы және озық сауда құралдары." />
        <meta name="keywords" content="Odyssey Exchange, Odyssey Trade, Ody Exchange, Odyssey Биржасы, крипто сауда, мемкоин сауда, биткоин сауда, криптовалюта леверидж, Қазақстан крипто, Odyssey алмасу, крипто биржа мүмкіндіктері, мемкоин сауда платформасы" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Odyssey Exchange Мүмкіндіктері - Озық Сауда Құралдары" />
        <meta property="og:description" content="Оңтайлы мемкоин саудасына арналған жетекші мүмкіндіктерімізді ашыңыз: 777x леверидж, 0% спот комиссиясы." />
        <meta property="og:image" content="https://ody.kz/og-image.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Odyssey Exchange" />
        <meta property="og:locale" content="kk_KZ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t_dmi3" />
        <meta name="twitter:creator" content="@t_dmi3" />
        <meta name="twitter:title" content="Odyssey Exchange Мүмкіндіктері - Озық Сауда Құралдары" />
        <meta name="twitter:description" content="777x леверидж, 0% спот комиссиясы және озық сауда құралдары. Мемкоин саудасының жаңа деңгейі." />
        <meta name="twitter:image" content="https://ody.kz/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Odyssey Exchange" />
        <meta name="application-name" content="Odyssey Exchange" />
        <meta name="apple-mobile-web-app-title" content="Odyssey Exchange" />
        <meta name="theme-color" content="#111827" />
        
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
                  "name": "Мүмкіндіктер",
                  "item": "https://ody.kz/features"
                }
              ]
            }
          `}
        </script>
        
        {/* Features Page Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Odyssey Exchange Мүмкіндіктері",
              "description": "777x леверидж және 0% спот комиссиясы бар озық сауда мүмкіндіктері",
              "provider": {
                "@type": "Organization",
                "name": "Odyssey Exchange",
                "url": "https://ody.kz"
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "777x Леверидж",
                    "description": "Жетекші 777x дейінгі леверидж опциялары"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "0% Спот Комиссиясы",
                    "description": "Комиссиясыз спот сауда мүмкіндігі"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Озық Графиктер",
                    "description": "Кәсіби деңгейдегі сауда графиктері"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Қауіпсіз Сауда",
                    "description": "Көп қабатты қауіпсіздік жүйесі"
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      {/* Rest of the existing JSX remains exactly the same */}
      <main className="pt-16">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-8">Платформа мүмкіндіктері</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Біздің инновациялық мүмкіндіктерімізбен мемкоин саудасының келесі буынын тәжірибелеңіз.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">777x Леверидж</h3>
                <p className="text-gray-400">
                  Жетекші 777x дейінгі леверидж опцияларымен сауда әлеуетіңізді максималды етіңіз.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Percent className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">0% Спот Комиссиясы</h3>
                <p className="text-gray-400">
                  Сүйікті мемкоиндеріңізді спот саудасында комиссиясыз саудалаңыз.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <BarChart3 className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Озық Графиктер</h3>
                <p className="text-gray-400">
                  Көптеген уақыт аралықтары мен индикаторлары бар кәсіби деңгейдегі сауда графиктері.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Shield className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Қауіпсіз Сауда</h3>
                <p className="text-gray-400">
                  Сіздің активтеріңіз бен транзакцияларыңызды қорғайтын көп қабатты қауіпсіздік жүйесі.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Users className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Серіктестік Бағдарлама</h3>
                <p className="text-gray-400">
                  Біздің жомарт серіктестік бағдарламамыз арқылы 50% дейін комиссия табыңыз.
                </p>
              </div>

              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Clock className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">24/7 Қолдау</h3>
                <p className="text-gray-400">
                  Кез келген сұрақтарыңызға көмектесу үшін тәулік бойы клиенттерді қолдау.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mt-16">
              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6">Сауда Мүмкіндіктерінің Толық Сипаттамасы</h2>
                <p className="text-gray-300 mb-6">
                  Odyssey Exchange платформасы саудагерлерге кең ауқымды мүмкіндіктер ұсынады. Біздің платформаның әрбір компоненті максималды өнімділік пен қауіпсіздікті қамтамасыз ету үшін мұқият жасалған.
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">Сауда Түрлері</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Спот сауда - 0% комиссиямен</li>
                  <li>• Маржиналды сауда - 777x дейін леверидж</li>
                  <li>• Фьючерстер - қысқа және ұзақ позициялар</li>
                  <li>• OTC сауда - ірі көлемді операциялар үшін</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Ордер Түрлері</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Нарықтық ордерлер - жылдам орындау</li>
                  <li>• Лимиттік ордерлер - бағаны бақылау</li>
                  <li>• Стоп-лосс ордерлер - тәуекелдерді басқару</li>
                  <li>• OCO ордерлер - күрделі сауда стратегиялары</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6">Техникалық Талдау Құралдары</h3>
                <p className="text-gray-300 mb-6">
                  Біздің платформа кәсіби деңгейдегі техникалық талдау құралдарымен жабдықталған:
                </p>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• 100+ техникалық индикаторлар</li>
                  <li>• Көп уақыт аралықтары</li>
                  <li>• Фибоначчи құралдары</li>
                  <li>• Тренд сызықтары</li>
                  <li>• Көлем профилі</li>
                  <li>• Нарық тереңдігі</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6">Қауіпсіздік Жүйесі</h3>
                <p className="text-gray-300 mb-6">
                  Біздің көп деңгейлі қауіпсіздік жүйесі сіздің активтеріңізді қорғайды:
                </p>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>• Көп факторлы аутентификация</li>
                  <li>• Суық әмиян сақтау</li>
                  <li>• SSL/TLS шифрлау</li>
                  <li>• DDoS қорғанысы</li>
                  <li>• Күдікті әрекеттерді анықтау</li>
                  <li>• Тұрақты қауіпсіздік аудиті</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">API Мүмкіндіктері</h3>
                <p className="text-gray-300 mb-6">
                  Алгоритмдік сауда үшін толық API қол жетімділігі:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li>• REST API - барлық сауда операциялары үшін</li>
                  <li>• WebSocket - нақты уақыттағы деректер</li>
                  <li>• FIX API - институционалды клиенттер үшін</li>
                  <li>• Толық API құжаттамасы</li>
                  <li>• Тестілік орта</li>
                  <li>• Код мысалдары мен SDK</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}