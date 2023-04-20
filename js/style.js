function scrolltop() {
    document.body.scrolltop = 0;
    document.documentElement.scrollTop = 0;
}

$(function () {
    //ẩn hiện voucher
    $(".vourcher i").click(function () {
        $(".vourcher").addClass("active");
    });

    $(".clickSreach").click(function () {
        $(".search").addClass("active1");
    });
    $(".search form a i").click(function () {
        $(".search").removeClass("active1");
    });
});

//cuộn chuột hiện thanh nav menu top
var navbar = document.querySelector(".top-nav .navbar");
window.onscroll = function () {
    $value = window.scrollY;
    // console.log(value);

    if ($value > 250) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};

// trang user_order
$(function () {
    $(".t7 button").click(function () {
        $(".t7 .alert-success").removeClass("hidden");
        console.log("t7 .alert-success");

        // alert("đã cập nhật thông tin cá nhân!");
    });
});

//lấy data truyền vào top-nav-sub và nav-sub-news
$(function () {
    $(".nav-sub-news .nav-item").click(function () {
        $title = $(this).attr("datatext");
        $(".top-nav-sub .nav .nav-item .active").text($title);
        $(".nav-sub-news .title").text($title);
        $(".top-nav-sub .breadcrumb-text").text($title);
    });
});

//chọn lọc ngẫu nhiên list hình ảnh
$array_string = ["#news-1", "#news-2", "#news-3"];
$(document).ready(function () {
    $number = Math.floor(Math.random() * $array_string.length);
    $(".list-news").find($array_string[$number]).addClass("active");
    $(".list-news").find($array_string[$number]).siblings().removeClass("active");
});

// chọn số trang muốn xem
$(".list-num-page ul li").click(function () {
    $(this).addClass("active10");
    $(this).siblings().removeClass("active10");
});

// $(".p_right .p_size ul li").click(function () {
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");

// user_info.html
$(function () {
    $(".content-body-right .t1 .t-right a").click(function () {
        $(".content-body-right .t1 .t-right .inp-2").addClass("active");
        $(".content-body-right .t1 .t-right .inp-1").removeClass("active");
    });
});
$(function () {
    $(".content-body-right .t3 .t-right a").click(function () {
        $(".content-body-right .t3 .t-right .inp-2").addClass("active");
        $(".content-body-right .t3 .t-right .inp-1").removeClass("active");
    });
});
$(function () {
    $(".content-body-right .t4 .t-right a").click(function () {
        $(".content-body-right .t4 .t-right .inp-2").addClass("active");
        $(".content-body-right .t4 .t-right .inp-1").removeClass("active");
    });
});

//Billing information.html
$(function () {
    $("#myCheck-otheraddress").click(function () {
        $(".row-3").toggleClass("hidden");
    });
});
