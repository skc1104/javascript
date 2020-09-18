'Use Strict'

// Ex9 : 마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function() {
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var status = section.querySelector(".status");
    var current = null;

    var dragging = false;
    var offset = { x:0, y:0 };
    var containerPos = { left:container.offsetLeft, top:container.offsetTop };

    console.log(containerPos.left);
    console.log(containerPos.top);
    
    section.onmousedown = function(e) {
        if(e.target.classList.contains("box")) { 
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    }

    section.onmousemove = function(e)  {
        if(!dragging) return;
    
        var x = e.pageX - offset.x - containerPos.left;
        var y = e.pageY - offset.y - containerPos.top;
        if(x < 0) x = 0;
        if(y < 0) y = 0;
        status.innerText = box.style.width;
        if(x+100 > 800) x = 800-100;
        if(y+100 > 400) y = 400-100;
        current.style.left = x + "px";
        current.style.top = y + "px";

        //status.innerText = "(x, y) : ( " + x + ", " + y + " )";
    }

    section.onmouseup = function(e) {
        dragging = false;
    }
});

// Ex8 : 마우스 이벤트 객체 : 여러개 박스 드래그 방식으로 박스 옮기기
window.addEventListener("load", function() {
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    //var box = section.querySelector(".box");
    var current = null;

    var dragging = false;
    var offset = { x:0, y:0 };

    // box.onmousedown = function(e) {
    //     offset.x = e.offsetX;
    //     offset.y = e.offsetY;
    // }
    
    container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) { 
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    }

    container.onmousemove = function(e)  {
        if(dragging) {
            current.style.left = e.pageX - offset.x + "px";
            current.style.top = e.pageY - offset.y + "px";
        }
    }

    container.onmouseup = function(e) {
        dragging = false;
    }
});

// Ex7 : 마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function() {
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = { x:0, y:0 };

    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
    container.onmousedown = function(e) {
        if(e.target === box) 
            dragging = true;
    }

    container.onmousemove = function(e)  {
        if(dragging) {
            box.style.left = e.pageX - offset.x + "px";
            box.style.top = e.pageY - offset.y + "px";
        }
    }

    container.onmouseup = function(e) {
        dragging = false;
    }
});

// Ex6 : 마우스 이벤트 객체 : 마우스 좌표
window.addEventListener("load", function() {
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e)  {
        // 클릭된 위치 좌표
        console.log("(x,y) : " + e.x + ", " + e.y);
        console.log("(clientX,clientY) : " + e.clientX + ", " + e.clientY);
        console.log("(pageX,pageY) : " + e.pageX + ", " + e.pageY);
        console.log("(offsetX,offsetY) : " + e.offsetX + ", " + e.offsetY);
        box.style.left = e.pageX + "px";
        box.style.top = e.pageY + "px";
    }
});

// Ex5 : 이벤트 트리거
window.addEventListener("load", function() {
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function() {
        /*var event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });*/
        var event = document.createEvent("MouseEvent");
        event.initEvent("click", true, true);
        fileButton.dispatchEvent(event)
    }
});

// Ex4 : Ex4 : 서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function() {
    var section = document.querySelector("#section4");
    var noticeList = section.querySelector(".notice-list");
    var tbody = section.querySelector("tbody");

    tbody.onclick = function(ev) {
        ev.preventDefault();
        if(ev.target.nodeName != "A") return;
        //if(ev.target.nodeName != "INPUT") return;
        //if(ev.target.className == "select-button")  // 이것도 됨. 허나 className이 단독이 아닌 경우 대처가 안됨
        if(ev.target.classList.contains("select-button")) {
            // var tr = ev.target.parentElement.parentElement; // 위험부담이 있는 코드임(구조가 달라질 때마다 대응해야...?!?!)
            var tr = ev.target.parentElement;
            for(; tr.nodeName != "TR"; tr=tr.parentElement)  ;
            // 한 단계 위의 tr 태그를 찾음

            tr.style.background = "cyan";
        } else if(ev.target.classList.contains("modify-button")) {

        } else if(ev.target.classList.contains("delete-button")) {

        }
    }
});

// Ex3 : 이벤트 버블링 중지하기
window.addEventListener("load", function() {
    section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    var addButton = section.querySelector(".add-button");

    var imgs = section.querySelectorAll(".img");

    imgList.onclick = function(event) {
        console.log("imgList.onclick");
        if(event.target.nodeName != "IMG")
            return;
        currentImg.src = event.target.src;    
    }
    
    addButton.onclick = function(event) {
        event.stopPropagation();
        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    }
});

// Ex2 : 버블링을 이용한 사용자 이벤트 처리
window.addEventListener("load", function() {
    section = document.querySelector("#section2");

    var imgList = section.querySelector(".img-list");
    //var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        if(e.target.nodeName != "IMG")
            return;
        currentImg.src = e.target.src;    
    }
    
    // for(var i=0; i<imgs.length; i++)
    //     imgs[i].onclick = function(e) {
    //         currentImg.src = e.target.src;
    //     }

});

// Ex1-1 : 연습문제, 개별 삭제 버튼 지원
window.addEventListener("load", function() {
    var section = document.querySelector("#section1-1");
    var noticeList = section.querySelector(".notice-list");
    var tbody = section.querySelector("tbody");
    tbody.onclick = function(e) {
        if(e.target.className == "delrow-button") {
            e.target.parentElement.parentElement.remove();
        }
    }
    //var delrowButton = section.querySelectorAll(".delrow-button");
    /*
    for(var i=0; i<delrowButton.length; i++) {
        delrowButton[i].onclick = function(e) {
            e.target.parentElement.parentElement.remove();
        }
    }*/
});

// Ex1 : 선택된 이미지 보여주기: event target
window.addEventListener("load", function() {
    section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length; i++)
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src;
        }
});
