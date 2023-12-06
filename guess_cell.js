const new_game = document.getElementById('new_game');

let span = document.querySelector('span');


let timer;

new_game.onclick = function start() {
    // const again = document.getElementById('table_guess_cell');
    // again.removeAttribute('display');
    const tb = document.createElement('table');
    // console.log(body);
    console.log(tb);
    const game_size = document.getElementById('js-selection').value;

    document.getElementById('number_cells').innerHTML = 'Количество загаданных клеток: ' + game_size;


    // let tb = document.querySelector('#tb');

    +function createTable() {
        let count = 0;
        for (let i = 0; i < game_size; i++) {
            let tr = document.createElement('tr');

            for (let i = 0; i < game_size; i++) {
                let td = document.createElement('td');

                td.setAttribute('data-num', count);
                count++;
                tr.append(td);
            }
            tb.append(tr);
        }
    }();

    console.log(game_size);
    let parent = document.querySelector('.par');
    parent.append(tb);
    // document.getElementById('tb1').innerHTML = tb;

    function getSet() {
        let uniq = new Set();
        while (uniq.size < game_size) {
            uniq.add(Math.floor(Math.random() * (game_size * game_size)));
            console.log(uniq);
        };
        return uniq;
    }

    const uniq = getSet();

    tb.addEventListener('click', (event) => {
        let data = +event.target.getAttribute('data-num');

        if (uniq.has(data)) {
            event.target.classList.add('highlight');
            uniq.delete(data);
        }
    })

    let gameTime = 10;
    +function countdown() {
        span.textContent = `Отведенное время: ${gameTime} секунд`;
        gameTime--;
        if (gameTime < 0) {
            span.textContent = `Игра завершена`;
            tb.remove();

        } else if (uniq.size == 0) {
            span.textContent = `Вы выиграли!`;
            tb.remove();
        }
        else {
            timer = setTimeout(countdown, 1000);
        }
    }();
}