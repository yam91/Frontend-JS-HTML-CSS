const cursorTag = document.querySelector("div.cursors")
const balls = cursorTag.querySelectorAll("div")
const ballMessage = cursorTag.querySelector("div span")
const images = document.querySelectorAll("img[data-hover]") //selects images that have a data-hover attribute in their tag.

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
    let currentX = 0
    let currentY = 0

    let speed = 0.3 - index*0.015

    const animate = function () {
        currentX += (aimX - currentX)*speed
        currentY += (aimY - currentY)*speed

        if (index == 1) {
            console.log(`Aim coordinates are:(${aimX},${aimY}), 
                and current coordinates are: (${currentX},${currentY})`)
        }

        ball.style.left = currentX + "px"
        ball.style.top = currentY + "px"

        requestAnimationFrame(animate)
    }
    animate()
})

document.addEventListener("mousemove", function(event) {
    aimX = event.pageX
    aimY = event.pageY
})

images.forEach(image => {
    image.addEventListener("mouseover", function (){
        ballMessage.classList.add("visible")
        ballMessage.innerHTML = image.getAttribute("data-hover")
    })

    image.addEventListener("mouseout", function () {
        ballMessage.classList.remove("visible")
        //ballMessage.innerHTML = ""
    })
})
