// "use strict";

// let b = prompt('Введите сторону квадрата: ');
// alert('Периметр квадрата: '+ b * 4);
// alert('Площадь квадрата: ' + b * b);


// let result_fig1 = document.querySelector('.result_fig1');
// let result_fig2 = document.querySelector('.result_fig2');

// let a = document.querySelector('#calc_fig1');

// let perim = a * 4;
// let square = a * a;


// result_fig1.innerHTML = perim;
// result_fig2.innerHTML = square;

onload = function(){
    const _sl = document.querySelector('#sidelength'),
          _p = document.querySelector('#res_p'),
          _s = document.querySelector('#res_s');
          
     _sl.addEventListener('keyup', function(){
     this.value = this.value.replace(/[^\d]+/ig, '');
     _p.innerHTML = this.value * 4;
     _s.innerHTML = this.value ** 2;
     });
     
     _sl.focus();
    }