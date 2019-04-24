import "./reset.css";
import "./style.scss";
import "./grid.scss";
require ("slick-carousel/slick/slick")
import "slick-carousel/slick/slick.scss"
import "bootstrap-datepicker"
import "select2"
//require ("bootstrap-datepicker/dist/css/bootstrap-datepicker.css")
require ("select2/dist/css/select2.min.css")
require ("bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css")




$( document ).ready(function() {
   

    var is_open = false;
    var see_more_width;

    var $sliderPrimary =  $('.slider').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 5000,
      centerPadding: '40px',
  });
 
 
    absFormPosCenter(
        $sliderPrimary.siblings().find('.form-wrap'),
        $sliderPrimary,
        'bottom',
        // $sliderPrimary.find('.slick-dots')
    );
    window.addEventListener('resize',function () {
        absFormPosCenter(
            $sliderPrimary.siblings().find('.form-wrap'),
            $sliderPrimary,
            'bottom',
            // $sliderPrimary.find('.slick-dots')
        );
    });
 
    function absFormPosCenter(itemToPlace,itemToPlaceIn,positionFrom,disturbingElem) {
        var disturbingHeight = disturbingElem !== undefined ? disturbingElem.height() : 0;console.log("f")
        if($(window).width() > 990){
            itemToPlace.css(positionFrom,(itemToPlaceIn.height() - itemToPlace.height())/2 + disturbingHeight + 20 + 'px')
        } else {
            itemToPlace.css(positionFrom,'auto');
        }
    }

    $(".see_more").click(function(){
        if (is_open == false){ 
        is_open = true;
        
        $(".see_more > button").text("Скрыть");
      
        $("#r1").after("<div class='row' id='r2'></div>");
        $("#r2").after("<div class='row' id='r3'></div>");
        $('#r2').append('<div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div>');
        $('#r3').append('<div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div><div class="col-md-4"><a href=""><div class="gallery_photo"><img src="photo1.png" alt="" width="100%"></div></a></div>');
        }
        else{
            is_open = false;
            $(".see_more > button").text("Смотреть все фото");
            $("#r2").html("");
            $("#r3").html("");
            $("#r2").remove();
            $("#r3").remove();
        }
    });



    $( function() {
        $( ".datepicker" ).datepicker();
      } );
      $('#sel1').select2();
      $('#sel2').select2();
      $('#sel3').select2();

      $(document).on('click', '.label_for_sel1', function (e) {
        if (e.originalEvent) {
          $(this).siblings('select').select2('open');    
        } 
      });
      $(document).on('click', '.label_for_sel2', function (e) {
        if (e.originalEvent) {
          $(this).siblings('select').select2('open');    
        } 
      });
      $(document).on('click', '.label_for_sel3', function (e) {
        if (e.originalEvent) {
          $(this).siblings('select').select2('open');    
        } 
      });
});


