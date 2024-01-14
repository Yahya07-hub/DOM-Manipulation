var elem = document.querySelectorAll(".elem")

elem.forEach((val) => {
    val.addEventListener('mousemove', (dets) => {
        val.childNodes[1].style.left = dets.x + "px"
    })
    val.addEventListener('mouseenter', () => {
        val.childNodes[1].style.transform = 'scale(1)'
        val.childNodes[1].style.opacity = 1
    })

    val.addEventListener('mouseleave', () => {
        val.childNodes[1].style.transform = 'scale(0)'
        val.childNodes[1].style.opacity = 0
    })
});

