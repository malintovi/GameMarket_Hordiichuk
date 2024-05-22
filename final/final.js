// // Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')

//Визначення масиву товарів
// let itemsArray = [
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газонокосарка 44',
//     'Електричний тример 111',
//     'Електрична газонокосарка 33',
//     'Акумуляторний оприскувач 13 N',
//     'Газонокосарка 45',
//     'Електричний тример 112',
//     'Електрична газонокосарка 34',
//     'Акумуляторний оприскувач 14 N',
//     // 'Газонокосарка 430',
//     // 'Електричний тример 130',
//     // 'Електрична газонокосарка 320',
//     // 'Акумуляторний оприскувач 12 E',
// ]

// let itemsArray = [
//     {
//         firstName: "Віталій",
//         lastName: "Шатківський",
//         age: 43,
//         subject: "Інформатика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//         email: "pzs_shvm@ztu.edu.ua",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Венцель",
//         age: 18,
//         subject: "Директор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//         email: "n.ventsel@ukr.net",
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Кучер",
//         age: 18,
//         subject: "Фізика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg", 
//         url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
//         email: "lic_knv@ztu.edu.ua",
//     },
//     {
//         firstName: "Анжела",
//         lastName: "Лознюк",
//         age: 18,
//         subject: "Українська мова, література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
//         email: "lic_lal@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Боровська-Карандюк",
//         age: 18,
//         subject: "Українська мова, література, зарубіжна література",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
//         email: "lic_bia@ztu.edu.ua",
//     },
//     {
//         firstName: "Василь",
//         lastName: "Бабій",
//         age: 18,
//         subject: "Фізична культура",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
//         email: "lic_bvd@ztu.edu.ua",
//     },
//     {
//         firstName: "Тарас",
//         lastName: "Савінков",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//         email: "lic_ste@ztu.edu.ua",
//     },
//     {
//         firstName: "Вікторія",
//         lastName: "Нелипович",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//         email: "lic_nvv@ztu.edu.ua",
//     },
//     {
//         firstName: "Іван",
//         lastName: "Севрук",
//         age: 18,
//         subject: "Захист України",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/sevruk-i-h/",
//         email: "lic_sih@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Чугунова",
//         age: 18,
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/chuhunova-o-v/",
//         email: "lic_chov@ztu.edu.ua",
//     },
//     {
//         firstName: "Олена",
//         lastName: "Геча",
//         age: 18,
//         subject: "Історія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//         email: "lic_hoa@ztu.edu.ua",
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Глібко",
//         age: 18,
//         subject: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
//         email: "lic_gia@ztu.edu.ua",
//     },
// ]

let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "img-market/1.png",
        mono: 6,
        pb: 8,
        price_standart: 5499,
        price_discount: 4497,
        price_coupon: 4395,
    },
    {
        title: "Електричний тример 110",
        image: "img-market/2.webp",
        mono: 6,
        pb: 8,
        price_standart: 4497,
        price_discount: 3498,
        price_coupon: 3396,
    },
    {
        title: "Електрична газонокосарка 32",
        image: "img-market/3.webp",
        mono: 6,
        pb: 8,
        price_standart: 4497,
        price_discount: 3297,
        price_coupon: 3195,
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        image: "img-market/4.webp",
        mono: 6,
        pb: 8,
        price_standart: 2190,
        price_discount: 1698,
        price_coupon: 1596,
    }
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {

    itemsArray.forEach((item, index) => {

        itemsDiv.innerHTML += 

        `
        <div class="item">

                <!-- Блок назва товару -->
                <div class="item-title">${item.title}</div>

                <!-- Блок зображення товару -->
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>

                <!-- Блок з оплатою частинами -->
                <div class="parts-pay">
                    <div> <img src="img-market/mono-lapka.png" alt="">${item.mono}</div>
                    <div> <img src="img-market/pb.png" alt="">${item.pb}</div>
                </div>

                <!-- Блок ціни -->
                <div class="price">
                    <div> <span>${item.price_standart} </span><sup>грн</sup></div>
                    <div> <span>${item.price_discount} </span><sup>грн</sup></div>
                </div>

                <!-- Блок бонусної ціни -->
                <div class="price bonus">
                    <div>ціна за купоном</div>
                    <div><span>${item.price_coupon} </span><sup>грн</sup></div>
                </div>
            </div>
        `
    })
} else {
    console.log('Блок товарів не знайдено')
}
