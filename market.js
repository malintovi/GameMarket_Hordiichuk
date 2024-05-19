let itemsArray = [
    {
firstName: "Biіталій",
lastName: "Шатківський",
age: 43,
subject: "CS",
photo:"https://lyceum.ztu.rdu.ua/wp-content/uploads/2823/03/dsc07815-683x1024.jpg",
 url: "https://lyceum.ztu.edu.us/team/shatkivskyy-v-m/",
},
{
firstName: "Наталія",
lastName: "Вeнце",
age: 18,
subject: "Адміністратор",
photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2025/04/ventsel-nataliva-vasylivna-683x1024.jpg",
 url: "https://lyceum.ztu.edu.ua/team/ventsel niv/",

},
{
firstName: "Наталія",
lastName: "Кучер",
age: 18,
subject: "Фізика",
photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2823/04/kucher nataliya viktorivna-683x1024.jpg",
url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
}
]
// Отримання елементу з ідентифікатором Items
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку
if (itemsDiv) {
//Створення блоків по кількості елементів масиву
itemsArray
//Сортуванен за прізвищем
//.sort((a, b) a.lastNome.localeCompare(b.lastName))
    .forEach((item, index) =>{
//Виводимо на веб сторінку елемент масиву в блок з класом item
itemsDiv.innerHTML +=
    `
        
        <div class="item">
        <h2>Вчитель № ${index +1} з ${itemsArray.length}</h2>
        <p>${item.firstName} ${item.lastName}</p>
        <p>Предмет: ${item.subject}</p>
        <p><img src= "${item.photo}" class = "item-image"></p>
        
        </div>


    `
    })
}
else{

}