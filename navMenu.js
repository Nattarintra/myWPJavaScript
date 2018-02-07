// ScrollTop id
(function ($) {
  $(document).ready(function () {
    // greeting here
    function myGreeting() {
      var thehours = new Date().getHours();
      var msg;
      var morning = ('God morgon');
      var afternoon = ('God dag');
      var evening = ('God kväll');

      if (thehours >= 0 && thehours < 12) {
        msg = morning;

      } else if (thehours >= 12 && thehours < 17) {
        msg = afternoon;

      } else if (thehours >= 17 && thehours < 24) {
        msg = evening;
      }

      $('.greeting').text(msg);
    } // end greeting FN
    myGreeting(); // call  myGreeting FN

    $('#navMenu a').on('click', function (event) {
      //console.log('this is navMenu a event', this.hash);
      event.preventDefault();
      if (this.hash) {
        var vHash = this.hash;
        $('html, body').animate({
          scrollTop: $(vHash).offset().top - 100
        }, 2000) // end body animate
      } // end if()
    }) // end navMenu

    // Start EVENTS mouseover,click and mouseout
    $("#navMenu li").on({
      mouseover: function () {
        $(this).css("background-color", "pink");

        $('.imageStyle').animate({

          opacity: '1',
          height: '300px',
          width: '350px'
        }, 900);
      },
      mouseout: function () {
        $(this).css("background-color", "#59ABE3");

      },
      click: function () {
        $(this).css(
          "background-color", "yellow");

      }
    }); // end navMenu li



  }); // end .ready + FN
})(jQuery) // end jQuery
