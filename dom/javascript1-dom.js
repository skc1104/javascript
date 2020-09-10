// Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function() {
    var notices = [
        {id:5, title:"보험회사", regDate:"2020-04-12", writerId:"Sam", hit:0 },
        {id:6, title:"제왕의 반지", regDate:"2020-05-22", writerId:"Prodo", hit:8 },
    ];
    
    var section = document.querySelector("#section7");
   
});

    // Ex6 : 엘리먼트 노드의 속성 & CSS 속성 변경
window.addEventListener("load", function() {
    var section = document.querySelector("#section6");
    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function() {
        
        var title = titleInput.value;
        var html = "<a href='#'>" + title + "</a>";
        var li = document.createElement("li");
        li.innerHTML = html;
        menuListUl.append(li, title);

        
        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);
        // var aNode = document.createElement("a");
        // aNode.href = "#";
        // //aNode.innerText = title;
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.append(aNode);
        // menuListUl.appendChild(liNode);
        
        /*var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListUl.appendChild(txtNode);*/
    };

    delButton.onclick = function() {
        // var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        //menuListUl.removeChild(liNode);
        liNode.remove();
    };

});

// Ex5 : Dx5 : Element node의 속성 변경
window.addEventListener("load", function() {
    var section5 = document.querySelector("#section5");
    var srcInput = section5.querySelector(".src-input");
    var imgSelect = section5.querySelector(".img-select");
    var changeButton = section5.querySelector(".change-button");
    var colorInput = section5.querySelector(".color-input");
    var img = section5.querySelector(".img");

    imgSelect.onchange = function() {
        srcInput.value = imgSelect.value;
    }

    changeButton.onclick = function() {
        //img.src = "images/" + imgSelect.value;
        img.src = "images/" + srcInput.value;
        img.style.borderColor = colorInput.value;
        //img.style["border-color"] = colorInput.value;
        console.log(img.className);
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
