/// <reference types="../@types/jquery" />
//*************************************navbar ************************************//
$(window).on('scroll',function(){
    let windowScroll=$(window).scrollTop()
    if(windowScroll>$('#about').offset().top-70){
        $('.navbar').css('backgroundColor','#fff')
        $('.navbar a').css('color','#000')
    }else{
        $('.navbar').css('backgroundColor','transparent')
        $('.navbar a').css('color','#fff')

    }
})
//*************************************smooth ************************************//
$('a[href^="#"]').on('click',function(e){
    
    let url=$(e.target).attr('href');
    let section=$(url).offset().top
    $('html').animate({scrollTop:section},2000)
})

//*************************************loading ************************************//
// $(document).ready()
$(function(){
    $('.loader').fadeOut(1500,function(){
        $('.loading').slideUp(1500,function(){
            $('body').css('overflow','auto')
            $('.loading').remove()
        })
    })
   
})
//*************************************sidebar ************************************//

let colorBox=$(".color-box");
var arrColor=["#48cae4","#fb6f92","#52b788","#deaaff","#dbfe87"]
for (let index = 0; index < arrColor.length; index++) {
    colorBox.eq(index).css("backgroundColor",arrColor[index])
    
}

$('#icon').on('click',function(){
   // console.log('true')
    $('#all-aside').animate({width:'toggle'},1000)
})

$(function(){
    $('#all-aside').hide(1000)
})
colorBox.on('click',function(e){
    // console.log(e.target)
   let color= $(e.target).css("backgroundColor")
   $('span,a,.nav-link,h2').css('color',color)
   document.documentElement.style.setProperty('--main-color', color);
    
})