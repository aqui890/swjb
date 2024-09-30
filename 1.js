const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = "white"; // 스크롤 시 하얀색 배경
        header.style.boxShadow = "0px 5px 5px -2px gray"; // 그림자 추가
    } else {
        header.style.backgroundColor = "transparent"; // 스크롤을 위로 올릴 때 투명
        header.style.boxShadow = ""; // 그림자 제거
    }
});