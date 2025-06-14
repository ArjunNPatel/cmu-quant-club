//Credit to Conor Bailey  https://www.youtube.com/watch?v=MQ0hu-LhzEI 

let arr_paragraph = [...document.querySelectorAll("p")] 
let arr_span = []

arr_paragraph.forEach(x => {
    let str = ''
    let arr_words = x.textContent.split(" ")
    for(let i = 0; i < arr_words.length; i++) {
        str += `<span>${arr_words[i]} </span>`
    }
    x.innerHTML = str
})

arr_span = [...document.querySelectorAll('span')]

function fadeIn() {
    for(let i = 0; arr_span.length; i++){
        let {top, left} = arr_span[i].getBoundingClientRect()
        top = top - (window.innerHeight * .5)
        let adjust = 1 - (top* .01 + left * .001) 
        let opacityValue  = adjust < 0.3 ? 0.3 : adjust 
        opacityValue = opacityValue > 1 ? 1: opacityValue.toFixed(2) 
        arr_span[i].style.opacity = opacityValue
    }
}

window.addEventListener('scroll', () => {fadeIn()}) 
fadeIn()