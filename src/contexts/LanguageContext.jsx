'use client';

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    const translations = {
        en: {
            home: 'Home',
            ourService: 'Our Service',
            ourClient: 'Our Client',
            contactUs: 'Contact Us',
            emailAddress: 'Email Address',
            message: 'Message',
            send: 'Send',
            success: 'Success',
            messageSent: 'Your message has been sent.',
            brandName: 'NATIONAL SPECIALIZED LABORATORY',
            ourServices: 'Our Services',
            checkThemOut: 'Check Them Out',
            readMore: 'Read More',
            discoverMore: 'Discover More',
            exploreMore: 'Explore More',
            moreListing: 'More Listing',
            ourLocation: 'Our Location',
            bannerText: 'The First and Only Independent Laboratory In Jordan',
            aboutUs: 'About Us',
            ourLocationAddress: 'Amman -Al Muqabalayn, Abu Bakr Al-Siddeeq St -Abu Awwad Commercial Complex bulid No.100',
            transformerOilTests: 'Transformer Oil Tests',
            lubeEngineOilTests: 'Lube & Engine Oil Tests',
            fuelTests: 'Fuel Tests',
            filtration: 'Filtration',
            transformerOilDescription: 'Transformer oil testing is a critical process in ensuring the reliability and longevity of power transformers. This specialized test evaluates the quality and performance of the insulating oil used in transformers, which plays a vital role in cooling and electrical insulation.',
            lubeEngineOilDescription: 'Lube oil testing is an essential process for monitoring the performance and condition of lubricating oils used in machinery and engines.',
            fuelTestsDescription: 'Fuel testing ensures the quality and performance of fuels like diesel, gasoline, and kerosene. It analyzes key properties such as density, viscosity, flash point, and contaminants to ensure compliance with standards. Regular testing helps optimize efficiency, prevent engine issues, and reduce emissions.',
            filtrationDescription: 'We are professional due to the long experience in this field. Vacuuming Transformer before filling, fill under vacuum. Purify and treat oil from contamination, humidity and degassing.',
            "is a critical maintenance process to ensure the efficiency and reliability of power transformers. It involves removing impurities, moisture, sludge, and dissolved gases that can degrade the oil&apos;s insulating and cooling properties. By restoring the oil&apos;s dielectric strength and thermal stability, filtration helps prevent electrical failures, reduces the risk of overheating, and extends the transformer&apos;s service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems": "is a critical maintenance process to ensure the efficiency and reliability of power transformers. It involves removing impurities, moisture, sludge, and dissolved gases that can degrade the oil&apos;s insulating and cooling properties. By restoring the oil&apos;s dielectric strength and thermal stability, filtration helps prevent electrical failures, reduces the risk of overheating, and extends the transformer&apos;s service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems",
            fuelTestsIntroLabel: 'Fuel Testing ',
            fuelTestsIntroDesc: 'is essential to ensure the quality, performance, and safety of fuels such as diesel, gasoline, and kerosene. It evaluates key parameters like density, viscosity, flash point, and contamination levels to ensure compliance with industry standards. Regular testing helps improve fuel efficiency, prevent engine damage, and reduce emissions, supporting reliable and sustainable operation.',
            lubeTestsIntroLabel: 'Lube oil testing ',
            lubeTestsIntroDesc: 'is an essential process for monitoring the performance and condition of lubricating oils used in machinery and engines. This testing evaluates critical properties such as viscosity, total base number (TBN), acidity, water content, and the presence of contaminants like metal particles or oxidation byproducts. By analyzing these parameters, lube oil testing ensures optimal lubrication, reduces wear and tear, and prevents equipment failures. Regular testing helps extend machinery life, optimize performance, and minimize operational downtime, making it a key aspect of preventive maintenance in industrial and automotive applications.',
            trTestsIntroLabel: 'Transformer oil testing ',
            trTestsIntroDesc: 'is a critical process in ensuring the reliability and longevity of power transformers. This specialized test evaluates the quality and performance of the insulating oil used in transformers, which plays a vital role in cooling and electrical insulation. Key parameters assessed include dielectric strength, moisture content, acidity, and the presence of dissolved gases, which can indicate potential faults. Regular testing helps identify degradation, contamination, or early signs of issues, allowing for timely maintenance and preventing costly failures. This ensures the efficient operation and safety of electrical systems.',
            login: 'Login',
        },
        ar: {
            login: 'تسجيل الدخول',
            home: 'الرئيسية',
            ourService: 'خدماتنا',
            ourClient: 'عملاؤنا',
            contactUs: 'اتصل بنا',
            brandName: 'الوطنية المتخصصة للمختبرات',
            ourServices: 'خدماتنا',
            checkThemOut: 'تعرف عليها',
            emailAddress: 'البريد الإلكتروني',
            message: 'الرسالة',
            send: 'إرسال',
            success: 'نجاح',
            messageSent: 'تم إرسال رسالتك.',
            readMore: 'اقرأ المزيد',
            discoverMore: 'اكتشف المزيد',
            exploreMore: 'استكشف المزيد',
            ourLocationAddress: 'عمان - المقابلين - شارع الحريه - عماره رقم 100',
            moreListing: 'المزيد من القوائم',
            ourLocation: 'موقعنا',
            bannerText: 'المختبر الآول و الوحيد المستقل في الأردن',
            aboutUs: 'من نحن',
            transformerOilTests: 'فحص زيت المحولات',
            lubeEngineOilTests: 'فحص زيت التشحيم والمحركات',
            fuelTests: 'فحص الوقود',
            filtration: 'الفلترة',
            transformerOilDescription: 'فحص زيت المحولات هو عملية حيوية لضمان موثوقية وطول عمر محولات الطاقة. هذا الفحص المتخصص يقيم جودة وأداء الزيت العازل المستخدم في المحولات، والذي يلعب دوراً حيوياً في التبريد والعزل الكهربائي.',
            lubeEngineOilDescription: 'فحص زيت التشحيم هو عملية أساسية لمراقبة أداء وحالة زيوت التشحيم المستخدمة في الآلات والمحركات.',
            fuelTestsDescription: 'فحص الوقود يضمن جودة وأداء الوقود مثل الديزل والبنزين والكيروسين. يحلل الخصائص الرئيسية مثل الكثافة واللزوجة ونقطة الوميض والملوثات لضمان الامتثال للمعايير. الفحص المنتظم يساعد في تحسين الكفاءة ومنع مشاكل المحرك وتقليل الانبعاثات.',
            filtrationDescription: 'نحن محترفون بسبب الخبرة الطويلة في هذا المجال. تفريغ المحول قبل الملء، والملء تحت الفراغ. تنقية ومعالجة الزيت من التلوث والرطوبة وإزالة الغازات.',
            "is a critical maintenance process to ensure the efficiency and reliability of power transformers. It involves removing impurities, moisture, sludge, and dissolved gases that can degrade the oil&apos;s insulating and cooling properties. By restoring the oil&apos;s dielectric strength and thermal stability, filtration helps prevent electrical failures, reduces the risk of overheating, and extends the transformer&apos;s service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems service life. Regular filtration is essential for minimizing downtime and maintaining safe and efficient operation of electrical systems":
                "عملية صيانة أساسية لضمان كفاءة وموثوقية محولات الطاقة. تتضمن إزالة الشوائب والرطوبة والرواسب والغازات المذابة التي قد تُضعف خصائص الزيت العازلة والمبردة. من خلال استعادة قوة العزل الكهربائي والاستقرار الحراري للزيت، يُساعد الترشيح على منع الأعطال الكهربائية، ويُقلل من خطر ارتفاع درجة الحرارة، ويُطيل عمر خدمة المحول. الترشيح المنتظم ضروري لتقليل فترات التوقف عن العمل والحفاظ على التشغيل الآمن والفعال للأنظمة الكهربائية.",
            fuelTestsIntroLabel: 'فحص الوقود ',
            fuelTestsIntroDesc: 'ضروري لضمان جودة وأداء وسلامة الوقود مثل الديزل والبنزين والكيروسين. يقيم معايير رئيسية مثل الكثافة واللزوجة ونقطة الوميض ومستويات التلوث لضمان الامتثال لمعايير الصناعة. الفحص المنتظم يساعد في تحسين كفاءة الوقود ومنع تلف المحرك وتقليل الانبعاثات، مما يدعم التشغيل الموثوق والمستدام.',
            lubeTestsIntroLabel: 'فحص زيت التشحيم ',
            lubeTestsIntroDesc: 'عملية أساسية لمراقبة أداء وحالة زيوت التشحيم المستخدمة في الآلات والمحركات. يقيم هذا الفحص خصائص حرجة مثل اللزوجة والرقم القاعدي الكلي (TBN) والحموضة ومحتوى الماء ووجود ملوثات مثل جزيئات المعدن أو نواتج الأكسدة. بتحليل هذه المعاملات، يضمن فحص زيت التشحيم تشحيمًا أمثل ويقلل التآكل ويمنع أعطال المعدات. يساعد الفحص المنتظم في إطالة عمر الآلات وتحسين الأداء وتقليل التوقف التشغيلي، مما يجعله جانبًا رئيسيًا للصيانة الوقائية في التطبيقات الصناعية والمركبات.',
            trTestsIntroLabel: 'فحص زيت المحولات ',
            trTestsIntroDesc: 'عملية حيوية لضمان موثوقية وطول عمر محولات الطاقة. يقيم هذا الفحص المتخصص جودة وأداء الزيت العازل المستخدم في المحولات، والذي يلعب دورًا حيويًا في التبريد والعزل الكهربائي. تشمل المعاملات الرئيسية قوة العزل الكهربائي ومحتوى الرطوبة والحموضة ووجود الغازات المذابة التي قد تشير إلى أعطال محتملة. يساعد الفحص المنتظم في تحديد التدهور أو التلوث أو العلامات المبكرة للمشكلات، مما يسمح بالصيانة في الوقت المناسب ومنع الأعطال المكلفة. وهذا يضمن التشغيل الفعال والآمن للأنظمة الكهربائية.'
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };
    const Strings = (key) => {
        return translations[language][key] || key;
    };
    const value = {
        language,
        toggleLanguage,
        t,
        Strings
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}; 