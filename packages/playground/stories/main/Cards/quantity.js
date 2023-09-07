document.addEventListener("DOMContentLoaded", function () {
    const minus = document.querySelector(".quantity__minus");
    const plus = document.querySelector(".quantity__plus");
    const input = document.querySelector(".quantity__input");

    minus.addEventListener("click", function (e) {
        e.preventDefault();
        var value = parseInt(input.value);
        if (value > 1) {
            value--;
        }
        input.value = value;
    });

    plus.addEventListener("click", function (e) {
        e.preventDefault();
        var value = parseInt(input.value);
        value++;
        input.value = value;
    });
});