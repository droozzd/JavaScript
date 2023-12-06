// const a = document.querySelector('.js-number-a'),
// 	b = document.querySelector('.js-number-b'),
// 	c1 = document.querySelector('.js-selection'),
//     res = document.querySelector('.js-btn-result'),
//     js_output = document.querySelector('#js-output');

// const OPERATIONS = {
// 	sum: '+',
// 	substract: '-',
// 	multiply: '*',
// 	division: '/'
// };


// function calculate ({a, b, operation}) {
// 	let result = null;

// 	switch (operation) {
// 		case OPERATIONS.sum:
// 			result = sum(a,b);
// 			break;
// 		case OPERATIONS.substract:
// 			result = substract(a,b);
// 			break;
// 		case OPERATIONS.division:
// 			result = division(a,b);
// 			break;
// 		case OPERATIONS.multiply:
// 			result = multiply(a,b);
// 			break;
// 		default:
// 			break;
// 		}
// };
// res.addEventListener('click',calculate(a,b,c1));

// js_output.innerHTML = result;
// js_output.focus();

// console.log(a);


function calculator(){
	const OPERATIONS = {
		sum: '+',
		substract: '-',
		multiply: '*',			
		division: '/'
	};
	const a = document.querySelector('.js-number-a').value,
		b = document.querySelector('.js-number-b').value,
		operation = document.querySelector('.js-selection').value;

	let result = null;

	switch (operation) {
		case OPERATIONS.sum:
			result = +a + +b;
			break;
		case OPERATIONS.substract:
			result = a - b;
			break;
		case OPERATIONS.division:
			if (b == 0){
				result = 'Деление на ноль!'
				break;
			} else {
				result = (a/b).toFixed(2);
				break;
			}
			result = (a);
			break;
		case OPERATIONS.multiply:
			result = a * b;
			break;
		default:
			break;
	}
	
	// console.log(a.value);
	// console.log(b.value);
	// console.log(operation.value);

	document.getElementById("js-output").innerHTML = result;
}




// onload = function(){
//     const a1 = document.querySelector('.js-number-a'),
// 		b1 = document.querySelector('.js-number-b'),
// 		c1 = document.querySelector('.js-selection'),
//         res = document.querySelector('.js-btn-result');
          
//      _sl.addEventListener('keyup', function(){
//      this.value = this.value.replace(/[^\d]+/ig, '');
//      _p.innerHTML = this.value * 4;
//      _s.innerHTML = this.value ** 2;
//      });
     
//      _sl.focus();
//     }
// 	for 