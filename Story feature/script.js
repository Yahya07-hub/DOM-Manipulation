let arr = [
    {
        dp: "https://images.unsplash.com/photo-1591523217226-9957e44f0b7b?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1704993237481-f073025181e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "subtle.vibes"

    },
    {
        dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=2364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "subtle.vibes"

    },
    {
        dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1704993237481-f073025181e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        dp: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1704993237481-f073025181e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    }
]
let arr2 = [
    {
        dp: "https://images.unsplash.com/photo-1591523217226-9957e44f0b7b?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        

    },
    {
        dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "subtle.vibes"

    },
    {
        dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "subtle.vibes"

    },
    {
        dp: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "subtle.vibes"

    }
]


let users = document.querySelector(".users")
arr.forEach((elem, idx) => {
    users.innerHTML += ` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})

let stories = document.querySelector('.story-container')
let userStory = document.querySelector('.story')

// arr2.forEach((elem2, ids) => {
//     stories.innerHTML += `<div class="story-container">
//     <div class="top">
//         <img id="${ids}" src="${elem2.dp}" alt="">
//         <p>${elem2.username}</p>
//     </div>
// </div>`
// })
users.addEventListener('click', (dets) => {
    // console.log(dets)
    stories.style.display = 'block'
    stories.style.backgroundImage = `url(${arr[dets.target.id].story})`
    stories.style.transform = 'scale(1)'
    stories.style.opacity = 1
    // dets.target.id.style.borderColor = grey

    // dets.target.id.style.borderColor = 'red'


    setTimeout(()=> {
        stories.style.display = 'none'

    }, 3000)
})

