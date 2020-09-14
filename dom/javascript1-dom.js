// Ex10 : 클릭한 컬럼을 기준으로 레코드 정렬하기
window.addEventListener("load", function() {
    var notices = [
        {"id":1, "title":"유튜브 어쩌고 ...", "regDate":"2019-02-05", "writerId":"newlec", "hit":2 },
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");
    var noticeList = section.querySelector(".notice-list");
    var titleTd = section.querySelector(".title");
    var tbodyNode = section.querySelector("tbody");

    var bindData = function() {
        var template = section.querySelector("template");
        for(var i=0; i<notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
            tbodyNode.append(cloneNode);
        }
    };

    bindData();

    var titleSorted = false;
    titleTd.onclick = function() {
        tbodyNode.textContent = "";
        if(titleSorted) {
            notices.reverse();
        } else {
            notices.sort(function(a, b) {
                if(a.title < b.title)
                    return -1;
                else if(a.title > b.title)
                    return 1;
                else
                    return 0;
            });
            titleSorted = true;
        }
        bindData();
    };
});

// Ex9 : 다중 노드 선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function() {
    var section = document.querySelector("#section9");
    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function() {
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i=0; i<inputs.length; i++)
            inputs[i].checked = allCheckbox.checked;
    };

    delButton.onclick = function() {
        //1. 전체를 돌며 checked를 찾아서
        /*
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i=0; i<inputs.length; i++)
            if(inputs[i].checked) {
                inputs[i].parentElement.parentElement.remove();
            }
        */

        //2. checked 된 것만 끌어와서 loop  ":checked"
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        for(var i=0; i<inputs.length; i++)
            inputs[i].parentElement.parentElement.remove();
    };

    swapButton.onclick = function() {
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        if(inputs.length != 2) {
            alert("바꿀 거 2 개 선택하렴");
            return;
        }
        var trs = [];
        for(var i=0; i<inputs.length; i++) {
            trs.push(inputs[i].parentElement.parentElement);
        }
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };

});

// Ex8 : 노드 삽입과 바꾸기
window.addEventListener("load", function() {
    var section = document.querySelector("#section8");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function() {
        var nextNode = currentNode.nextElementSibling;
        if(nextNode == null) {
            alert("더 못 내리 갑니다.");
            return;
        }
        // tbodyNode.removeChild(nextNode);
        tbodyNode.insertBefore(nextNode, currentNode);
        // currentNode.insertAdjacentElement("beforebegin", nextNode);
    };

    upButton.onclick = function() {
        var previousNode = currentNode.previousElementSibling;
        if(previousNode == null) {
            alert("더 올라갈 디 없씨유~");
            return;
        }
        //tbodyNode.removeChild(currentNode);
        tbodyNode.insertBefore(currentNode, previousNode);
    };
});

// Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function() {
    var notices = [
        {id:5, title:"보험회사", regDate:"2020-04-12", writerId:"Sam", hit:100 },
        {id:6, title:"제왕의 반지", regDate:"2020-05-22", writerId:"Prodo", hit:200 },
    ];
    
    var section = document.querySelector("#section7");
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function() {
        var trNode = noticeList.querySelector("tbody tr"); // first-child 불필요
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = "<a href='" + notices[0].id + "'>" + notices[0].title + "</a>";
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;
        tbodyNode.append(cloneNode);
    };

    templateButton.onclick = function() {
        var template = section.querySelector("template");

        for(var i = 0; i < notices.length; i++) {
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].textContent = notices[i].id;
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;
            tbodyNode.append(cloneNode);
        }
    };
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
