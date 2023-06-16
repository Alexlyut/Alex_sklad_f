document.addEventListener("mousemove", e =>{
    Object.assign(document.documentElement,{
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * 0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
        `
    })
})

let gallery_button_right = document.getElementsByClassName("gallery__button__right")[0]
let gallery_button_left = document.getElementsByClassName("gallery__button__left")[0]
let gallery_cards = document.getElementsByClassName("gallery__cards")[0]

let card_images=[
    "images\\images_for_list\\kisspng-flag-of-the-soviet-union-russian-revolution-nation-a-bloke-thinking-about-stuff-sometimes-5be78a99d5b188.2802946515419009538753.jpg",
    "images\\images_for_list\\png-clipart-viktor-tsoi-t-shirt-kino-clothing-tolstoy-shirt-t-shirt-face-black-hair.png",
    "images\\images_for_list\\png-transparent-fender-stratocaster-fender-bullet-squier-deluxe-hot-rails-stratocaster-guitar-electric-guitar-guitar-accessory-product-string-instrument.png",
    "images\\images_for_list\\png-transparent-music-note-melody-composition-black-color-transparent-background-thumbnail.png",
    "images\\images_for_list\\Без названия.png"
]

for(let i = 0;i < 3; i++){
    add_card(card_images[i])
}
function add_card(image){
    let new_card = document.createElement("img")
    new_card.src = image
    new_card.classList.add("gallery_cards")
    gallery_cards.append(new_card)
}

gallery_button_right.addEventListener("click", event =>{

})