const div = document.createElement('div')
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
// Клонування елемента
const cloneNode = div.cloneNode(true)
// Додавання оригіналу та його клону в body
document.body.append(div, cloneNode)

//------------------------------------------------------------------
// Масив з елементами, які будуть додані в список
let arr = ['Main', 'Product', 'About us', 'Contacts']
// Створення елемента <ul> для меню
const menu = document.createElement('ul')
menu.classList.add('menu')
// Перебір кожного елемента в масиві 'arr'
for (const item of arr) {
    const li = document.createElement('li')
    li.innerText = item
    menu.appendChild(li)
}
// Додавання готового списку <ul> на сторінку в body
document.body.appendChild(menu)

//------------------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Перебір кожного елемента масиву
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `Title: ${course.title}, Duration: ${course.monthDuration} months`;
    document.body.appendChild(div);
}

//------------------------------------------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Перебір кожного елемента масиву
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    // Створення <h1> з класом 'heading' для назви курсу
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = course.title;  // Вставляємо назву курсу

    // Створення <p> з класом 'description' для тривалості курсу
    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${course.monthDuration} months`;  // Вставляємо тривалість курсу

    // Додаємо <h1> і <p> в <div>
    div.appendChild(h1);
    div.appendChild(p);

    // Додаємо <div> на сторінку
    document.body.appendChild(div);
}