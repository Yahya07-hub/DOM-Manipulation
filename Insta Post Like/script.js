let likePost = document.querySelector(".photo")
const likeBtn = document.querySelector(".actions .likebtn");
let heart = document.querySelector(".photo i")
let body = document.querySelector("body")
let cursorr = document.querySelector(".cursor")
let likes = 0;


body.addEventListener("mousemove", (dets) => {
    cursorr.style.left = dets.x + "px"
    cursorr.style.top = dets.y + "px"
})

likeBtn.addEventListener("click", () => {
    if (likes == 0) {
        addLike()
    } else {
        removeLike() 
    }
})

likePost.addEventListener("dblclick", () => {
    addHeart()

    setTimeout(() => {
        removeHeart()
    }, 2000)
})

addHeart = () => {
    heart.style.transform = 'translate(-50%, -50%) scale(1)'
    heart.style.opacity = '0.7'
    likes = 1;
    likeBtn.style.color = "red"
}

removeHeart = () => {
    heart.style.opacity = '0'
}

addLike = () =>{
    likes++
    likeBtn.style.color = "red"
    // likeBtn.style.transform = 'scale(1.2)'
}

removeLike = () => {
    likes--;
    likeBtn.style.color = "black";
}



// const heartEmpty = document.createElement('i');
// heartEmpty.classList.add('far', 'fa-heart')
// const heartFill = document.createElement('i');
// heartFill.classList.add('fas', 'fa-heart','red-heart')
//remove the empty heart icon from the DOM
// likePost.appendChild(heartFill);
// heartFill.style.display='block';