//устаревший метод
const res1 = document.getElementsByTagName("button")
console.log(res1);
// также можно искать по классу и  id

//современый метод
const res2 = document.querySelectorAll(".button");
console.log(res2);
// также можно искать по классу и  id
//# - id, . -класс

// также можно искать по атрибуту
const res3 = document.querySelector('[placeholder="Посмотреть урок по JavaScript"]')
console.log(res3);


//# - id, . -класс

//изменить класс, id
//res2.className = "new_2"
//res2.id = "new_2"

//изменить контент, HTML
//res2[0].textContent= "123"
//res2[0].innerText= "123" 
//res2[0].innerHTML= "123"


res4 = document.querySelectorAll('body')[0]
//console.log(res4.innetHTML)
//res4.innerHTML = "<h1> Замена подъехала </h1>"
console.log(res4.children);

//data-атрибуты data-main-id -> .mainID
console.log(res4.dataset);

//изменение свойств cтиля  font-size -> .fontSize
//res2[2].style.fontSize = '10px'

const navigation = document.querySelector('.navigator')
const newAnchor = document.createElement('a')
newAnchor.textContent = "Просроченные задачи"
//newAnchor.style.color = 'rgb(1000, 500, 0)'

//методы добавления 
navigation.append(newAnchor) // в конец
//navigation.prepend(newAnchor) // в начало

//navigation.insertAdjacentElement('beforebegin',newAnchor)

//удаление
//navigation.remove()

//closest- поиск родителя 
console.log( navigation.closest('header') )

//classList: add, remove, tongle ( если нет класса добавляет, если есть удаляет )
navigation.classList.remove('navigator')
navigation.classList.add('navigator')
navigation.classList.toggle('navigator')
navigation.classList.toggle('navigator')


// проврека наличия атрибута, получение значения, удаление, установка нового атрибута 
console.log( res3.hasAttribute('placeholder')); //bool
console.log( res3.getAttribute('placeholder'));
res3.removeAttribute('placeholder')
res3.setAttribute('placeholder' , "123")
