import React from 'react';
import { ArrowRight, TrendingUp, Shield, Rocket, Globe, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const canonicalUrl = 'https://ody.kz';
  
  return (
    <>
      <Helmet>
        <title>Odyssey Exchange - Алғашқы Мемкоин Сауда Платформасы | 0% Спот Комиссиясы</title>
        <meta name="description" content="0% спот комиссиясымен мемкоиндер саудасын жасаңыз, ликвидациядан 10% қайтарым алыңыз және Odyssey Exchange-те 777x дейін леверидж алыңыз - жетекші крипто сауда платформасы." />
        <meta name="keywords" content="Odyssey Exchange, Odyssey Trade, Ody Exchange, Odyssey Биржасы, криптовалюта биржасы, мемкоин сауда, Қазақстан криптобиржасы, крипто сауда, Odyssey алмасу, Odyssey сауда, крипто биржа Қазақстан, мемкоин сауда платформасы" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Odyssey Exchange - Революциялық Мемкоин Сауда Платформасы" />
        <meta property="og:description" content="0% спот комиссиясымен және 777x дейін левериджбен мемкоиндер саудасын жасаңыз" />
        <meta property="og:image" content="https://ody.kz/odyssey-social.webp" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Odyssey Exchange" />
        <meta property="og:locale" content="kk_KZ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t_dmi3" />
        <meta name="twitter:creator" content="@t_dmi3" />
        <meta name="twitter:title" content="Odyssey Exchange - Алғашқы Мемкоин Сауда Платформасы" />
        <meta name="twitter:description" content="0% спот комиссиясымен мемкоиндер саудасын жасаңыз. Қазақстанның жетекші крипто сауда платформасы." />
        <meta name="twitter:image" content="https://ody.kz/odyssey-social.webp" />
        
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
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Басты бет",
                "item": "https://ody.kz"
              }]
            }
          `}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Odyssey Exchange",
              "url": "https://ody.kz",
              "logo": "https://ody.kz/logo.png",
              "description": "0% спот комиссиясымен жетекші мемкоин сауда платформасы",
              "sameAs": [
                "https://x.com/t_dmi3",
                "https://t.me/t_dmi3",
                "https://github.com/odysseyexchange"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["kk", "ru", "en"]
              }
            }
          `}
        </script>
      </Helmet>

      <main>
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/odyssey-exchange.webp"
              alt="Сауда фоны"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
              Odyssey Exchange-ке қош келдіңіз
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              0% спот комиссиясымен мемкоиндер саудасын жасаңыз, 777x дейін леверидж алыңыз және ликвидациядан 10% табыс табыңыз. Қазақстандағы алғашқы және жетекші мемкоин сауда платформасы.
            </p>
            <a
              href="/exchange"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
            >
              Қазір Сауда Жасаңыз
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Неліктен Odyssey Exchange-ті таңдау керек?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">0% Спот Комиссиясы</h3>
                <p className="text-gray-400">Сүйікті мемкоиндеріңізді комиссиясыз саудалаңыз. Біз саудагерлерге ең тиімді шарттарды ұсынамыз.</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Shield className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">10% Ликвидация Қайтарымы</h3>
                <p className="text-gray-400">Сауда жасау кезінде ликвидациядан 10% қайтарым алыңыз. Бұл нарықтың құбылмалы кезеңдерінде де табыс табуға мүмкіндік береді.</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                <Rocket className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">777x дейін Леверидж</h3>
                <p className="text-gray-400">Жетекші левериджбен сауда әлеуетіңізді максималды етіңіз. Біздің платформа нарықтағы ең жоғары леверидж мүмкіндіктерін ұсынады.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Қауіпсіз және Сенімді Сауда</h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-8">
                  Odyssey Exchange - бұл озық технологиялар мен қауіпсіздік стандарттарына негізделген сауда платформасы. Біз саудагерлерге тек ең жақсы тәжірибені ұсынамыз.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Озық Сауда Мүмкіндіктері</h3>
                    <p className="text-gray-300 mb-6">
                      Біздің платформа заманауи сауда құралдарымен жабдықталған. TradingView графиктері, көптеген индикаторлар және техникалық талдау құралдары сіздің сауда стратегияңызды жүзеге асыруға көмектеседі.
                    </p>
                    <ul className="text-gray-300 space-y-4">
                      <li className="flex items-center">
                        <TrendingUp className="w-6 h-6 text-pink-500 mr-3" />
                        Кәсіби деңгейдегі графиктер
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-6 h-6 text-yellow-500 mr-3" />
                        Жылдам ордерлерді орындау
                      </li>
                      <li className="flex items-center">
                        <Rocket className="w-6 h-6 text-pink-500 mr-3" />
                        Алгоритмдік сауда мүмкіндігі
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Қауіпсіздік және Қолдау</h3>
                    <p className="text-gray-300 mb-6">
                      Сіздің активтеріңіздің қауіпсіздігі - біздің басты басымдығымыз. Көп деңгейлі қауіпсіздік жүйесі және тәулік бойы техникалық қолдау қызметі сіздің қауіпсіз саудаңызды қамтамасыз етеді.
                    </p>
                    <ul className="text-gray-300 space-y-4">
                      <li className="flex items-center">
                        <Shield className="w-6 h-6 text-pink-500 mr-3" />
                        Көп факторлы аутентификация
                      </li>
                      <li className="flex items-center">
                        <Users className="w-6 h-6 text-yellow-500 mr-3" />
                        24/7 клиенттерді қолдау
                      </li>
                      <li className="flex items-center">
                        <Globe className="w-6 h-6 text-pink-500 mr-3" />
                        Халықаралық қауіпсіздік стандарттары
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg mb-12">
                  <h3 className="text-2xl font-semibold mb-6">Мемкоин Саудасының Болашағы</h3>
                  <p className="text-gray-300 mb-6">
                    Odyssey Exchange - бұл тек сауда платформасы ғана емес, бұл мемкоин саудасының жаңа дәуірі. Біз саудагерлерге нарықтағы ең жақсы шарттарды ұсынамыз:
                  </p>
                  <ul className="text-gray-300 space-y-4">
                    <li>• Спот саудада 0% комиссия - қосымша шығындарсыз сауда жасаңыз</li>
                    <li>• 777x дейін леверидж - сауда мүмкіндіктеріңізді кеңейтіңіз</li>
                    <li>• Ликвидациядан 10% қайтарым - тәуекелдерді азайтыңыз</li>
                    <li>• Жылдам ордерлерді орындау - нарық мүмкіндіктерін жіберіп алмаңыз</li>
                    <li>• Озық қауіпсіздік жүйесі - активтеріңіздің сақталуына сенімді болыңыз</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}