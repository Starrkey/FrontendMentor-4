'use strict';

const submitBtn = document.querySelector('.submit-btn');
const rating1 = document.querySelector('.star1');
const rating2 = document.querySelector('.star2');
const rating3 = document.querySelector('.star3');
const rating4 = document.querySelector('.star4');
const rating5 = document.querySelector('.star5');
const containz = document.querySelector('.container1');
const containx = document.querySelector('.container2');


submitBtn.addEventListener('click', function(){
    if (document.querySelector('.thank-you-msg').textContent === 'xcx'){
        alert("Please choose a Rating");
    }
    else{
        containz.classList.add('hidden');
        containx.classList.remove('hidden');
    }
    
})
rating1.addEventListener('click', function(){
    rating1.classList.remove('bg-circle')
    rating2.classList.remove('bg-circle2');
    rating3.classList.remove('bg-circle2');
    rating4.classList.remove('bg-circle2');
    rating5.classList.remove('bg-circle2');
    rating1.classList.add('bg-circle2');
    rating2.classList.add('bg-circle');
    rating3.classList.add('bg-circle');
    rating4.classList.add('bg-circle');
    rating5.classList.add('bg-circle');
    document.querySelector('.thank-you-msg').textContent = 'You selected 1 out of 5';
});

rating2.addEventListener('click', function(){
    rating1.classList.remove('bg-circle2')
    rating2.classList.remove('bg-circle');
    rating3.classList.remove('bg-circle2');
    rating4.classList.remove('bg-circle2');
    rating5.classList.remove('bg-circle2');
    rating1.classList.add('bg-circle');
    rating2.classList.add('bg-circle2');
    rating3.classList.add('bg-circle');
    rating4.classList.add('bg-circle');
    rating5.classList.add('bg-circle');
    document.querySelector('.thank-you-msg').textContent = 'You selected 2 out of 5';
});
rating3.addEventListener('click', function(){
    rating1.classList.remove('bg-circle2')
    rating2.classList.remove('bg-circle2');
    rating3.classList.remove('bg-circle');
    rating4.classList.remove('bg-circle2');
    rating5.classList.remove('bg-circle2');
    rating1.classList.add('bg-circle');
    rating2.classList.add('bg-circle');
    rating3.classList.add('bg-circle2');
    rating4.classList.add('bg-circle');
    rating5.classList.add('bg-circle');
    document.querySelector('.thank-you-msg').textContent = 'You selected 3 out of 5';
});
rating4.addEventListener('click', function(){
    rating1.classList.remove('bg-circle2')
    rating2.classList.remove('bg-circle2');
    rating3.classList.remove('bg-circle2');
    rating4.classList.remove('bg-circle');
    rating5.classList.remove('bg-circle2');
    rating1.classList.add('bg-circle');
    rating2.classList.add('bg-circle');
    rating3.classList.add('bg-circle');
    rating4.classList.add('bg-circle2');
    rating5.classList.add('bg-circle');
    document.querySelector('.thank-you-msg').textContent = 'You selected 4 out of 5';
});
rating5.addEventListener('click', function(){
    rating1.classList.remove('bg-circle2')
    rating2.classList.remove('bg-circle2');
    rating3.classList.remove('bg-circle2');
    rating4.classList.remove('bg-circle2');
    rating5.classList.remove('bg-circle');
    rating1.classList.add('bg-circle');
    rating2.classList.add('bg-circle');
    rating3.classList.add('bg-circle');
    rating4.classList.add('bg-circle');
    rating5.classList.add('bg-circle2');
    document.querySelector('.thank-you-msg').textContent = 'You selected 5 out of 5';
});

