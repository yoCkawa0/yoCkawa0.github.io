// $(function(){
//     $(".btn-gnavi").on("click", function(){
//         // ハンバーガーメニューの位置を設定
//         var rightVal = 0;
//         if($(this).hasClass("open")) {
//             // 位置を移動させメニューを開いた状態にする
//             rightVal = -300;
//             // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//             $(this).removeClass("open");
//         } else {
//             // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//             $(this).addClass("open");
//         }
 
//         $("#global-navi").stop().animate({
//             right: rightVal
//         }, 200);
//     });
// });


// $(function() {
//     console.log("Hello from macOS Catalina");
//     $('.navToggle').click(function() {
//         $(this).toggleClass('active');
 
//         if ($(this).hasClass('active')) {
//             $('.globalMenuSp').addClass('active');
//         } else {
//             $('.globalMenuSp').removeClass('active');
//         }
//     });
// });
// $(function(){
//     var mySwiper = new Swiper('.swiper-container', {
//         effect: 'coverflow',
//         centeredSlides : true,
//         loop: true,
//         slidesPerView: 'auto',
//         autoplay: {
//             delay: 3000,
//             stopOnLastSlide: false,
//             disableOnInteraction: false,
//             reverseDirection: false
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true
//         }
//     });

// });
// $(function(){
//     var mySwiper = new Swiper('.swiper-container', {
//         effect: 'coverflow',
//         centeredSlides : true,
//         loop: true,
//         // slidesPerView: 'auto',
//         slidesPerView: 3,
//         autoplay: {
//             delay: 3000,
//             stopOnLastSlide: false,
//             disableOnInteraction: false,
//             reverseDirection: false
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true
//         }
//     });
// });
var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides : true,
    loop: true,
    // slidesPerView: 'auto',
    slidesPerView: 3,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
    }
});
