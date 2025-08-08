const days = document.getElementById('days');
const price = document.getElementById('price');
const rentBtn = document.getElementById('rent-btn');
const totalCost = document.getElementById('total-cost');
const containerInfo = document.getElementById('container-info');
const rentFinally = document.getElementById('rent-finally');
const firstName = document.getElementById('name');
const family = document.getElementById('family');
const phone = document.getElementById('phone');
const checkbox = document.getElementById('checkbox');
const btnClose = document.querySelector('.close');


const urlParams = new URLSearchParams(location.search);
const carId = parseInt(urlParams.get('id'));
const carPrice = parseInt(urlParams.get('price'));


if (price) {
    price.value = carPrice;
}


days.addEventListener('input', () => {
    const sum = price.value * days.value;
    totalCost.innerHTML = sum + ' تومان';
});




function rentedCar() {
    if (days.value === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'لطفا تعداد روزها را وارد کنید',
            confirmButtonText: 'باشه'
        });
        return;
    }
    containerInfo.style.display = 'block';
}


btnClose.addEventListener('click', () => {
    containerInfo.style.display = 'none';
});

function rentedFinally() {
    if (
        firstName.value.trim() === '' ||
        family.value.trim() === '' ||
        phone.value.trim() === '' ||
        !checkbox.checked
    ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'لطفا تمام اطلاعات را به‌درستی وارد کنید و قوانین را بپذیرید.',
            confirmButtonText: 'باشه'
        });
        return;
    }
    localRentedFinnaly();
}


function localRentedFinnaly() {
    let rentCars = JSON.parse(localStorage.getItem('rentCars')) || [];

    let alreadyAdded = false;
    for (let i = 0; i < rentCars.length; i++) {
        if (rentCars[i] === carId) {
            alreadyAdded = true;
            break;
        }
    }

    if (!alreadyAdded) {
        rentCars.push(carId);
    }

    localStorage.setItem('rentCars', JSON.stringify(rentCars));


    Swal.fire({
        title: 'اطلاعات با موفقیت ثبت شد!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    }).then(() => {
        location.href = 'index.html';
    });
}

rentBtn.addEventListener('click', rentedCar);

rentFinally.addEventListener('click', rentedFinally);