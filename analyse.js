
const textArea = document.querySelector('.textarea');
// const textAreaH = textArea.offsetHeight;
let str;
let wordCount = document.getElementById('wordCount');
let symbolCount = document.getElementById('symbolCount');
let letterCount = document.getElementById('letterCount');
let percent = document.getElementById('percent');
let check = document.querySelectorAll('input[type="checkbox"]');

// textArea.addEventListener('input', event => {
//     //для авторесайза текстареа
//     let $this = event.target;
//     $this.style.height = textAreaH + 'px';
//     $this.style.height = $this.scrollHeight + "px";
// })

check.forEach(item => {
    item.addEventListener('click', (e) => {
        str = textArea.value.trim();
        let itemId = e.target.id;
        switch (itemId) {
            case '1':
                item.checked ? showCountWords() : wordCount.innerHTML = "";
                break;
            case '2':
                item.checked ? showCountSymbols() : symbolCount.textContent = "";
                break;
            case '3':
                item.checked ? showCountSymbWithoutSpace() : letterCount.textContent = "";
                break;
            case '4':
                item.checked ? showSymbolPercent() : percent.innerHTML = "";
                break;
        }

    })
})

function showCountWords() {
    wordCount.innerHTML = `Количество слов в тексте: ${str.split(' ').length}`;
}

function showCountSymbols() {
    symbolCount.textContent = `Количество символов в тексте: ${str.length}`;
}

function showCountSymbWithoutSpace() {
    let strWithoutSpace = str.replace(/\s/g, '');
    letterCount.textContent = `Количество символов исключая пробелы: ${strWithoutSpace.length}`;
}

function showSymbolPercent() {
    let onePercent = Math.floor(100 / str.length);
    let obj = [...str].reduce(
        (total, amount) => ({ ...total, [amount]: !total[amount] ? onePercent : total[amount] + onePercent }), {}
    );
    percent.innerHTML = `<table class = "tb"><td>Символ</td><td>Процентное содержание (%)</td></table>`;

    for (key in obj) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${obj[key]}</td>`;
        document.querySelector('.tb').appendChild(row);
    }
}

