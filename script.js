// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Hi..! Xin chào mọi người..!", "Mình tên là: Nguyễn Văn Hoan,  Ngày Sinh: ngày 13 tháng 03 năm 2006, Địa chỉ hiện tại: xã Văn Phú - huyện Nho Quan - tỉnh Ninh Bình. Hiện tại mình là học sinh của trường THPT Nho Quan B, nếu bạn học cùng trường hãy bỏ ra chút ít thời gian để mình cùng đóng băng trước giây phút hết 3 năm cấp 3 mà không có người yêu."],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();