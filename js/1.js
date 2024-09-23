wheader = document.querySelector("#header");
let btn = document.querySelector(".slowgun #btn");
let newP
let textnode


window.addEventListener("scroll", () => {
    console.log(scrollY)
    if (window.scrollY >= 100) {
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0px 5px 5px -2px gray";

        // for (let i = 0; i < 5; i++) {
        //     document.querySelectorAll("#header a")[i].style.color = "#98DFFF";
        // }

        // document.querySelectorAll("#header .menu").forEach(element => {
        //     element.style.color="white";
        // });

    } else {

        header.setAttribute("style", "background: transparent;");
    } 

    btn.addEventListener("click", function () {
        newP = document.createElement("p");
        textnode = document.createTextNode("포기는 배추샐때나 쓰는 말");
        newP.appendChild(textnode);
        document.body.appendChild(newP);
    
        // newP.replaceWith(btn);
    
    })

}); 

