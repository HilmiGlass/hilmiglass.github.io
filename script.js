const translations={
ar:{name:"العربية",pageTitle:"زجاج حلمي | فخامة الزجاج",dir:"rtl",logoText:" زجاج حلمي",navHome:" الرئيسية",navServices:" الخدمات",navWhy:" ليش تختارنا؟",navProjects:" المشاريع",navContact:" اتصل بنا",heroTitle:"حلول زجاج أنيقة وفاخرة تضيف لمسة عصرية وجودة عالمية لكل مساحة",heroBtn:"اطلب الآن!",servicesTitle:"خدماتنا",service1:"ألواح زجاجية",service1Desc:"مقاومة للصدمات والحرارة بأعلى جودة عالمية",service2:"درابزين زجاجي",service2Desc:"تصاميم عصرية آمنة وأنيقة للمنازل والشركات",service3:"زجاج مخصص",service3Desc:"تفصيل حسب الطلب بدقة عالية لتناسب ذوقك",whyTitle:"ليش تختارنا؟",why1:"جودة عالمية",why1Desc:"نستخدم أفضل المواد المعتمدة والمضمونة",why2:"التزام",why2Desc:"نسلم المشاريع في الوقت المحدد تماماً",why3:"خبرة طويلة",why3Desc:"أكثر من 15 سنة من الإبداع والخبرة",portfolioTitle:"مشاريعنا",projectsPlaceholder:"سيتم إضافة صور المشاريع قريباً",contactTitle:"اتصل بنا",sendBtn:"إرسال",pName:"الاسم",pEmail:"البريد الإلكتروني",pPhone:"رقم الجوال",pMessage:"رسالتك",errorText:"عذراً، هذه الميزة تحت التطوير حالياً. يرجى التواصل عبر الواتساب.",footer:"© 2026 زجاج حلمي | جميع الحقوق محفوظة",pos:"left"},
en:{name:"English",pageTitle:"Hilmi Glass | Luxury Glass",dir:"ltr",logoText:" Hilmi Glass",navHome:" Home",navServices:" Services",navWhy:" Why Us?",navProjects:" Projects",navContact:" Contact",heroTitle:"Elegant glass solutions that add a modern touch and global quality to your space",heroBtn:"Order Now!",servicesTitle:"Our Services",service1:"Glass Panels",service1Desc:"Impact and heat resistant with top global quality",service2:"Glass Railing",service2Desc:"Safe and elegant designs for homes and offices",service3:"Custom Glass",service3Desc:"Tailor-made designs crafted with high precision",whyTitle:"Why Choose Us?",why1:"Global Quality",why1Desc:"We use the best certified and guaranteed materials",why2:"Commitment",why2Desc:"We value your time and deliver strictly on schedule",why3:"Long Experience",why3Desc:"Over 15 years of creativity and expertise",portfolioTitle:"Our Projects",projectsPlaceholder:"Project photos will be added soon",contactTitle:"Contact Us",sendBtn:"Send",pName:"Name",pEmail:"Email",pPhone:"Phone",pMessage:"Message",errorText:"Sorry, this feature is under development. Please use WhatsApp.",footer:"© 2026 Hilmi Glass | All Rights Reserved",pos:"right"},
he:{name:"עברית",pageTitle:"זכוכית חלמי | יוקרת הזכוכית",dir:"rtl",logoText:" זכוכית חלמי",navHome:" ראשי",navServices:" שירותים",navWhy:" למה אנחנו?",navProjects:" פרויקטים",navContact:" צור קשר",heroTitle:"פתרונות זכוכית אלגנטיים ויוקרתיים המוסיפים מגע מודרני ואיכות בינלאומית לכל חלל",heroBtn:"הזמינו עכשיו!",servicesTitle:"שירותינו",service1:"לוחות זכוכית",service1Desc:"עמידות בפני חום וזעזועים באיכות הגבוהה ביותר",service2:"מעקות זכוכית",service2Desc:"עיצובים מודרניים ובטוחים לבית ולעסק",service3:"זכוכית בהתאמה",service3Desc:"ייצור לפי מידה ודרישה בדיוק מקסימלי",whyTitle:"למה לבחור בנו?",why1:"איכות עולמית",why1Desc:"אנו משתמשים בחומרים המאושרים והטובים ביותר",why2:"עמידה בזמנים",why2Desc:"אנו מעריכים את זמנכם ומוסרים פרויקטים בזמן",why3:"ניסיון רב",why3Desc:"מעל 15 שנות יצירתיות ומומחיות בתחום",portfolioTitle:"הפרויקטים שלנו",projectsPlaceholder:"תמונות הפרויקטים יועלו בקרוב",contactTitle:"צור קשר",sendBtn:"שלח",pName:"שם",pEmail:"אימייל",pPhone:"טלפון",pMessage:"הודעה",errorText:"מצטערים, תכונה זו נמצאת בפיתוח. נא ליצור קשר בוואטסאפ.",footer:"© 2026 זכוכית חלמי | כל הזכויות שמורות",pos:"left"}
};

const lenis = new Lenis({ duration: 1.2, smooth: true });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => { loader.style.visibility = 'hidden'; reveal(); }, 600);
});

document.addEventListener("mousemove", e=>{
  document.body.style.setProperty('--x', e.clientX+'px');
  document.body.style.setProperty('--y', e.clientY+'px');
});

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
menuBtn.onclick = () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('active');
};

const langMenu = document.getElementById('langMenu');
const langSelected = document.getElementById('langSelected');
const langDropdown = document.getElementById('langDropdown');

langSelected.onclick = (e) => { 
    e.stopPropagation(); 
    langDropdown.classList.toggle('show'); 
    langMenu.classList.toggle('open');
};
window.onclick = () => { 
    langDropdown.classList.remove('show'); 
    langMenu.classList.remove('open');
};

function changeLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang, true);
}

function handleFormSubmission() {
    const btnLabel = document.getElementById('btnLabel');
    const btnSpinner = document.getElementById('btnSpinner');
    const errorCard = document.getElementById('errorDisplay');
    errorCard.style.display = 'none';
    btnLabel.style.display = 'none';
    btnSpinner.style.display = 'inline-block';
    setTimeout(() => {
        btnSpinner.style.display = 'none';
        btnLabel.style.display = 'inline-block';
        errorCard.style.display = 'flex';
    }, 1500);
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function applyTranslations(lang, isSwitching = false){
  document.getElementById('errorDisplay').style.display = 'none';

  const t = translations[lang];
  document.getElementById('currentLangText').innerText = t.name;
  document.title = t.pageTitle;

  if (isSwitching) {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('open');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      document.documentElement.lang = lang;
      document.documentElement.dir = t.dir;
      updateUI(t);
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
      document.body.classList.remove('fade-out');
      reveal();
    }, 400);
  } else {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    updateUI(t);
  }
}

function updateUI(t) {
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(t[key]) {
      if(key === "projectsPlaceholder") el.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${t[key]}`;
      else el.innerText=t[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key=el.getAttribute("data-i18n-placeholder");
    if(t[key]) el.placeholder = t[key];
  });
  document.getElementById("logoText").innerHTML = `<i class="fa-solid fa-gem"></i> ${t.logoText}`;
  const floatBtn = document.getElementById("contactBtn");
  floatBtn.style.left = (t.pos === "left") ? "25px" : "auto";
  floatBtn.style.right = (t.pos === "right") ? "25px" : "auto";
}

// تهيئة اللغة عند التحميل
const initialLang = (() => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    return ['ar', 'en', 'he'].includes(browserLang) ? browserLang : 'ar';
})();

applyTranslations(localStorage.getItem("lang") || initialLang);

document.querySelectorAll('.nav-link').forEach(link => {
  link.onclick = (e) => { 
    e.preventDefault();
    lenis.scrollTo(link.getAttribute('href'));
    navMenu.classList.remove('active'); 
    menuBtn.classList.remove('open');
  };
});