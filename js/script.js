// Active Nav Link
$(document).ready(function(){

    $(".n-link").click(function(){
        $(".n-link").removeClass("active");
        $(this).addClass("active");

    });

});

// Sliders
new Splide( '#slider1' ).mount();
new Splide( '#slider2' ).mount();

  new Splide( '#slider1', {
    type   : 'loop',
    perPage: 1,
    autoplay:true,
    arrows:true,
} );



$(document).ready(function(){
    
    $(window).scroll(function(){
            // Progress bar 
        // Get Percentage of the window
        percent = ($(window).scrollTop() / ($(document).height() - $(window).innerHeight()) *100) ;
        $("#progress").css({
            "width": percent +"%",
        });

        // Hide or Show To Top Button
        if($(window).scrollTop() > 100){
            $("#toTop").show();
        }
        else{
            $("#toTop").hide();
        }

        
    });

    // Move to Top
    $("#toTop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },500);
      }); 
  


  });



  