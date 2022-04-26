//ヘッダーメニュー
$("header .menu").click(function () {
  $("header .menu_bigbox02").slideToggle();
  $(this).toggleClass("active");
  $(this).parent().toggleClass("active");
  $("header .slide .cnt_box13").slideUp();
  $("header .slide .cnt_box13").removeClass("active");
  $("header .slide .slide_btn").removeClass("active");

  if ($("header .menu").hasClass("active")) {
    $("header img.menu_active").css("display", "block");
  } else {
    $("header img.menu_active").css("display", "none");
  }
  if ($("header .glass").hasClass("active")) {
    $("header .menu_bigbox01").slideUp();
    $("header .glass").removeClass("active");
    $("header .glass_out").removeClass("active");

    $("header img.menu_active_g").css("display", "none");
  }
});

$("header .menu_bigbox02 .menu_box001 .first_text01").click(function () {
  $(this).next(".flex_box").slideToggle();
  $(this).toggleClass("active");
});

$("header .menu_bigbox02 .first_text").click(function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("active");
});

$("header .glass").click(function () {
  $("header .menu_bigbox01").slideToggle();
  $(this).toggleClass("active");
  $(this).parent().toggleClass("active");
  if ($("header .glass").hasClass("active")) {
    $("header img.menu_active_g").css("display", "block");
  } else {
    $("header img.menu_active_g").css("display", "none");
  }
  if ($("header .menu").hasClass("active")) {
    $("header .menu_bigbox02").slideUp();
    $("header .menu").removeClass("active");
    $("header .menu_out").removeClass("active");
    $("header img.menu_active").css("display", "none");
  }
});
$(document).on("click","header .search_block form button", function(){
  if ($("header .glass").hasClass("active")) {
    $("header .glass").removeClass("active");
    $("header img.menu_active_g").css("display", "none");
    $("header .menu_bigbox01").slideToggle();
  }
});

$("header .menu_bigbox01 .cnt_text_second").click(function () {
  $(this).next(".flex_box").slideToggle();
  $(this).toggleClass("active");
});

$("header .menu_bigbox01 .cnt_text_second").click(function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("active");
});

//フッター
$("footer .cnt_box01_sp .cnt_text_plus").click(function () {
  $(this).next(".box_in_out").slideToggle();
  $(this).toggleClass("active");
});

$("footer .cnt_box02.sp .cnt_text_plus").click(function () {
  $(this).next(".box_in").slideToggle();
  $(this).toggleClass("active");
});

$("header .slide .slide_btn").click(function () {
  $("header .slide .cnt_box13").slideToggle();
  $(this).toggleClass("active");
  $(this).parent().toggleClass("active");
  $("header .menu_bigbox02").slideUp();
  $("header .menu_bigbox02").removeClass("active");
  $("header .menu").removeClass("active");
  $("header img.menu_active").css("display", "none");
});

//スクロール
$(function () {
  var headerHeight = $("header").outerHeight();
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });
});
//トップJS
$("#top .cnt_area04 dt").click(function () {
  $(this).next("dd").slideToggle();
  $(this).toggleClass("active");
});

$(function () {
  $("#top .cnt_area01 .cnt_btn").click(function () {
    $("#top .movie").fadeIn();
    // モーダル領域をクリックでフェードアウトさせる
    $("#top .movie, #top .movie .close").click(function () {
      $("#top .movie").fadeOut(200);
    });
    // 画像をクリックでキャンセルさせる
    $("#top .movie .contents_in").on("click", function (e) {
      e.stopPropagation();
    });
  });
});

$(function () {
  $(function () {
    $("#top .cnt_area03 .btn_big.btn_big_kinds").click(function () {
      $(this).parent().next(".popup").css("display", "block");
    });
  });

  $(function () {
    $("#top .cnt_area03 .btn_big.btn_big_place").click(function () {
      $(this).next(".popup").css("display", "block");
    });

    $(function () {
      // モーダル領域をクリックでフェードアウトさせる
      $("#top .popup,  #top .popup .close").click(function () {
        $("#top .popup").fadeOut(200);
      });
      // 画像をクリックでキャンセルさせる
      $("#top .popup .contents_in").on("click", function (e) {
        e.stopPropagation();
      });
    });
  });
});

//トップJS 終了

//FAQアコーディオンをクリックした時の動作
$("#faq .title").on("click", function () {
  var findElm = $(this).next(".box");
  $(findElm).slideToggle();

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
  } else {
    //それ以外は
    $(this).addClass("close");
  }
});
//FAQ終了

//pagenation
var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 6;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "＜",
  nextText: "＞",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});

//modaal
$("#search .inline").modaal({
  overlay_opacity: "0.5",
});
