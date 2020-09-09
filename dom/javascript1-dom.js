// Ex5 : Dx5 : Element node의 속성 변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section4");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var colorInput = section.querySelector(".color-input");
    var img = section.querySelector(".img");

    changeButton.onclick = function() {
        //img.src = "images/" + imgSelect.value;
        img.src = "images/" + srcInput.value;
        img.style.borderColor = colorInput.value;
        //img.style["border-color"] = colorInput.value;
    };
});

// Ex3 : Selectors API
window.addEventListener("load", function() {
    var selector3 = document.getElementById("section3");
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function() {
        var x =  parseInt(txtX.value);
        var y =  parseInt(txtY.value);
        txtSum.value = x+y;
    }
});

// Ex1 : 계산귀
window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function() {
        var x =  parseInt(txtX.value);
        var y =  parseInt(txtY.value);
        txtSum.value = x+y;
    }
});
