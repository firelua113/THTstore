// function với chức năng đổi number thành string
function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
        var array = num.toString().split("");
        var index = -3;
        while (array.length + index > 0) {
            array.splice(index, 0, separator);
            index -= 4;
        }
        return array.join("");
    }
}
function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
}

$(function () {
    $(".btn-update").click(function () {
        $(".border-top .num-zero").addClass("hidden");
        $(".border-top .num-feeship").removeClass("hidden");
        $(".border-top .num-feeship").addClass("active");

        $(".result-final-nofee").addClass("hidden");
        $(".result-final").removeClass("hidden");
        $(".result-final").addClass("active");
    });
});

$(function () {
    $(".signal").click(function () {
        // lấy thuộc tính type gán vào biến $type
        $type = $(this).attr("type");
        // lấy giá  trị của input gán vào biến $quantity
        $quantity = $(this).parent().find("input").val();
        // hàm closest bắt đầu tìm kiếm từ phần tử hiện tại
        $price = convertNumber($(this).closest(".box-math").find(".pricecore").text());
        $priceship = convertNumber($(this).closest(".content-body").find(".price-ship").text());

        $total = convertNumber($(".result-price-total span").text());
        $sum = convertNumber($(this).closest(".box-math").find(".result-sum span").text());

        $finalNofee = convertNumber($(".result-final-nofee span").text());

        $final = convertNumber($(".result-final span").text());

        if ($type == "plus") {
            $quantity++;
        } else if ($type == "minus") {
            if ($quantity > 1) {
                $quantity--;
            }
        } else if ($type == "delete") {
            $total = $total - $sum;
            // Xóa 1 đơn hàng bằng fadeOut
            $(this).closest(".box-math").fadeOut(500);
            // console.log($total);
        }

        if ($type == "plus" || $type == "minus") {
            $total = $total - $sum; //380000
            // console.log($total);
            // console.log($sum);

            // sau khi khai báo biến $price, $sum = giá *
            $sum = $price * $quantity; //56000
            // console.log($sum);
            $total = $total + $sum;
            // console.log($total);

            $final = $total + parseInt($priceship);
            // $final = 16000 + parseInt($finalNofee);
            // console.log($final);
        }
        // chạy xong điều kiện trả về giá trị từ biến $quantity giá trị mới
        $(this).parent().find("input").val($quantity);
        $(this).closest(".box-math").find(".result-sum span").text(convertMoney($sum));

        $(".result-price-total span").text(convertMoney($total));
        $(".result-final-nofee span").text(convertMoney($total));

        $(".result-final span").text(convertMoney($final));
    });

    $(function () {
        $("#collapse-ship").click(function () {
            $(".collapse-ship").slideToggle();
        });
    });
});
