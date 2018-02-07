(function ($) {
  $(document).ready(function () {

    function getWPFun(pUrl, pElement) {
      var url = pUrl;

      $.ajax({
        type: "GET", //
        url: url,
        timeout: 2000, // set timeout for how long want to load
        beforeSend: function () {
          console.log('log beforesend ');
        },
        complete: function () {
          console.log('log complete');
        },
        success: function (wpData) { // pass in Parameter from WP
          jsWithNT(wpData); // skick wpData till jsWithNT FN

        },
        error: function () { // if is error log
          alert('Something wrong with connection!!!');

        }

      }); // end of $.ajax
      function jsWithNT(pData) {
        //console.log('This is from pData', pData); // log wpData
        var wpTitle = pData.title.rendered; // loop all rendered in title
        //console.log(wpTitle);
        //console.log(' pData.length ', pData.length);
        var wpTitle = pData.title.rendered; // loop all rendered in title
        var wpContent = pData.content.rendered; // loop content from wp
        // console.log('CHK title and content', wpTitle, wpContent); // it works
        if (pData._embedded['wp:featuredmedia']) {
          var wpFM = pData._embedded['wp:featuredmedia'];
          //  console.log('This is wpFM', wpFM);

          for (var k = 0; k < wpFM.length; k++) {
            var wpImage = wpFM[k].media_details.sizes.medium_large.source_url; // OPS!!! sizes must CHK B4 select the SIZE
            var wpCaption = wpFM[k].caption.rendered; //needs caption paragraph that's why need to go down to rendered
            var wpFeaturedMediaTitle = wpFM[k].title.rendered;
            //console.log('test', wpTitle, wpContent, wpImage, wpCaption);

            var wpHTML = ''; //  Leave it empty we will insert content here

            wpHTML += '<section>'; // open tag add section in html
            wpHTML += '<figure>'; // open tag add figure
            wpHTML += '<img class="imageStyle" src="' + wpImage + '">'; // add img
            wpHTML += '<figcaption>' + '<h2>' + wpFeaturedMediaTitle + '</h2>' + wpCaption + '</figcaption>';
            wpHTML += '</figure>'; // add closing tag
            wpHTML += '<h1>' + wpTitle + '</h1>' // add h1 title
            wpHTML += wpContent; // add content
            wpHTML += '</section>';

            pElement.append(wpHTML); // insert content into var wpHTML

          } // end of if _embedded

        } // for loop pData

      } // end jsWithNT FN

    } // end getWPFun
    var $url_1 = "http://localhost/myJavaScript/wp-json/wp/v2/posts/4?_embed=true"; // wp url id4
    var $section_1 = $('#lean'); // set id 4 into #lean
    getWPFun($url_1, $section_1); // call FN getWPFun

    var $url_2 = "http://localhost/myJavaScript/wp-json/wp/v2/posts/9?_embed=true"; // wp url id9
    var $section_2 = $('#agile'); // set id 9 into #agile
    getWPFun($url_2, $section_2); // call FN getWPFun
    var $url_3 = "http://localhost/myJavaScript/wp-json/wp/v2/posts/11?_embed=true"; // wp url id11
    var $section_3 = $('#projektmetodik'); // set id 11 into #projektmetodik
    getWPFun($url_3, $section_3); // call FN getWPFun

  }); // end of .readyFN
})(jQuery)
