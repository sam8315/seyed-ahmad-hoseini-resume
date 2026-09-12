(function () {
  'use strict';

  /* =======================================================================
     TRANSLATIONS — fa (default), en, ar
     ======================================================================= */
  const T = {
    fa: {
      /* toolbar */
      'ui.skip': 'رفتن به محتوا',
      'ui.lang': 'زبان',
      'ui.theme': 'پوسته',
      'ui.lang_changed': 'زبان به فارسی تغییر کرد',
      'theme.light': 'روشن',
      'theme.dark': 'تاریک',
      'theme.ocean': 'اقیانوسی',
      'theme.forest': 'جنگلی',
      'theme.sunset': 'غروب',

      /* header */
      'h.name': 'سیداحمد حسینی',
      'h.desc': 'توسعه‌دهنده Backend با تمرکز بر Python و Django؛ طراحی و پیاده‌سازی APIهای RESTful، مدل‌سازی پایگاه داده و مدیریت احراز هویت.',

      /* contact (aria + visible) */
      'c.phone': 'تلفن',
      'c.email': 'ایمیل',
      'c.loc': 'کازرون، فارس',
      'c.github': 'گیت‌هاب',
      'c.linkedin': 'لینکدین',

      /* section titles */
      's.summary': 'خلاصه حرفه‌ای',
      's.skills': 'مهارت‌های فنی',
      's.experience': 'تجربه کاری',
      's.projects': 'پروژه‌های منتخب',
      's.personal': 'اطلاعات شخصی',
      's.education': 'تحصیلات',
      's.languages': 'زبان‌ها',
      's.strengths': 'نقاط قوت',
      's.goal': 'هدف شغلی',
      's.additional': 'سایر اطلاعات',
      's.keywords': 'کلیدواژه‌های تخصصی',

      /* summary */
      's.text': 'توسعه‌دهنده بک‌اند با تمرکز بر Python و Django، با تجربه در طراحی و پیاده‌سازی REST API، مدل‌سازی پایگاه داده PostgreSQL، مدیریت احراز هویت و کنترل دسترسی‌ها. آشنا با Docker، Git و اصول Clean Code. توانایی تحلیل نیازمندی‌ها و توسعه سیستم‌های پایدار و مقیاس‌پذیر.',

      /* skill headings */
      'sk.backend': 'Backend',
      'sk.database': 'Database',
      'sk.tools': 'ابزارهای توسعه',
      'sk.infra': 'زیرساخت و DevOps',
      'sk.learning': 'در حال یادگیری',

      /* job 1 */
      'j1.title': 'مهندس کامپیوتر',
      'j1.company': 'درمانگاه شبانه‌روزی امام سجاد، کازرون',
      'j1.date': '۱۳۹۷/۱۱ – اکنون',
      'j1.d1': 'تحلیل نیازمندی‌ها و طراحی راهکارهای نرم‌افزاری برای فرآیندهای سازمانی',
      'j1.d2': 'طراحی و توسعه سامانه‌های تحت وب با Python و Django',
      'j1.d3': 'مدیریت مدل‌های داده و روابط بین موجودیت‌ها',
      'j1.d4': 'پیاده‌سازی منطق کسب‌وکار، کنترل دسترسی‌ها و نقش‌ها',
      'j1.d5': 'طراحی APIهای Backend و ارتباط بین سرویس‌ها',
      'j1.d6': 'مدیریت تغییرات دیتابیس با Migration',
      'j1.d7': 'بررسی و رفع خطاهای Backend و Database',
      'j1.d8': 'تست‌های Hardening و Regression Testing',
      'j1.d9': 'مستندسازی تغییرات و تهیه گزارش‌های فنی',

      /* job 2 */
      'j2.title': 'کارشناس کامپیوتر',
      'j2.company': 'انجمن صنفی رانندگان شهرستان بوشهر',
      'j2.date': '۱۳۹۵/۰۷ – ۱۳۹۷/۰۷',

      /* job 3 */
      'j3.title': 'کارشناس کامپیوتر',
      'j3.company': 'ایستگاه رادار شهید نساج بندر سیراف',
      'j3.date': '۱۳۹۳/۱۰ – ۱۳۹۴/۱۰',

      /* job 4 */
      'j4.title': 'پشتیبان سخت‌افزار',
      'j4.company': 'شرکت پیشگامان نوین',
      'j4.date': '۱۳۹۲/۰۶ – ۱۳۹۲/۱۲',

      /* job 5 */
      'j5.title': 'کارشناس کامپیوتر',
      'j5.company': 'شرکت برق‌رسانی ۵۲۱ کازرون',
      'j5.date': '۱۳۹۱/۰۲ – ۱۳۹۲/۰۴',

      /* projects */
      'p1.title': 'سیستم مدیریت کارکنان',
      'p1.body': 'مدل‌سازی کاربر و کارمند<br>مدیریت نقش و دسترسی<br>جلوگیری از داده‌های تکراری<br>طراحی API و منطق بک‌اند',
      'p1.stack': 'Python / Django / PostgreSQL',

      'p2.title': 'سیستم نظرسنجی مراجعه‌کنندگان',
      'p2.body': 'ارسال پیامک و ثبت امتیاز<br>دریافت بازخورد متنی<br>جلوگیری از پاسخ‌های تکراری<br>تحلیل داده‌ها و داشبورد مدیریتی',
      'p2.stack': 'Python / Django / PostgreSQL',

      'p3.title': 'تحلیل نیازمندی داروخانه',
      'p3.body': 'ثبت و نگهداری اقلام دارویی<br>تحلیل الگوی مصرف<br>محاسبه نیاز آینده<br>ارائه اطلاعات به واحد خرید',
      'p3.stack': 'Python / Django / PostgreSQL',

      /* personal info */
      'ps.name_l': 'نام و نام خانوادگی',
      'ps.name_v': 'سیداحمد حسینی',
      'ps.loc_l': 'محل سکونت',
      'ps.loc_v': 'کازرون، فارس',

      /* education */
      'ed.degree': 'کارشناسی مهندسی کامپیوتر',
      'ed.uni': 'دانشگاه پیام نور نورآباد',
      'ed.years': '۱۳۸۸ – ۱۳۹۳',

      /* languages */
      'l.fa': 'فارسی',
      'l.fa_level': 'زبان مادری',
      'l.en': 'انگلیسی',
      'l.en_level': 'پیشرفته',
      'l.ar': 'عربی',
      'l.ar_level': 'متوسط',

      /* strengths */
      'st.1': 'تحلیل نیازمندی‌ها و حل مسئله',
      'st.2': 'تسلط بر Django و Python',
      'st.3': 'تجربه کار با پایگاه‌داده‌های رابطه‌ای',
      'st.4': 'توجه به امنیت و کنترل دسترسی',
      'st.5': 'مستندسازی و نگهداری کد',
      'st.6': 'یادگیری سریع فناوری‌های جدید',
      'st.7': 'تجربه کار با پروژه‌های واقعی',
      'st.8': 'رویکرد تکراری و مرحله‌ای در توسعه نرم‌افزار',
      'st.9': 'تست و جلوگیری از بازگشت (Regression)',

      /* goal */
      'g.text': 'پیوستن به تیمی حرفه‌ای در حوزه توسعه Backend با تمرکز بر Django و Python و مشارکت در ساخت محصولات پایدار و مقیاس‌پذیر.',

      /* additional */
      'a.1': 'دارای گواهینامه رانندگی پایه یک',
      'a.2': 'آمادگی همکاری در سراسر کشور',
      'a.3': 'امکان دورکاری تمام‌وقت و پاره‌وقت',

      /* SEO */
      'seo.title': 'سیداحمد حسینی | Software Engineer & Django Backend Developer',
      'seo.desc': 'رزومه سیداحمد حسینی — توسعه‌دهنده Backend با تمرکز بر Python و Django، طراحی REST API و مدیریت پایگاه داده.',
    },

    en: {
      'ui.skip': 'Skip to content',
      'ui.lang': 'Language',
      'ui.theme': 'Theme',
      'ui.lang_changed': 'Language changed to English',
      'theme.light': 'Light',
      'theme.dark': 'Dark',
      'theme.ocean': 'Ocean',
      'theme.forest': 'Forest',
      'theme.sunset': 'Sunset',

      'h.name': 'Seyed Ahmad Hoseini',
      'h.desc': 'Backend developer focused on Python and Django; designing and implementing REST APIs, database modeling, and authentication management.',

      'c.phone': 'Phone',
      'c.email': 'Email',
      'c.loc': 'Kazeroon, Fars',
      'c.github': 'GitHub',
      'c.linkedin': 'LinkedIn',

      's.summary': 'Professional Summary',
      's.skills': 'Technical Skills',
      's.experience': 'Work Experience',
      's.projects': 'Selected Projects',
      's.personal': 'Personal Information',
      's.education': 'Education',
      's.languages': 'Languages',
      's.strengths': 'Key Strengths',
      's.goal': 'Career Objective',
      's.additional': 'Additional Information',
      's.keywords': 'Technical Keywords',

      's.text': 'Backend developer focused on Python and Django with experience in designing and implementing REST APIs, PostgreSQL database modeling, and authentication and access control. Familiar with Docker, Git, and Clean Code principles. Capable of analyzing requirements and developing scalable, maintainable systems.',

      'sk.backend': 'Backend',
      'sk.database': 'Database',
      'sk.tools': 'Tools & Development',
      'sk.infra': 'Infrastructure & DevOps',
      'sk.learning': 'Currently Learning',

      'j1.title': 'Computer Engineer',
      'j1.company': 'Imam Sajjad 24-Hour Clinic, Kazeroon',
      'j1.date': '2018 – Present',
      'j1.d1': 'Analyzed requirements and designed software solutions for organizational workflows',
      'j1.d2': 'Designed and developed web-based systems using Python and Django',
      'j1.d3': 'Managed data models and entity relationships',
      'j1.d4': 'Implemented business logic, access control, and role-based permissions',
      'j1.d5': 'Designed backend APIs and inter-service communication',
      'j1.d6': 'Managed database changes using migrations',
      'j1.d7': 'Reviewed and resolved backend and database issues',
      'j1.d8': 'Performed hardening and regression testing',
      'j1.d9': 'Documented changes and prepared technical reports',

      'j2.title': 'System Operator',
      'j2.company': 'Bushehr County Drivers Association',
      'j2.date': '2016 – 2018',

      'j3.title': 'System Operator',
      'j3.company': 'Shahid Nasaji Radar Station, Bandar Siraf',
      'j3.date': '2014 – 2015',

      'j4.title': 'Hardware Support Intern',
      'j4.company': 'Pishgaman Novin Company',
      'j4.date': '2013',

      'j5.title': 'Computer Operator',
      'j5.company': '521 Electricity Distribution Company, Kazeroon',
      'j5.date': '2012 – 2013',

      'p1.title': 'Employee Management System',
      'p1.body': 'User and Employee modeling<br>Role and Permission management<br>Duplicate data prevention<br>API and Backend logic design',
      'p1.stack': 'Python / Django / PostgreSQL',

      'p2.title': 'Client Feedback System',
      'p2.body': 'SMS sending and rating registration<br>Textual feedback collection<br>Duplicate response prevention<br>Data analysis and management dashboard',
      'p2.stack': 'Python / Django / PostgreSQL',

      'p3.title': 'Pharmacy Requirements Analysis',
      'p3.body': 'Drug item registration and maintenance<br>Consumption pattern analysis<br>Future demand calculation<br>Providing data to procurement unit',
      'p3.stack': 'Python / Django / PostgreSQL',

      'ps.name_l': 'Full Name',
      'ps.name_v': 'Seyed Ahmad Hoseini',
      'ps.loc_l': 'Location',
      'ps.loc_v': 'Kazeroon, Fars, Iran',

      'ed.degree': 'B.Sc. in Computer Engineering',
      'ed.uni': 'Payame Noor University, Norabad',
      'ed.years': '2009 – 2014',

      'l.fa': 'Persian',
      'l.fa_level': 'Native',
      'l.en': 'English',
      'l.en_level': 'Upper-Intermediate',
      'l.ar': 'Arabic',
      'l.ar_level': 'Intermediate',

      'st.1': 'Requirements analysis and problem solving',
      'st.2': 'Proficiency in Django and Python',
      'st.3': 'Experience with relational databases',
      'st.4': 'Focus on security and access control',
      'st.5': 'Code documentation and maintenance',
      'st.6': 'Ability to learn new technologies quickly',
      'st.7': 'Experience with real-world projects',
      'st.8': 'Iterative development approach',
      'st.9': 'Testing and regression prevention',

      'g.text': 'Joining a professional team in Backend development focused on Django and Python, contributing to building sustainable and scalable products.',

      'a.1': 'Valid driving license (Class 1 — passenger vehicle)',
      'a.2': 'Available for on-site collaboration nationwide',
      'a.3': 'Available for full-time and part-time remote work',

      'seo.title': 'Seyed Ahmad Hoseini | Software Engineer & Django Backend Developer',
      'seo.desc': 'Resume of Seyed Ahmad Hoseini — Backend developer focused on Python and Django, REST API design, and database management.',
    },

    ar: {
      'ui.skip': 'انتقل إلى المحتوى',
      'ui.lang': 'اللغة',
      'ui.theme': 'المظهر',
      'ui.lang_changed': 'تم تغيير اللغة إلى العربية',
      'theme.light': 'فاتح',
      'theme.dark': 'داكن',
      'theme.ocean': 'محيطي',
      'theme.forest': 'غابي',
      'theme.sunset': 'غروب',

      'h.name': 'سيد أحمد حسيني',
      'h.desc': 'مطور باك إند متمحور حول Python و Django؛ تصميم وتنفيذ واجهات API REST، ونمذجة قواعد البيانات، وإدارة المصادقة.',

      'c.phone': 'الهاتف',
      'c.email': 'البريد الإلكتروني',
      'c.loc': 'كازرون، فارس',
      'c.github': 'GitHub',
      'c.linkedin': 'LinkedIn',

      's.summary': 'ملخص مهني',
      's.skills': 'المهارات التقنية',
      's.experience': 'الخبرة المهنية',
      's.projects': 'المشاريع المختارة',
      's.personal': 'المعلومات الشخصية',
      's.education': 'التعليم',
      's.languages': 'اللغات',
      's.strengths': 'نقاط القوة',
      's.goal': 'الهدف المهني',
      's.additional': 'معلومات إضافية',
      's.keywords': 'الكلمات التقنية',

      's.text': 'مطور باك إند متمحور حول Python و Django، ذو خبرة في تصميم وتنفيذ واجهات API REST، ونمذجة قواعد البيانات PostgreSQL، وإدارة المصادقة والتحكم في الوصول. على دراية بـ Docker و Git ومبادئ Clean Code. قادر على تحليل المتطلبات وتطوير أنظمة قابلة للتوسع والصيانة.',

      'sk.backend': 'Backend',
      'sk.database': 'Database',
      'sk.tools': 'الأدوات والتطوير',
      'sk.infra': 'البنية التحتية و DevOps',
      'sk.learning': 'قيد التعلم',

      'j1.title': 'مهندس كمبيوتر',
      'j1.company': 'عيادة الإمام السجاد الليلية، كازرون',
      'j1.date': '2018 – حتى الآن',
      'j1.d1': 'تحليل المتطلبات وتصميم حلول برمجية للعمليات التنظيمية',
      'j1.d2': 'تصميم وتطوير أنظمة ويب باستخدام Python و Django',
      'j1.d3': 'إدارة النماذج البيانات والعلاقات بين الكيانات',
      'j1.d4': 'تنفيذ منطق الأعمال والتحكم في الوصول والأدوار',
      'j1.d5': 'تصميم واجهات API Backend والتواصل بين الخدمات',
      'j1.d6': 'إدارة تغييرات قاعدة البيانات باستخدام Migration',
      'j1.d7': 'مراجعة وحل أخطاء Backend وقاعدة البيانات',
      'j1.d8': 'إجراء اختبارات Hardening و Regression Testing',
      'j1.d9': 'توثيق التغييرات وإعداد التقارير الفنية',

      'j2.title': 'مشغّل كمبيوتر',
      'j2.company': 'النقابة المهنية لسائقي بوشهر',
      'j2.date': '2016 – 2018',

      'j3.title': 'مشغّل كمبيوتر',
      'j3.company': 'محطة رادار الشهيد نساجي، بندر سيراف',
      'j3.date': '2014 – 2015',

      'j4.title': 'فني دعم أجهزة',
      'j4.company': 'شركة بيشگامان نوين',
      'j4.date': '2013',

      'j5.title': 'مشغّل كمبيوتر',
      'j5.company': 'شركة توزيع الكهرباء 521 كازرون',
      'j5.date': '2012 – 2013',

      'p1.title': 'نظام إدارة الموظفين',
      'p1.body': 'نمذجة المستخدمين والموظفين<br>إدارة الأدوار والصلاحيات<br>منع البيانات المكررة<br>تصميم API ومنطق Backend',
      'p1.stack': 'Python / Django / PostgreSQL',

      'p2.title': 'نظام استبيان العملاء',
      'p2.body': 'إرسال SMS وتسجيل التقييم<br>جمع الملاحظات النصية<br>منع الردود المكررة<br>تحليل البيانات ولوحة التحكم',
      'p2.stack': 'Python / Django / PostgreSQL',

      'p3.title': 'تحليل احتياجات الصيدلية',
      'p3.body': 'تسجيل وصيانة الأدوية<br>تحليل أنماط الاستهلاك<br>حساب الاحتياج المستقبلي<br>تقديم البيانات لوحدة المشتريات',
      'p3.stack': 'Python / Django / PostgreSQL',

      'ps.name_l': 'الاسم الكامل',
      'ps.name_v': 'سيد أحمد حسيني',
      'ps.loc_l': 'الموقع',
      'ps.loc_v': 'كازرون، فارس، إيران',

      'ed.degree': 'بكالوريوس هندسة كمبيوتر',
      'ed.uni': 'جامعة پايم نور، نور آباد',
      'ed.years': '2009 – 2014',

      'l.fa': 'الفارسية',
      'l.fa_level': 'اللغة الأم',
      'l.en': 'الإنجليزية',
      'l.en_level': 'متقدم',
      'l.ar': 'العربية',
      'l.ar_level': 'متوسط',

      'st.1': 'تحليل المتطلبات وحل المشكلات',
      'st.2': 'إتقان Django و Python',
      'st.3': 'خبرة مع قواعد البيانات العلائقية',
      'st.4': 'التركيز على الأمان والتحكم في الوصول',
      'st.5': 'توثيق الكود وصيانته',
      'st.6': 'تعلم سريع للتقنيات الجديدة',
      'st.7': 'خبرة مع مشاريع حقيقية',
      'st.8': 'نهج تطوير تكراري وتدریجي',
      'st.9': 'الاختبار ومنع Regression',

      'g.text': 'الانضمام إلى فريق محترف في تطوير Backend متخصص في Django و Python والمساهمة في بناء منتجات مستدامة وقابلة للتوسع.',

      'a.1': 'رخصة قيادة سارية من الدرجة الأولى (سيارة)',
      'a.2': 'جاهز للتعاون حضورياً في جميع أنحاء البلاد',
      'a.3': 'متوفر للعمل عن بُعد بدوام كامل وجزئي',

      'seo.title': 'سيد أحمد حسيني | مهندس برمجيات ومطور باك إند',
      'seo.desc': 'Resume of Seyed Ahmad Hoseini — Backend developer focused on Python and Django, REST API design, and database management.',
    },
  };

  /* =======================================================================
     HELPERS
     ======================================================================= */
  const FALLBACK = 'fa';
  const LS_LANG = 'resume-lang';
  const LS_THEME = 'resume-theme';

  /** Get a translation value by dot-separated key, with fallback */
  function tv(lang, key) {
    var t = T[lang] || T[FALLBACK];
    return t !== undefined && t[key] !== undefined ? t[key] : (T[FALLBACK][key] || '');
  }

  /* =======================================================================
     LANGUAGE SWITCHING
     ======================================================================= */
  function applyLang(lang) {
    if (!T[lang]) lang = FALLBACK;
    var t = T[lang] || T[FALLBACK];

    /* textContent for elements with data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    /* innerHTML for elements with data-i18n-html */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* aria-label for elements with data-i18n-aria */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    /* alt for elements with data-i18n-alt */
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
    });

    /* dir / lang */
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';

    /* active language button */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });

    /* SEO meta */
    var titleEl = document.querySelector('title');
    if (titleEl && t['seo.title']) titleEl.textContent = t['seo.title'];
    var descEl = document.querySelector('meta[name="description"]');
    if (descEl && t['seo.desc']) descEl.setAttribute('content', t['seo.desc']);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && t['seo.title']) ogTitle.setAttribute('content', t['seo.title']);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && t['seo.desc']) ogDesc.setAttribute('content', t['seo.desc']);
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && t['seo.title']) twTitle.setAttribute('content', t['seo.title']);
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && t['seo.desc']) twDesc.setAttribute('content', t['seo.desc']);

    /* aria-live announcement */
    var announcer = document.getElementById('lang-announce');
    if (announcer && t['ui.lang_changed']) {
      announcer.textContent = t['ui.lang_changed'];
    }

    try { localStorage.setItem(LS_LANG, lang); } catch (e) { /* */ }
  }

  /* =======================================================================
     THEME SWITCHING
     ======================================================================= */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('[data-theme]').forEach(function (btn) {
      if (btn.hasAttribute('role')) {
        var isActive = btn.getAttribute('data-theme') === theme;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      }
    });

    try { localStorage.setItem(LS_THEME, theme); } catch (e) { /* */ }
  }

  /* =======================================================================
     INIT
     ======================================================================= */
  function init() {
    /* Language */
    var savedLang = null;
    try { savedLang = localStorage.getItem(LS_LANG); } catch (e) { /* */ }
    applyLang(savedLang || FALLBACK);

    /* Theme */
    var savedTheme = null;
    try { savedTheme = localStorage.getItem(LS_THEME); } catch (e) { /* */ }
    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }

    /* Language buttons */
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(this.getAttribute('data-lang'));
      });
    });

    /* Theme buttons */
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTheme(this.getAttribute('data-theme'));
      });
    });
  }

  /* =======================================================================
     BOOT
     ======================================================================= */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
