import jQuery from "jquery";
var bannerIndex = 0;
var bannerMax = 0;

jQuery(document).ready(function () {
  bannerMax = jQuery(".carousel li").length - 1;

  jQuery(".carousel-slider input").click(function () {
    bannerIndex = this.value;
    slide(bannerIndex);
  });

  jQuery(".carousel-arrow-left").click(function () {
    var index = bannerIndex - 1;
    if (index < 0) bannerIndex = bannerMax;
    else bannerIndex = index;

    slide(bannerIndex);
  });

  jQuery(".carousel-arrow-right").click(function () {
    var index = bannerIndex + 1;
    if (index > bannerMax) bannerIndex = 0;
    else bannerIndex = index;

    slide(bannerIndex);
  });
});

function slide(index) {
  jQuery(".carousel li").removeClass("active");
  var slider = jQuery(".carousel li")[index];
  var input = jQuery(".carousel-slider input")[index];
  jQuery(input).prop("checked", true);

  jQuery(slider).addClass("active");
}
