
const start_game = document.getElementById('start_game');
const res_butt = document.getElementById('js-btn-result');
let user_num = document.getElementById('user_number');
// const message = document.getElementById('text_result');

start_game.onclick = function rand_num(){
    var num = Math.round(Math.random()*100);
    console.log(num);
    document.getElementById('text_result').innerHTML = '';
    document.getElementById('try').innerHTML = 'У Вас 10 попыток!';
    res_butt.removeAttribute("disabled");
    let i = 1;

    res_butt.onclick = function guess_number() {
        if (i < 10){
            document.getElementById('try').innerHTML = 'Оставшиеся попытки: ' + (10 - i);
            if (user_num.value != num) {
                if (user_num.value < num) {
                    document.getElementById('text_result').innerHTML = 'Введите число побольше';
                    console.log('введите больше');
                    
                } else {
                    document.getElementById('text_result').innerHTML = 'Введите число поменьше';
                    console.log('введите меньше');
                    
                }
            } else {
                document.getElementById('text_result').innerHTML = 'Вы отгадали число!';
                console.log('Вы отгадали число');
                res_butt.setAttribute('disabled', 'disabled');
            } i++;
        } else {
            document.getElementById('text_result').innerHTML = 'К сожалению, Вы проиграли. Загаданное число: ' + num;
            console.log('К сожалению, Вы проиграли.');
        }
    }
}




// start_game.onclick = function rand_num(){
//     const num = Math.round(Math.random()*100);
//     document.getElementById('text_result').innerHTML ='';
// }

// function guess_number(){

//     console.log(num);
//     var user_num = document.querySelector('.user_number');
//     console.log(user_num.value);
//     let i = 0;
//     while (i < 10){
//         if (user_num.value != num) {
//             if (user_num.value < num) {
//                 document.getElementById('text_result').innerHTML = 'Введите число побольше';
//                 console.log('введите больше');
                
//             } else {
//                 document.getElementById('text_result').innerHTML = 'Введите число поменьше';
//                 console.log('введите меньше');
                
//             }
//         } else {
//             document.getElementById('text_result').innerHTML = 'Вы отгадали число!';
//             break;
//         }
//         i++;
//         var nums = '';
//         nums = nums + user_num
//         if (i == 1){
//             document.getElementById('try').innerHTML = 'Попытки:';
//             document.getElementById('try1').innerHTML = nums.value;
//         }
//     };
// }