const title = document.querySelector('.title');
const img = document.querySelector('.car-image');
const price = document.querySelector('.price');
const btnRent = document.getElementById('btn-rent');

const cars = [{
        id: 1,
        image: 'images/Peugeot-Pars-2.webp',
        price: 1620000,
        title: 'peugeot pars'
    },
    {
        id: 2,
        image: 'images/irankhodro-runna-2.webp',
        price: 1420000,
        title: 'runna plus'
    },
    {
        id: 3,
        image: 'images/peugeot-206-2.webp',
        price: 1620000,
        title: 'peugeot 206'
    }, {
        id: 4,
        image: 'images/peogeot-207-sample.webp',
        price: 2290000,
        title: 'peugeot 207i'
    }, {
        id: 5,
        image: 'images/arizo5-2.webp',
        price: 2290000,
        title: 'mvm arrizo5'
    }, {
        id: 6,
        image: 'images/kia-cerato-webp.webp',
        price: 2290000,
        title: 'kia cerato'
    }, {
        id: 7,
        image: 'images/hyundai-elantra-2016.jpg',
        price: 2260000,
        title: 'hyundai elantra'
    }, {
        id: 8,
        image: 'images/arizo-6-2.webp',
        price: 2600000,
        title: 'mvm arrizo6'
    }, {
        id: 9,
        image: 'images/arizo-6-2.webp',
        price: 2500000,
        title: 'arrizo6'
    }, {
        id: 10,
        image: 'images/fownix-tiggo-8-2024.webp',
        price: 4050000,
        title: 'fownix tiggo8'
    }, {
        id: 11,
        image: 'images/bmw-730-2018.webp',
        price: 17500000,
        title: 'bmw 730'
    }, {
        id: 12,
        image: 'images/benz-s500-2.webp',
        price: 13500000,
        title: 'benz s500'
    }, {
        id: 13,
        image: 'images/nissan-terra2-2024.webp',
        price: 5990000,
        title: 'nissan terra'
    }, {
        id: 14,
        image: 'images/lamari-2023-2.webp',
        price: 3500000,
        title: 'lamari sx5g'
    }, {
        id: 15,
        image: 'images/toyota-lancruser-2.webp',
        price: 13950000,
        title: 'toyota landcruiser'
    }
];



const locatinParams = new URLSearchParams(location.search);

const mainProductId = locatinParams.get('id');
console.log(mainProductId);


const mainObject = cars.find((car) => {
    return car.id === Number(mainProductId);
});


console.log(mainObject);

if (mainObject) {
    title.innerHTML = mainObject.title;
    price.innerHTML = mainObject.price;
    img.setAttribute('src', mainObject.image);
    btnRent.href = `reservation.html?id=${mainObject.id}&price=${mainObject.price}`;
} else {
    location.href = 'http://127.0.0.1:5500/index.html';
}