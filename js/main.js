$(document).ready(function(){
    $('.ham').click(function (){
        $('.hamRotate').toggleClass('active');
        $('.landing-open').toggleClass('active');
        $('.platform-top-nav').toggleClass('active');
        $('.panel-nav-2').toggleClass('active');

        // if ($(this).hasClass('open')){
        //     $(this).find('.text-menu').html('close');
        // }
        // else {
        //     $(this).find('.text-menu').html('menu');
        // }
        $('body').toggleClass('stop-scrolling');
        $('.app-top').toggleClass('open');
        $('.app-top-bg').toggleClass('open');
    });
    new ClipboardJS('.cpy');
});



$(document).click(function(event) {
    if (!$(event.target).closest('.ham').length) {
        $('.ham').removeClass('active');
        $('.landing-open').removeClass('active')
        $('body').removeClass('stop-scrolling')
        $('.panel-nav-2').removeClass('active')
        $('.platform-top-nav').removeClass('active');

    }
});

function limit(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
}

var msg = $('.alert');

if(msg.length){
    var timeleft = 5;
    var alertTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(alertTimer);
            // msg.removeClass('d-flex');
            msg.fadeOut();
        }
        $('.alert-timer').text(timeleft--);
    }, 700);
}

$('form').submit(function() {
    $(".single-click").attr("disabled", true);
});

$('.cpy').click(function (){
    $(this).stop().fadeTo(100, 0.1).fadeTo(200, 1.0);
});

$(document).ready(function() {
    // Get the video element
    var video = $("#qp_main");

    // Create a media query that matches the desired width
    var mediaQuery = window.matchMedia("(max-width: 577px)");

    // Define the function to change the source file
    function changeSource() {
        if (mediaQuery.matches) {
            // Change the source file to the larger video
            video.children("source").eq(0).attr("src", "/video/final_v2_mob.mp4");
            video.children("source").eq(1).attr("src", "/video/final_v2.mp4");
        } else {
            // Change the source file back to the smaller video
            video.children("source").eq(0).attr("src", "/video/final_v2.mp4");
            video.children("source").eq(1).attr("src", "/video/final_v2_mob.mp4");
        }
        if (video[0]) {
            video[0].load();
        }
    }

    // Call the function once to set the initial source file
    changeSource();

    // Add an event listener to call the function whenever the media query is matched or unmatched
    mediaQuery.addListener(changeSource);
});

    var lastScrollTop; // This Varibale will store the top position

    navbar = document.getElementById('navbar'); // Get The NavBar
    if(navbar) {
        window.addEventListener('scroll',function(){
            //on every scroll this funtion will be called

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            //This line will get the location on scroll

            if(scrollTop > lastScrollTop){ //if it will be greater than the previous
                navbar.style.top='-80px';
                //set the value to the negetive of height of navbar
            }

            else{
                navbar.style.top='0';
            }

            lastScrollTop = scrollTop; //New Position Stored
        });
    }



// $(document).ready(function() {
//     $('.lang-link').click(function(e) {
//         $('.lang-link img').css('opacity', '0.5');
//         $(this).find('img').css('opacity', '1');
//     });
// });

//
// $('.alert-btn').click(function (){
//     $(".alerts-container").fadeOut();
// })
//
// var msg = $(".alerts-container");
//
// if(msg.length){
//     var timeleft = 5;
//     var alertTimer = setInterval(function(){
//         if(timeleft <= 0){
//             clearInterval(alertTimer);
//             msg.fadeOut();
//         }
//         $('.alert-timer').text(timeleft--);
//     }, 700);
// }

// $('.toggle-password').click(function (){
//     $(this).toggleClass('active');
//     let pw = $(this).parent().find('.value');
//
//     if(pw.attr('type') === 'password'){
//         pw.attr('type', 'text');
//     }else{
//         pw.attr('type', 'password');
//     }
//
// })


