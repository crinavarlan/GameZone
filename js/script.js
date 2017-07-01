function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length === 0) {
    producePrompt('Name is required', 'name-error' , 'red');
    return false;
  }
    
  producePrompt('Valid', 'name-error', 'green');
  return true;

}
function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

    if(phone.length === 0) {
      producePrompt('Phone number is required', 'phone-error', 'red');
      return false;
    }

    if(phone.length != 11){
      producePrompt('Please insert a valid phone number', 'phone-error', 'red');
      return false;
    }

    if(!phone.match(/^[0-9]{11}$/)) {
      producePrompt('Only digits' ,'phone-error', 'red');
      return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;

}

function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length === 0) {

    producePrompt('Please insert your email','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid. Please insert a valid email', 'email-error', 'red');
    return false;

  }

  producePrompt('Valid', 'email-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 20;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' more characters required','message-error','red');
    return false;
  }

  producePrompt('Valid', 'message-error', 'green');
  return true;

}
function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
       return false;
  }
  else {

  }
}
function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}
function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}
function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;
}



/* popup video in games*/
$("[data-media]").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    var videoUrl = $this.attr("data-media");
    var popup = $this.attr("href");
    var $popupIframe = $(popup).find("iframe");
    
    $popupIframe.attr("src", videoUrl);
    
    $this.closest(".page").addClass("show-popup");
});

$(".popup").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    $(".page").removeClass("show-popup");
});

$(".popup > iframe").on("click", function(e) {
    e.stopPropagation();
});


/*pop-up-box */

$(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });
        });