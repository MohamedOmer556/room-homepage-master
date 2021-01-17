//slides
const slide = document.querySelector('.imgs');
const images = document.querySelectorAll('.imgs img');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const hideNext = document.querySelector('.hide-right');
const hideprev = document.querySelector('.hide-left');
const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const text3 = document.querySelector('.text-3');
let counter = 1;

//desktop
nextBtn.addEventListener('click', ()=>{
    slide.style.animation = 'none';
    if (counter === 1){  
        slide.style.transform = 'translateX(-20%)';
        counter +=1;
        text2.style.display = 'flex';
        text3.style.display = 'none';
        text1.style.display = 'none';
        console.log(text2);
       
    }
    else if (counter === 2){
        slide.style.transform = 'translateX(-40%)';
        counter +=1;
        text3.style.display = 'flex';
        text2.style.display = 'none';
        text1.style.display = 'none';
        console.log(text3);
    }
    else {
        slide.style.transform = 'translateX(-0%)';
        counter -=2;
        text1.style.display = 'flex';
        text3.style.display = 'none';
        text2.style.display = 'none';
        console.log(text1);
    }
    console.log(slide);
});

prevBtn.addEventListener('click', ()=>{
    slide.style.animation = 'none';
    if (counter === 1){
        slide.style.transform = 'translateX(-40%)';
        counter +=2;
        text1.style.display = 'none';
        text3.style.display = 'flex';
        text2.style.display = 'none';
    }
    else if (counter === 2){
        slide.style.transform = 'translateX(-0%)';
        counter -=1;
        text1.style.display = 'flex';
        text3.style.display = 'none';
        text2.style.display = 'none';
        console.log(counter);
    }else{
        slide.style.transform = 'translateX(-20%)';
        counter -=1;
        text1.style.display = 'none';
        text3.style.display = 'none';
        text2.style.display = 'flex';
        
    }
});

// mobile
hideNext.addEventListener('click', ()=>{
    slide.style.animation = 'none';
    if (counter === 1){  
        slide.style.transform = 'translateX(-20%)';
        counter +=1;
        text2.style.display = 'flex';
        text3.style.display = 'none';
        text1.style.display = 'none';
        console.log(text2);
       
    }
    else if (counter === 2){
        slide.style.transform = 'translateX(-40%)';
        counter +=1;
        text3.style.display = 'flex';
        text2.style.display = 'none';
        text1.style.display = 'none';
        console.log(text3);
    }
    else {
        slide.style.transform = 'translateX(-0%)';
        counter -=2;
        text1.style.display = 'flex';
        text3.style.display = 'none';
        text2.style.display = 'none';
        console.log(text1);
    }
    console.log(slide);
});

hideprev.addEventListener('click', ()=>{
    slide.style.animation = 'none';
    if (counter === 1){
        slide.style.transform = 'translateX(-40%)';
        counter +=2;
        text1.style.display = 'none';
        text3.style.display = 'flex';
        text2.style.display = 'none';
    }
    else if (counter === 2){
        slide.style.transform = 'translateX(-0%)';
        counter -=1;
        text1.style.display = 'flex';
        text3.style.display = 'none';
        text2.style.display = 'none';
        console.log(counter);
    }else{
        slide.style.transform = 'translateX(-20%)';
        counter -=1;
        text1.style.display = 'none';
        text3.style.display = 'none';
        text2.style.display = 'flex';
        
    }
});




//burger
const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-close');
const nav = document.querySelector('.nav-bar');

burgerBtn.addEventListener('click', ()=>{
    nav.style.transform = 'translateY(0%)';
});
closeBtn.addEventListener('click', ()=>{
    nav.style.transform = 'translateY(-100%)';
});