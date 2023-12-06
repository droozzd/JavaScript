const date = new Date();
const list = document.querySelector("#list")


const renderCalendar = () => {

    let currentDay = date.getDate();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();

    const lastDay = new Date(currentYear,
        currentMonth + 1, 0).getDate();


    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let info = document.querySelector('.info');
    info.innerHTML = months[currentMonth] + ', ' + currentYear;

    let days = '';
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<li class="marker">${i}</li>`;
        } else {
            days += `<li>${i}</li>`;
            list.innerHTML = days;
        }
    }

};

function removeList() {
    let ul = document.querySelectorAll('#list li');
    for (let li of ul) {
        list.removeChild(li);
    }
}

document.querySelector(".left").addEventListener("click", () => {
    removeList();
    date.setMonth(date.getMonth() - 1);
    renderCalendar();

});

document.querySelector(".right").addEventListener("click", () => {
    removeList();
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();