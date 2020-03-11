const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card") 

for(let card of cards){
    card.addEventListener("click", function(){
        const fotoId = card.querySelector("img").getAttribute("alt")
        const title = card.querySelector("p.title").textContent;
        const autor = card.querySelector("p.autor").textContent;

        modalOverlay.querySelector("img").src = `img/${fotoId}.png`;
        modalOverlay.querySelector("p.title").innerHTML = title;
        modalOverlay.querySelector("p.autor").innerHTML = autor;

        modalOverlay.classList.add("active");
    })
}

document.querySelector(".modal-close").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
})