let itemsArray = [
    {
firstName: "Biталій",
lastName: "Шатківський",
subject: "CS",
photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
 url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
},
{
firstName: "Наталія",
lastName: "Вeнцель",
subject: "Адміністратор",
photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
 url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",

},
{
firstName: "Наталія",
lastName: "Кучер",
subject: "Фізика",
photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
},
{
    firstName:"Олена",
    lastName:"Геча",
    subject:"Історія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
},
{
    firstName:"Анжела",
    lastName:"Лознюк",
    subject:"Українська мова й література",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
    url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
},
{
    firstName:"Наталія",
    lastName:"Зинюк",
    subject:"Хімія та біологія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
},
{
    firstName:"Лариса",
    lastName:"Олександрівна",
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/zabello-l-o/",
},
{
    firstName:"Ірина",
    lastName:"Глібко",
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
},
{
    firstName:"Ірина",
    lastName:"Боровська-Карандюк",
    subject:"Українська мова й література",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
},
{
    firstName:"Василь",
    lastName:"Бабій",
    subject:"Фізкультура",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
    url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
},
{
    firstName:"Вікторія",
    lastName:"Нелипович",
    subject:"Математика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
},
{
    firstName:"Наталія",
    lastName:"Гончарук",
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
},
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
        <p><a href = "${item.url}" target = "_blank" class = "bonus price">Профіль</a></p>
        <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго дня" target="_blank" class = "priece">Написати</a></p>
        </div>


    `
    })
}
else{
    console.log('Блок товарів не знайдено');
}