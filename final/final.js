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
/*     {
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
    }*/
    
    
        {
          email: "23b_bvo@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Башинська Вікторія",
          subject: "Dudi 3",
          phaserGameGithub: "https://github.com/ViktoriaBashinska/Phaser2stGame",
          phaserGameLiveDemo: "https://viktoriabashinska.github.io/Phaser2stGame/",
          googleDrive: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
          googleForm: "https://forms.gle/jHMQsybKdMdUHXKA7",
          gameMarketGithub: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
          gameMarketLiveDemo: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
          gameMarketPage: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
          gameMarketFinalPage: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE",
          imgGame: "https://viktoriabashinska.github.io/Phaser2stGame/assets/game_image.png"
        },
        {
          email: "23b_bdo@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Біденко Дмитро",
          subject: "виживання проти зомбаря",
          phaserGameGithub: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
          phaserGameLiveDemo: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
          googleDrive: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
          googleForm: "https://forms.gle/RDawcnD98QcHnRZw7",
          gameMarketGithub: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
          gameMarketLiveDemo: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
          gameMarketPage: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
          gameMarketFinalPage: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-",
          imgGame: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_bmv@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Бовсуновського Максима",
          subject: "дота 2",
          phaserGameGithub: "https://github.com/maksbovs/Phaser2ndGame",
          phaserGameLiveDemo: "https://maksbovs.github.io/Phaser2ndGame/",
          googleDrive: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
          googleForm: "https://forms.gle/G2WLe25CYPCQjowTA",
          gameMarketGithub: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
          gameMarketLiveDemo: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
          gameMarketPage: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
          gameMarketFinalPage: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1",
          imgGame: "https://maksbovs.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_vvi@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Волинець Владислав",
          subject: "Пес Патрон на завданні",
          phaserGameGithub: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
          phaserGameLiveDemo: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
          googleDrive: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
          googleForm: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
          gameMarketGithub: "https://github.com/volynets-vlad/GameMarket_Volynets",
          gameMarketLiveDemo: "https://volynets-vlad.github.io/GameMarket_Volynets/",
          gameMarketPage: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
          gameMarketFinalPage: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy",
          imgGame: "https://volynets-vlad.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_gas@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Галетко Артем",
          phaserGameGithub: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
          phaserGameLiveDemo: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
          googleDrive: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
          googleForm: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
          gameMarketGithub: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
          gameMarketLiveDemo: "https://artem4ikgaletko.github.io/GameMarket_Haletko/",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL",
          imgGame: "https://artem4ikgaletko.github.io/phaserSec2ndgame/assets/game_image.png"
        },
        {
          email: "23b_gbs@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Гордійчук Богдан",
          subject: "Zhytomur squad Snyok",
          phaserGameGithub: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
          phaserGameLiveDemo: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
          googleDrive: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
          googleForm: "https://forms.gle/VaDXCem7gVuEvumQ9",
          gameMarketGithub: "https://github.com/malintovi/GameMarket_Hordiichuk",
          gameMarketLiveDemo: "https://malintovi.github.io/GameMarket_Hordiichuk/",
          gameMarketPage: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
          gameMarketFinalPage: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl",
          imgGame: "https://malintovi.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_gai@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Гуменюк Олег",
          subject: "mini metroidvania",
          phaserGameGithub: "https://github.com/OlegGumenuk/Phaser2ndGame",
          phaserGameLiveDemo: "https://oleggumenuk.github.io/Phaser2ndGame/",
          googleDrive: "https://drive.google.com/drive/folders/1CB-FtXEamf_KSTkB1v4evCm_xg4lvVmv?usp=sharing",
          googleForm: "https://forms.gle/XthBgBKeV1zJSSNx7",
          gameMarketGithub: "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
          gameMarketLiveDemo: "https://oleggumenuk.github.io/GameMarket_Gumenuk/",
          gameMarketPage: "https://oleggumenuk.github.io/GameMarket_Gumenuk/market.html?authuser=0",
          gameMarketFinalPage: "https://oleggumenuk.github.io/GameMarket_Gumenuk/final/final.html?authuser=0",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1CB-FtXEamf_KSTkB1v4evCm_xg4lvVmv",
          imgGame: "https://oleggumenuk.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_dis@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Дєдух Ілля",
          subject: "kozak_battleground",
          phaserGameGithub: "https://github.com/Dyeduh/Phaser2ndGame",
          phaserGameLiveDemo: "https://dyeduh.github.io/Phaser2ndGame/",
          googleDrive: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
          googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
          gameMarketGithub: "https://github.com/Dyeduh/GameMarket_Dyeduh",
          gameMarketLiveDemo: "https://dyeduh.github.io/GameMarket_Dyeduh/",
          gameMarketPage: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
          gameMarketFinalPage: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy",
          imgGame: "https://dyeduh.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_dao@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Дідківській Андрій",
          subject: "Баобаб",
          phaserGameGithub: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
          phaserGameLiveDemo: "https://andriydidkivskij.github.io/Phaser2ndGame/",
          googleDrive: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
          googleForm: "https://forms.gle/WNDGSsahKLzHH7LW7",
          gameMarketGithub: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
          gameMarketLiveDemo: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
          gameMarketPage: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
          gameMarketFinalPage: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
          imgGame: "https://andriydidkivskij.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_zbv@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Заєць Богдан",
          phaserGameGithub: "https://github.com/niccer5/Phaser1stGame",
          phaserGameLiveDemo: "https://niccer5.github.io/Phaser1stGame/",
          googleDrive: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
          googleForm: "https://forms.gle/EcWrBsp6jhMA78Kd9",
          gameMarketGithub: "https://github.com/niccer5/-GameMarket_Zayets",
          gameMarketLiveDemo: "https://niccer5.github.io/-GameMarket_Zayets/",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
          imgGame: "https://niccer5.github.io/Phaser1stGame/assets/game_image.png"
        },
        {
          email: "23b_kav@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Кравчук Андрій",
          phaserGameGithub: "https://github.com/yawty1",
          phaserGameLiveDemo: "https://yawty1.github.io/Phaser2ndGame1/",
          googleDrive: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
          googleForm: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
          gameMarketGithub: "https://github.com/yawty1/GameMarket_Kravchuk",
          gameMarketLiveDemo: "https://yawty1.github.io/GameMarket_Kravchuk/",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea",
          imgGame: "https://yawty1.github.io/Phaser2ndGame1/assets/game_image.png"
        },
        {
          email: "23b_kmv@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Кучер Максим",
          subject: "Jfr",
          phaserGameGithub: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
          phaserGameLiveDemo: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
          googleDrive: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
          googleForm: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
          gameMarketGithub: "https://github.com/KucherMaks/GameMarket_Kucher",
          gameMarketLiveDemo: "https://kuchermaks.github.io/GameMarket_Kucher/",
          gameMarketPage: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
          gameMarketFinalPage: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1OGZCkFefm150MhQfef1UEbgJImuC4diT",
          imgGame: "https://kuchermaks.github.io/Phaser2ndGame/assets/game_image.png"
        },
        {
          email: "23b_lkm@liceum.ztu.edu.ua",
          class: "10-Б 1",
          name: "Лавренко Каріна",
          subject: "Dudi 2",
          phaserGameGithub: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
          phaserGameLiveDemo: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
          googleDrive: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
          googleForm: "https://forms.gle/XbBbVb7cL5RAkLBY8",
          gameMarketGithub: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko",
          gameMarketLiveDemo: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
          imgAuthor: "https://drive.google.com/uc?export=view&id=1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9",
          imgGame: "https://karinalavrenko.github.io/Phaser2stGame/assets/game_image.png"
        },
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
