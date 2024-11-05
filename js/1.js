const header = document.querySelector("#header");
const headerLinks = document.querySelectorAll("#header a"); // 모든 a 태그 선택

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#F8F8FF"; // 스크롤 시 배경색 변경
        header.style.boxShadow = "0px 5px 5px -2px gray"; // 그림자 추가
        headerLinks.forEach(link => {
            link.style.color = "#003366"; // 모든 링크 색상 변경
        });
    } else {
        header.style.backgroundColor = "transparent"; // 스크롤을 위로 올릴 때 투명
        header.style.boxShadow = ""; // 그림자 제거
        headerLinks.forEach(link => {
            link.style.color = ""; // 색상 초기화
        });
    }
});


const address = document.querySelector("#address");
const right = document.querySelector("#right");
const mapIMG = document.querySelector("#mapmap");

mapIMG.style.display = "none"
address.addEventListener("click", function() {
    right.classList.toggle("toggle")
    mapIMG.classList.toggle("toggle2")
})

// const btn = document.querySelector("#btn");
// const textarea = document.querySelector("#textarea");
// const input = document.querySelector(".text");
// const input2 = document.querySelector("#email");

// btn.addEventListener("click", function() {
//     textarea.value = "";
//     input.value = "";
//     input2.value = "";
// })

const leftIMG = document.querySelectorAll(".left img");
const adiv = document.querySelectorAll(".adiv");
let i;

leftIMG.forEach(img => {
    img.addEventListener("click", function() {
        for(i = 0; i < 5; i++){
            if(adiv[i].style.opacity == "0"){
                adiv[i].style.opacity = "1";
            } else{
                adiv[i].style.opacity = "0";
            }
        }

        // adiv.classList.toggle("opacity");
    });
});


const linkprojectf = document.querySelector(".linkproject-f");
const linkprojectweb = document.querySelector(".linkproject-web");
const linkprojectc = document.querySelector(".linkproject-c");

linkprojectf.addEventListener("click", function() {
    window.location.href = "https://aqui890.github.io/portfolio2";
});

linkprojectweb.addEventListener("click", function() {
    window.location.href = "https://aqui890.github.io/swjb";
});

linkprojectc.addEventListener("click", function() {
    window.location.href = "https://www.miricanvas.com/v/13t60p7";
});