function getLanguageName(lang) {
  let name = "";
  switch (lang) {
    case 'en':
      name = 'انگلیسی';
      break;
    case 'fa':
      name = 'فارسی';
      break;
    default:
      name = '';
      break;
  }
  return name;
}

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
    "data": JSON.stringify(data)
  };

  $.ajax(settings)
    .done(function(response) {
      let src_lang = $("#srclanguage").val();
      src_lang = src_lang + ' - ' + getLanguageName(response.source_lang);
      $("#srclanguage").val(src_lang);
      $("#dsttext").val(response.translated);
    })
    .fail(function() {
      $("#dsttext").val("مشکلی پیش آمده است!");
    });

}

$(document).ready(function() {
  $(".ui-page").css("padding-top", "45px");
  $(".ui-page").css("padding-bottom", "42px");
  $(".ui-page").css("min-height", "725px");
  $("#translate").on("click", function() {
    let dstlang = $("#dstlanguage").val();
    let subject = $("#srctext").val();
    translate(dstlang, subject);    
  });
});
