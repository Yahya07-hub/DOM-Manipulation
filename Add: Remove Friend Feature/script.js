var button = document.querySelector(".btn-container button")
var Cstatus = document.querySelector(".status")
check = 0

button.addEventListener('click', () => {
    if (check == 0) {
        Cstatus.innerHTML = 'Friends'
        Cstatus.style.color = "green"
        button.innerHTML = "<i class='fa-solid fa-user-xmark'></i> Remove Friend"
        check = 1
    }else{
        Cstatus.innerHTML = 'Not friends'
        Cstatus.style.color = "red"
        // button.innerHTML = "Add Friend"
        button.innerHTML = '<i class="fa-solid fa-user-plus"></i>  Add Friend'
        check = 0
    }
})
