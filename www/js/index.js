  let languages = {
    af: 'آفریقایی',
    ar: 'عربی',
    be: 'بلاروسی',
    bg: 'بلغاری',
    ca: 'کاتالانی',
    cs: 'چکی',
    cy: 'ولزی',
    da: 'دانمارکی',
    de: 'آلمانی',
    el: 'یونانی',
    en: 'انگلیسی',
    eo: 'اسپرانتو',
    es: 'اسپانیایی',
    et: 'استونیایی',
    eu: 'باسکی',
    fa: 'فارسی',
    fi: 'فنلاندی',
    fr: 'فرانسوی',
    gl: 'گالیسی',
    gu: 'گجراتی',
    he: 'عبری',
    hi: 'هندی',
    hr: 'کرواتی',
    hu: 'مجاری',
    hy: 'ارمنی',
    id: 'اندونزیایی',
    it: 'ایتالیایی',
    ja: 'ژاپنی',
    ka: 'گرجی',
    kk: 'قزاقی',
    kn: 'کندا',
    ko: 'کره ای',
    ky: 'قرقیزی',
    lt: 'لیتوانیایی',
    lv: 'لتونیایی',
    mi: 'مائوری',
    mk: 'مقدونی',
    mn: 'مغولی',
    mr: 'مراتی',
    ms: 'مالایی',
    mt: 'مالتی',
    nb: 'نروژی',
    nl: 'هلندی',
    pa: 'پنجابی',
    pl: 'لهستانی',
    ps: 'پشتو',
    pt: 'پرتغالی',
    ro: 'رومانیایی',
    ru: 'روسی',
    sk: 'اسلواکی',
    sl: 'اسلوونیایی',
    sq: 'آلبانیایی',
    sv: 'سوئدی',
    sw: 'سواحلی',
    ta: 'تامیلی',
    te: 'تلوگو',
    th: 'تایلندی',
    tl: 'تاگالوگ',
    tr: 'ترکی',
    tt: 'تاتاری',
    uk: 'اوکراینی',
    ur: 'اردو',
    vi: 'ویتنامی',
    xh: 'خوسایی',
    zh: 'چینی',
    zu: 'زولو'
  };

function translate(dstlang, subject) {
  let data = {
    "input": subject,
    "lang": dstlang
  };
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://kiara-translate.p.rapidapi.com/get_translated/",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-key": "c8c418df06msh1cd0dcc0e260deep1b8dacjsnccd2aa998858",
      "x-rapidapi-host": "kiara-translate.p.rapidapi.com"
    },
    "processData": false,
    "data": JSON.stringify(data),
    beforeSend: function(xhr) {
      $.mobile.loading("show", {
        text: "در حال ترجمه",
        textVisible: true,
        theme: "a",
      });
    }
  };

  $.ajax(settings)
    .done(function(response) {
      let src_lang = $("#srclanguage").val();
      src_lang = 'خودکار' + ' - ' + languages[response.source_lang];
      $("#srclanguage").val(src_lang);
      $("#dsttext").val(response.translated);
      $.mobile.loading("hide");
    })
    .fail(function() {
      $("#dsttext").val("مشکلی پیش آمده است!");
      $.mobile.loading("hide");
    });

}

$(document).ready(function() {
  $(".ui-page").css("padding-top", "45px");
  $(".ui-page").css("padding-bottom", "42px");
  $(".ui-page").css("min-height", "725px");  
});

$(document).on("click", "#translate", function() {
  let dstlang = $("#dstlanguage").val();
  let subject = $("#srctext").val();
  translate(dstlang, subject);
});