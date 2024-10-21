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