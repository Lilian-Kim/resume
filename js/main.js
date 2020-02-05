var topBtn = document.getElementById('go_top')

window.addEventListener('scroll', function(){
    var nowScroll = window.scrollY
    console.log(nowScroll)
    if(nowScroll > 50) {
        topBtn.classList.add('block')
    }else{
        topBtn.classList.remove('block')
    }
})

function goTop (){
    console.log('click')
    return window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

}