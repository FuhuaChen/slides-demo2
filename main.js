let $slides = $('#slides')
let $images = $slides.children('img')
let $pages = $('.buttonWrapper>button')
let current = 0

makeFackSlides()
$slides.hide().offset()
$slides.css({transform: `translateX(-300px)`}).show()

bindEvents()

let timer = setTimer()

document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setTimer()
    }
})

$('.container').on('mouseenter',()=>{
    window.clearInterval(timer)
}).on('mouseleave',()=>{
    timer = setTimer()
})








function setTimer() {
   return setInterval(()=>{
        goToSlide(current+1)
    },1500)
}

function makeFackSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

function bindEvents() {
    $('#previous').on('click',()=>{
        goToSlide(current-1)
    })
    $('#next').on('click',()=>{
        goToSlide(current+1)
    })
    $pages.on('click', (e) => {
        let index = $(e.currentTarget).index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if(index>$pages.length-1){
        index = 0
    }else if(index<0){
        index = $pages.length-1
    }
    if (current === $images.length - 1 && index === 0) {
        $slides.css({transform: `translateX(${-($images.length + 1) * 300}px)`})
            .one('transitionend', () => {
                $slides.hide().offset()
                $slides.css({transform: `translateX(${-(index + 1) * 300}px)`}).show()
            })
    } else if (current === 0 && index === $images.length - 1) {
        $slides.css({transform: `translateX(0px)`})
            .one('transitionend', () => {
                $slides.hide().offset()
                $slides.css({transform: `translateX(${-(index + 1) * 300}px`}).show()
            })
    } else {
        $slides.css({transform: `translateX(${-(index + 1) * 300}px)`})
    }
    current = index
}