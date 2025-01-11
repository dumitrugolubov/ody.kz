import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Odyssey Exchange дегеніміз не?",
    answer: "Odyssey Exchange - бұл Қазақстанның алғашқы мемкоин сауда платформасы. Біз 0% спот комиссиясын, 777x дейін левериджді және ликвидациядан 10% қайтарымды ұсынамыз."
  },
  {
    question: "Қалай тіркелуге болады?",
    answer: "Тіркелу үшін 'Сауда жасау' батырмасын басып, қарапайым тіркелу формасын толтырыңыз. Процесс 5 минуттан аз уақыт алады және бірден сауда жасауға мүмкіндік береді."
  },
  {
    question: "Қандай комиссиялар бар?",
    answer: "Спот саудада 0% комиссия. Маржиналды саудада комиссиялар позицияны ашу үшін 0.05% және жабу үшін 0.05% құрайды. Біз нарықтағы ең төмен комиссияларды ұсынамыз."
  },
  {
    question: "777x леверидж қалай жұмыс істейді?",
    answer: "777x леверидж сіздің сауда позицияңызды 777 есеге дейін үлкейтуге мүмкіндік береді. Бұл үлкен пайда әкелуі мүмкін, бірақ тәуекелдер де жоғары. Жаңа саудагерлерге төмен леверидж ұсынылады."
  },
  {
    question: "Менің активтерім қауіпсіз бе?",
    answer: "Иә. Біз көп деңгейлі қауіпсіздік жүйесін қолданамыз, соның ішінде суық әмиян сақтау, екі факторлы аутентификация және тұрақты қауіпсіздік аудиті бар."
  },
  {
    question: "Қандай төлем әдістері қолжетімді?",
    answer: "Біз банк картасы, банк аударымы, криптовалюта және электронды әмияндар арқылы төлемдерді қабылдаймыз. Барлық транзакциялар қауіпсіз және жылдам өңделеді."
  },
  {
    question: "Ликвидация қайтарымы қалай жұмыс істейді?",
    answer: "Егер сіздің позицияңыз ликвидацияланса, біз комиссияның 10% автоматты түрде қайтарамыз. Бұл тәуекелдерді азайтуға және шығындарды өтеуге көмектеседі."
  },
  {
    question: "24/7 қолдау қызметіне қалай хабарласуға болады?",
    answer: "Біздің қолдау қызметі тәулік бойы жұмыс істейді. Сіз платформадағы чат арқылы, электронды пошта арқылы немесе әлеуметтік желілер арқылы хабарласа аласыз."
  },
  {
    question: "Серіктестік бағдарламаға қалай қосылуға болады?",
    answer: "Серіктес болу үшін тіркеліп, серіктестік бөлімге өтіңіз. Сіз 50% дейін комиссия ала аласыз және арнайы маркетингтік материалдарға қол жеткізе аласыз."
  },
  {
    question: "Қандай криптовалюталар қолжетімді?",
    answer: "Біз барлық танымал криптовалюталарды және мемкоиндерді ұсынамыз. Толық тізімді сауда платформасында көре аласыз."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const canonicalUrl = 'https://ody.kz/faq';

  return (
    <>
      <Helmet>
        <title>Жиі қойылатын сұрақтар | Odyssey Exchange</title>
        <meta name="description" content="Odyssey Exchange туралы жиі қойылатын сұрақтар мен жауаптар. Мемкоин саудасы, комиссиялар, қауіпсіздік және басқа да маңызды ақпарат." />
        <meta name="keywords" content="Odyssey Exchange FAQ, Odyssey сұрақтар, мемкоин сауда сұрақтары, крипто биржа FAQ, Odyssey көмек" />
        
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content="Odyssey Exchange - Жиі қойылатын сұрақтар" />
        <meta property="og:description" content="Odyssey Exchange платформасы туралы барлық сұрақтарыңызға жауаптар." />
        <meta property="og:url" content={canonicalUrl} />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${faqs.map(faq => `{
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      <main className="pt-16">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-8">Жиі қойылатын сұрақтар</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
              Odyssey Exchange платформасы туралы жиі қойылатын сұрақтарға жауаптар
            </p>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-lg bg-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 py-4 bg-gray-800/50">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}