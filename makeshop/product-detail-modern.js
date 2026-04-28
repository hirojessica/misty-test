$(function () {
  $(".product-img__slick").slick({
    asNavFor: ".product-img__slick-thumb",
    infinite: true,
    prevArrow: "<button type='button' class='product-img__prev'>Previous</button>",
    nextArrow: "<button type='button' class='product-img__next'>Next</button>",
    responsive: [{
      breakpoint: 900,
      settings: {
        dots: true,
        centerMode: true,
        centerPadding: "28px"
      }
    }]
  });

  $(".product-img__slick-thumb").slick({
    asNavFor: ".product-img__slick",
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    focusOnSelect: true
  });

  $(".product-qt__inc, .product-qt__dec").on("click", function () {
    var step = 1;
    var min = 1;
    var max = 100;
    var counter = $(this).attr("data-spinner");
    var $input = $(".product-qt__input");
    var num = parseInt($input.val(), 10);

    if (isNaN(num)) num = min;
    if (counter === "up") num += step;
    if (counter === "down") num -= step;
    if (num < min) num = min;
    if (max < num) num = max;

    $input.val(num);
  });
});
