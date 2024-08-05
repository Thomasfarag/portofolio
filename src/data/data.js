// -----  Top Banner -----------

import banner from "../assets/Programming-amico.png"; // هنا تغير البنر الرئيسي

// -----  About Images  -----------

import AboutImage from "../assets/Screenshot_29-3-2024_15328_www.instagram.com.jpeg"; // هنا تغير صورة السيرة الثاتية

// -----  Testimonil Images -----------

// --------------------  الصورة 1
import TestimonilImg1 from "../assets/profile.png"; // هنا تغير صورة التوصيات اذا ودك

// --------------------  الصورة 2
import TestimonilImg2 from "../assets/profile.png"; // هنا تغير صورة التوصيات اذا ودك

// الصورة --------------------  3
import TestimonilImg3 from "../assets/profile.png"; // هنا تغير صورة التوصيات اذا ودك

// -----  Award Images -----------

// --------------------  الصورة 1
// import AwardImg1 from "../assets/a1.png"; // هنا تغير صورة الجوائز اذا ودك

// // الصورة --------------------  2
// import AwardImg2 from "../assets/a2.png"; // هنا تغير صورة الجوائز اذا ودك

// // --------------------  الصورة 3
// import AwardImg3 from "../assets/a3.png"; // هنا تغير صورة الجوائز اذا ودك

// |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-||-|-|-|-|-|-|-|-|

// ----------------- Home ----------------- //
// ----------------- Home محتوى القسم الاول  ----------------- //

export const sliderContent = {
  banner: banner,
  name: "Thomas Farag",
  name_ar: "توماس فرج",
  description: `Are you in need of a skilled web developer? Look no further! I'm here to help. I am a freelancer specializing in turning ideas into amazing web applications and creating stunning user experiences.`,
  description_ar: `هل تبحث عن خبير في تطوير الويب وتصميم واجهات المستخدم؟ أنا هنا لمساعدتك! أنا فريلانسر متخصص في تحويل الأفكار إلى تطبيقات ويب رائعة وتجارب مستخدم مذهلة.`,
  btnText: "Donwload CV",
  btnText_ar: " تحميل الـCV ",
  btnText2: " My Work",
  btnText2_ar: " اعمالي",
};

export const jobs = {
  jobs: [ "MERN-Stack Web Developer "],
};

// ----------------- End Home ----------------- //

// ----------------------------------------  About ----------------- //

// ----------------- CV ----------------- //

// ----------------- About > CV محتوى القسم الثاني  ----------------- //

export const CV = {
  profileImg: AboutImage,
  name: "Thomas Farag",
  name_ar: "توماس فرج",
  description_1: `
  With my extensive experience as a web developer, I can build sophisticated and responsive websites and web applications using technologies such as HTML, CSS, JavaScript, and popular frameworks like ReactJS and Angular. I will work closely with you to understand your digital needs and goals, ensuring efficient and responsive implementation.

Additionally, as a UI/UX designer, I will ensure that the user experience of your website or application is seamless and delightful. I will create attractive and user-friendly interfaces that engage users effectively and enhance their overall experience`,
  description_1_ar: `
  بفضل خبرتي الواسعة كمطوّر ويب، يمكنني بناء مواقع وتطبيقات ويب متطورة باستخدام تقنيات مثل HTML، CSS، JavaScript وإطار العمل الشهير  ReactJS . سأعمل معك لفهم احتياجاتك وأهدافك الرقمية، وسأضمن تنفيذها بطريقة فعّالة ومتجاوبة.
  وبفضل مهاراتي كمصمم واجهات المستخدم وتجربة المستخدم، سأضمن أن تكون تجربة المستخدم الخاصة بموقعك أو تطبيقك سلسة ومبهجة. سأعمل على تصميم واجهات مستخدم جذابة وسهلة الاستخدام تضمن تفاعل المستخدم مع المحتوى بشكل فعّال وتعزز تجربته  `,
  description_2: `
  I will also enhance user interaction and experience through graphic design, animation, and content layout. You will have a unique and visually captivating interface that sets you apart from competitors and attracts users.

Whether you need to create a new website, update the design of an existing site, or improve the user experience of your current application, I am here to serve you. Contact me now to discuss your project and let's bring your digital vision to life, providing an exceptional user experience.`,
  description_2_ar: `
  أيضًا، سأعمل على تحسين تجربة المستخدم وتجربة التفاعل من خلال تصميم الرسومات والصور المتحركة وتنسيق المحتوى. ستكون لديك واجهة فريدة وملفتة للنظر ستميزك عن المنافسين وتجذب المستخدمين.
  سواء كنت تحتاج إلى إنشاء موقع ويب جديد، تحديث تصميم موقع حالي، أو تحسين تجربة المستخدم لتطبيقك الحالي، أنا هنا لخدمتك. اتصل بي الآن لمناقشة مشروعك واستعراض الأفكار والخطط الخاصة بك. سوف نعمل معًا على تحقيق رؤيتك الرقمية وتوفير تجربة استثنائية للمستخدمين.  `,
  birthday: "28th Aug 2006",
  birthday_ar: "28th Aug 2006",
  age: "17 years",
  age_ar: "17 سنة",
  address: "Egypt-Minya-New Minya",
  address_ar: "مصر - المنيا - المنيا الجديده",
  phone: "01289173088",
  email: "fargthomas4@gmail.com",
  freelance: "Available",
  freelance_ar: "متاح للعمل",
};

// ----------------- End CV ----------------- //

// ----------------- ServiceContent ----------------- //
// ----------------- About > Service محتوى القسم الثاني  ----------------- //

export const ServiceContent = [
  // خدمة 1
  {
    icon: "icon-mobile",
    title: "Web Development ",
    title_ar: "مطور مواقع",
    descriptions: `Are you in need of a top-notch website with a unique design and advanced features? Look no further! I have the skills and expertise to develop your website in a professional and innovative way. I will work closely with you to understand your specific needs and requirements,.`,
    descriptions_ar: `تحتاج إلى خدمة تطوير موقع ويب بتصميم متميز ووظائف متقدمة؟ إذاً، فأنت في المكان المناسب!إنني أتمتع بالمهارات والخبرة اللازمة لتطوير موقعك الإلكتروني بطريقة احترافية وفريدة. سأعمل جنبًا إلى جنب معك لفهم احتياجاتك ومتطلباتك الخاصة، وإيجاد أفضل الحلول التقنية لتحويل رؤيتك إلى حقيقة ملموسة. `,
    delayAnimation: "0",
  },

  // خدمة 2
  {
    icon: "icon-desktop",
    title: "Web Design ",
    title_ar: "مصمم مواقع",
    descriptions: `I can help you create a professional website design that meets your needs and business requirements. I will design a website with an innovative and unique design that grabs attention and attracts visitors. I will use the latest technology and tools to ensure the best quality.`,
    descriptions_ar: `أستطيع مساعدتك في إنشاء تصميم موقع احترافي ومتميز يلبي احتياجاتك ومتطلبات عملك. سأعمل على تصميم موقع ويب مبتكر وفريد من نوعه. سأستخدم أحدث التقنيات والأدوات لضمان أفضل جودة.`,
    delayAnimation: "200",
  },

  // خدمة 3
  // {
  //   icon: "icon-target",
  //   title: "Seo Marketing",
  //   title_ar: "تحسين محركات البحث SEO",
  //   descriptions: `As a freelance SEO marketer, I will work with you to improve your website's search engine ranking. I will start by analyzing your website and identifying the relevant keywords that your target audience is searching for, which will make it easier for them to find your website in search results.`,
  //   descriptions_ar: `كفريلانسر مستقل في مجال التسويق الإلكتروني وتحسين محركات البحث (SEO)، سأعمل معك على تحسين مركز موقعك في نتائج محركات البحث. سأبدأ بتحليل موقعك وتحديد الكلمات الرئيسية المناسبة التي تهم جمهورك المستهدف والتي ستجعلهم يجدون موقعك بسهولة في نتائج البحث`,
  //   delayAnimation: "400",
  // },
  //  تقدر تضيف خدمة اخرى عن طريق النسخ واللصق
];

// ----------------- End ServiceContent ----------------- //

// ----------------- TestimonilContent ----------------- //
// ----------------- About > Testimonil محتوى القسم الثاني  ----------------- //

export const TestimonilContent = [
  // التوصية 1
  {
    imageName: TestimonilImg1,
    desc: `Excellent web developer! Thomas farag delivered a stunning website with a seamless user experience. Highly recommended!`,
    desc_ar: `مطور ويب ممتاز! علي محمد ما قصّر في تطوير موقع رائع بتجربة مستخدم سلسة. أنصح فيه بشدة!`,
    reviewerName: "Noura Abdulaziz",
    reviewerName_ar: "نورة عبد العزيز",
    delayAnimation: "0",
  },

  // التوصية 2
  {
    imageName: TestimonilImg2,
    desc: `Impressive work! Thomas farag created a visually appealing website that perfectly captures my brand. Quick and efficient service!`,
    desc_ar: `شغل رهيب واحترافي! علي محمد عمل موقع جذاب يعكس تمامًا هويتي. تواصل سريع وجودة عالية!`,
    reviewerName: "Yusef Al-Rashidi",
    reviewerName_ar: "يوسف الرشيدي",
    delayAnimation: "200",
  },

  // التوصية 3
  {
    imageName: TestimonilImg3,
    desc: `Extremely satisfied! Ali Mohammed is a professional web developer who exceeded my expectations. His excellent communication and timely delivery were outstanding.`,
    desc_ar: `مرتاح تمامًا! علي محمد مطور مواقع متميز وقدم خدمة تجاوزت توقعاتي. تعامله الراقي وتسليمه في الوقت المحدد كانا ممتازين.
    `,
    reviewerName: "Ahmed Ibrahim Al-Harbi",
    reviewerName_ar: "أحمد إبراهيم الحربي",
    delayAnimation: "400",
  },

  //  تقدر تضيف توصية اخرى عن طريق النسخ واللصق
];

// ----------------- End TestimonilContent ----------------- //

// ----------------- AwardContnet ----------------- //
// ----------------- About > Award محتوى القسم الثاني  ----------------- //

export const AwardContnet = [
  // الجائزة 1
  {
    // img: AwardImg1,
    awardName: "Creative Designer",
    awardName_ar: "مصمم مبدع",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "0",
  },

  // الجائزة 2
  {
    // img: AwardImg2,
    awardName: "Yearly Best Performer",
    awardName_ar: "أفضل أداء سنوي",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "200",
  },

  // الجائزة 3
  {
    // img: AwardImg3,
    awardName: "Best Learner Award",
    awardName_ar: "جائزة أفضل متعلم",
    awardFor: "Site of the day",
    awardFor_ar: "موقع اليوم",
    delayAnimation: "400",
  },
  //  تقدر تضيف جائزة اخرى عن طريق النسخ واللصق
];

// ----------------- End AwardContnet ----------------- //

// ---------------------------------------- End About ------------------------------- //

// ----------------- resumeContent & educatonContent  ----------------- //
// ----------------- resumeContent محتوى القسم الثالث  ----------------- //

export const resumeContent = [
  // الخبرة 1
  {
    jobPosition: `MERN-Stack Devoloper`,
    jobPosition_ar: `مطور الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "",
  },

  // الخبرة 2
  {
    jobPosition: `Laravel Devoloper`,
    jobPosition_ar: `مهندس الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "100",
  },

  // الخبرة 3
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobPosition_ar: `مهندس الواجهة الأمامية للويب `,
    jobType: `Google | Remote`,
    jobType_ar: `Google | Remote`,
    jobDuration: `Feb 2021 - Present`,
    jobDuration_ar: `Feb 2021 - Present`,
    timeDuraton: `Full Time`,
    timeDuraton_ar: `دوام كامل `,
    compnayName: "Google LLC",
    compnayName_ar: "Google LLC",
    jobDescription: `Google LLC is looking for a skilled and motivated Software Engineer to join our team. The successful candidate will work on developing and maintaining software systems and applications that power Google's various products and services.`,
    jobDescription_ar: `Google LLC هي شركة تقنية عالمية تأسست عام 1998 في الولايات المتحدة الأمريكية، وهي تعتبر واحدة من أكبر الشركات في عالم التقنية والإنترنت، وتوفر العديد من الخدمات والمنتجات المميزة مثل محرك البحث جوجل، خدمة البريد الإلكتروني جيميل، وخدمة الخرائط Google Maps، وغيرها الكثير.`,
    delayAnimation: "200",
  },

  //  تقدر تضيف خبرة اخرى عن طريق النسخ واللصق
];

// -----------------  educatonContent محتوى القسم الثالث  ----------------- //

export const educatonContent = [
  // شهادة 1
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

  // شهادة 2
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

  // شهادة 3
  {
    passingYear: "2018-2020",
    degreeTitle: "Ph.D in software",
    degreeTitle_ar: "دكتوراه في البرمجيات",
    instituteName: "Abdulaziz University",
    instituteName_ar: "جامعة عبدالعزيز",
  },

  //  تقدر تضيف شهادة اخرى عن طريق النسخ واللصق
];

// ----------------- End resumeContent & educatonContent ----------------- //

// ----------------- skillContent ----------------- //
// ----------------- skill محتوى القسم الرابع  ----------------- //

export const skillContent = [
  {
    name: "HTML5", // اسم المهارة
    numberPercent: "99", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "99", // نسبة اتقان المهارة
  },
  {
    name: "CSS", // اسم المهارة
    numberPercent: "98", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "98", // نسبة اتقان المهارة
  },
  {
    name: "Node.js", // اسم المهارة
    numberPercent: "80", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "80", // نسبة اتقان المهارة
  },
  {
    name: "React JS", // اسم المهارة
    numberPercent: "90", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "90", // نسبة اتقان المهارة
  },
  {
    name: "JS", // اسم المهارة
    numberPercent: "95", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "95", // نسبة اتقان المهارة
  },
  {
    name: "Node.js", // اسم المهارة
    numberPercent: "75", // نسبة اتقان المهارة
    startCount: "0",
    endCount: "75", // نسبة اتقان المهارة
  },

  //  تقدر تضيف مهارة اخرى عن طريق النسخ واللصق
];

// ----------------- End skillContent ----------------- //

// -----------------  contactInfo ----------------- //
// -----------------  contactInfo  محتوى القسم الخامس  ----------------- //

export const contactInfo = {
  address: "Egypt - Minya",
  email: "fargthomas4@gmail.com",
  phone: "01289173088",
};

// ----------------- End contactInfo ----------------- //
