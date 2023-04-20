$(function () {
    // $(".p-product-1 .p_left .p_thumb .heart").click(function () {
    //     $(".p-product-1 .p_left .p_thumb .heart").toggleClass("active");
    //     $(".p-product-1").toggleClass("active");
    // });
    // $(".p_desc").click(function () {
    //     $(".p-product-1").removeClass("active");
    // });

    //chọn hình đổi  sup
    $(".p_img_link ul li").click(function () {
        $imgscr = $(this).attr("datasrc");
        // console.log($imgscr);
        $(".p_thumb img").attr("src", $imgscr);
    });

    $(".p_right .p_size ul li").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".p_price").text($(this).attr("dataprice"));
        $(".linegray-text").text($(this).attr("datastrueprice"));

        // tường minh dòng code trên
        // $prices = $(this).attr("dataprice");
        // $(".p_right .p_price .linegray-text").text($prices);
    });

    //bộ tăng giảm số lượng sản phẩm
    $(".signal").click(function () {
        $type = $(this).attr("type");
        $quantity = $(this).parent().find("input").val();

        if ($type == "plus") {
            $quantity++;
        } else if ($type == "minus") {
            if ($quantity > 1) {
                $quantity--;
            }
        }
        $(this).parent().find("input").val($quantity);
    });

    // show div add to cart
    $("#addcart").click(function () {
        $(".title-cart .bottom").addClass("show");
    });

    // chọn màu đổi sup
    $(".p_right .p_size ul li").click(function () {
        $imgscr = $(this).attr("datasrc");
        // console.log($imgscr);
        $(".p_thumb img").attr("src", $imgscr);
    });

    // toggle khuyến mãi
    $(".SALEOFF .title").click(function () {
        $(".SALEOFF .promotion").slideToggle(500);
        $(this).toggleClass("active");
        $(this).parent().toggleClass("active");
    });
});
