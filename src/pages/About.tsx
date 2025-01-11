import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Users, Globe, TrendingUp, Rocket, BarChart3 } from 'lucide-react';

export default function About() {
  const canonicalUrl = 'https://ody.kz/about';
  
  return (
    <>
      <Helmet>
        <title>Odyssey Exchange туралы | Жетекші Мемкоин Сауда Платформасы</title>
        <meta name="description" content="Odyssey Exchange туралы білу - Қазақстанның жетекші мемкоин сауда платформасы, 0% спот комиссиясы және 777x дейін леверидж ұсынады." />
        <meta name="keywords" content="Odyssey Exchange, Odyssey Trade, Ody Exchange, Odyssey Биржасы, крипто биржа, Қазақстан биржасы, мемкоин сауда, криптовалюта сауда, биткоин сауда, Odyssey алмасу, крипто биржа Қазақстан" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Odyssey Exchange туралы - Революциялық Сауда Платформасы" />
        <meta property="og:description" content="Odyssey Exchange қалай мемкоин саудасын инновациялық мүмкіндіктермен және теңдессіз артықшылықтармен революциялық өзгертіп жатқанын біліңіз." />
        <meta property="og:image" content="https://ody.kz/og-image.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Odyssey Exchange" />
        <meta property="og:locale" content="kk_KZ" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t_dmi3" />
        <meta name="twitter:creator" content="@t_dmi3" />
        <meta name="twitter:title" content="Odyssey Exchange туралы - Мемкоин Саудасының Болашағы" />
        <meta name="twitter:description" content="Қазақстанның алғашқы мемкоин сауда платформасы туралы білу. 0% спот комиссиясы, 777x леверидж." />
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
                  "name": "Біз туралы",
                  "item": "https://ody.kz/about"
                }
              ]
            }
          `}
        </script>
        
        {/* About Page Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Odyssey Exchange",
                "description": "Қазақстанның жетекші мемкоин сауда платформасы",
                "foundingDate": "2023",
                "url": "https://ody.kz",
                "sameAs": [
                  "https://x.com/t_dmi3",
                  "https://t.me/t_dmi3",
                  "https://github.com/odysseyexchange"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Odyssey Team"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Kazakhstan"
                },
                "knowsAbout": [
                  "Cryptocurrency Trading",
                  "Blockchain Technology",
                  "Digital Assets",
                  "Financial Technology"
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
            <h1 className="text-5xl font-bold text-center mb-8">Odyssey Exchange туралы</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Инновациялық мүмкіндіктер, теңдессіз леверидж және нөлдік комиссиялық алымдармен мемкоин саудасын революциялық өзгерту. Қазақстанның алғашқы және жетекші мемкоин сауда платформасы.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 rounded-lg bg-gray-800">
                <Shield className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Қауіпсіз Платформа</h3>
                <p className="text-gray-400">
                  Сіздің активтеріңіз бен сауда әрекеттеріңізді қорғау үшін заманауи қауіпсіздік шараларымен құрылған.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800">
                <Users className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Өсіп келе жатқан қауымдастық</h3>
                <p className="text-gray-400">
                  Мемкоин энтузиастарының белсенді қауымдастығына қосылыңыз.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800">
                <Globe className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Жаһандық қол жетімділік</h3>
                <p className="text-gray-400">
                  Біздің қолайлы платформа арқылы әлемнің кез келген жерінен сауда жасаңыз.
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold mb-6">Біздің Тарих және Даму</h2>
                <p className="text-gray-300 mb-6">
                  Odyssey Exchange 2023 жылы Қазақстанның алғашқы мемкоин сауда платформасы ретінде құрылды. Біздің мақсатымыз - мемкоин саудасын қолжетімді, қауіпсіз және тиімді ету. Бүгінде біз 10,000+ белсенді саудагерге қызмет көрсетеміз және нарықтағы ең жақсы сауда шарттарын ұсынамыз.
                </p>
                <p className="text-gray-300 mb-6">
                  Біздің платформа үнемі дамып келеді. Біз жаңа технологияларды енгізіп, қауіпсіздік стандарттарын жетілдіріп, саудагерлердің қажеттіліктеріне сай жаңа мүмкіндіктер қосып отырамыз. Odyssey Exchange - бұл тек сауда платформасы ғана емес, бұл мемкоин саудасының болашағы.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Технологиялық Артықшылықтар</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>• Жоғары өнімді сауда жүйесі - секундына 100,000+ транзакция</li>
                    <li>• Төмен латенттілік - 50мс-тан аз ордер орындау уақыты</li>
                    <li>• Көп деңгейлі қауіпсіздік - суық әмиян сақтау және шифрлау</li>
                    <li>• Масштабталатын архитектура - жүктеме кезінде тұрақты жұмыс</li>
                    <li>• API интеграция - алгоритмдік сауда мүмкіндіктері</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Қауымдастық және Қолдау</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>• 10,000+ белсенді саудагер</li>
                    <li>• Көп тілді 24/7 клиенттерді қолдау</li>
                    <li>• Оқу материалдары мен вебинарлар</li>
                    <li>• Белсенді Telegram қауымдастығы</li>
                    <li>• Жиі платформа жаңартулары</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6">Болашаққа Көзқарас</h3>
                <p className="text-gray-300 mb-6">
                  Odyssey Exchange мемкоин саудасының болашағын қалыптастыруда. Біздің жоспарларымыз:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li>• Жаңа сауда құралдарын енгізу</li>
                  <li>• Қауіпсіздік жүйесін үнемі жетілдіру</li>
                  <li>• Халықаралық нарыққа шығу</li>
                  <li>• Мобильді қосымшаларды дамыту</li>
                  <li>• Қауымдастықты кеңейту</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Біздің Құндылықтар</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Инновация</h4>
                    <p className="text-gray-300 mb-6">
                      Біз үнемі жаңа технологияларды зерттеп, платформамызды жетілдіріп отырамыз. Инновация - біздің негізгі құндылықтарымыздың бірі.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Қауіпсіздік</h4>
                    <p className="text-gray-300 mb-6">
                      Сіздің активтеріңіздің қауіпсіздігі - біздің басты басымдығымыз. Біз ең жоғары қауіпсіздік стандарттарын қолданамыз.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Ашықтық</h4>
                    <p className="text-gray-300 mb-6">
                      Біз барлық операцияларымызда ашықтықты сақтаймыз. Сіз әрқашан өз активтеріңіз бен транзакцияларыңызды бақылай аласыз.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Қолдау</h4>
                    <p className="text-gray-300 mb-6">
                      Біздің команда сіздің сұрақтарыңызға жауап беруге және проблемаларыңызды шешуге әрқашан дайын.
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