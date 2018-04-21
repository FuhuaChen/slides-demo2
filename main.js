let n
init()
setInterval(()=>{
    makeLeave(getImages(n)).one('transitionend',(e)=>{makeEnter($(e.currentTarget))}
)
makeCurrent(getImages(n+1))
n+=1
},1500)











function makeLeave(node){
    return node.addClass('leave').removeClass('current')
}
function makeEnter(node){
    return node.removeClass('leave').addClass('enter')
}
function makeCurrent(node) {
    return node.addClass('current').removeClass('enter')
}
function getImages(n){
    return $(`.images>img:nth-child(${x(n)})`)
}
function init(){
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}
function x(n){
    let images = $('.images>img')
    if(n>images.length){
        n = n % (images.length)
        if(n===0){
            n=images.length
        }
    }
    return n
}
