let n = 1
let images = $('.images>img')
$(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
setInterval(()=>{
    $(`.images>img:nth-child(${x(n)})`).addClass('leave').removeClass('current')
    .one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')}
)
$(`.images>img:nth-child(${x(n+1)})`).addClass('current').removeClass('enter')
n+=1
},1500)


function x(n){
    if(n>images.length){
        n = n % (images.length)
        if(n===0){
            n=images.length
        }
    }
    return n
}