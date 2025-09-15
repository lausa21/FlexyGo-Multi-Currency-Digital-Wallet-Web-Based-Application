// Rates
const buyRates = {
    usd: 16550.0,
    sgd: 12300.0,
    cny: 2325.0,
    eur: 18000.0,
    aud: 10375.0,
    jpy: 115.0,
    gbp: 20800.0,
    hkd: 2115.0,
    thb: 490.0,
    myr: 3700.0
};

const sellRates = {
    usd: 16400.0,
    sgd: 12150.0,
    cny: 2225.0,
    eur: 17800.0,
    aud: 10200.0,
    jpy: 100.0,
    gbp: 20675.0,
    hkd: 2090.0,
    thb: 475.0,
    myr: 3650.0
};

// Initial default balances
const defaultBalances = {
    idr: 500000.0,
    usd: 0.0,
    sgd: 0.0,
    cny: 0.0,
    eur: 0.0,
    aud: 0.0,
    jpy: 0.0,
    gbp: 0.0,
    hkd: 0.0,
    thb: 0.0,
    myr: 0.0,
    total:0.0
};


const bestRates = {
    usd: 16471.0,
    sgd: 12219.0,
    cny: 2272.0,
    eur: 17894.0,
    aud: 10297.0,
    jpy: 108.0,
    gbp: 20726.0,
    hkd: 2103.0,
    thb: 483.0,
    myr: 3686.0
};

function loadBalancesFromStorage() {
    return JSON.parse(localStorage.getItem('balances')) || defaultBalances;
}

function saveBalancesToStorage(balances) {
    console.log('masuk')
    console.log(balances)
    localStorage.setItem('balances', JSON.stringify(balances));
}

function LoadBalance() {
    const balances = loadBalancesFromStorage();
    for (let key in balances) {
        const el = document.getElementById(`${key}-balance`);
        if (el) el.innerHTML = (key === 'idr' || key === 'total') ? '*****' : balances[key].toFixed(2);
    }
}

function LoadBuyRate() {
    for (let key in buyRates) {
        const el = document.getElementById(`${key}-buyrate`);
        if (el) el.innerHTML = buyRates[key].toFixed(2);
    }
}

function LoadSellRate() {
    for (let key in sellRates) {
        const el = document.getElementById(`${key}-sellrate`);
        if (el) el.innerHTML = sellRates[key].toFixed(2);
    }
}

function LoadSelectedRate() {
    for (let key in bestRates) {
        const el = document.getElementById(`${key}-rate`);
        if (el) el.innerHTML = bestRates[key].toFixed(2);
    }
}

function HomeButton() {
    window.location.href = './HomePage.html';
}

function WalletButton() {
    window.location.href = './WalletPage.html';
}

function ConvertButton(){
    window.location.href = './ConvertPage.html';
}
function ShowBalance() {
    const balances = loadBalancesFromStorage();
    const balance = document.getElementById('idr-balance');
    const eyeClosed = document.getElementById('eye-closed');
    const eyeOpened = document.getElementById('eye-opened');
    balance.innerHTML = balances.idr.toFixed(2);
    eyeClosed.style.display = 'none';
    eyeOpened.style.display = 'inline';
}

function HideBalance() {
    const balance = document.getElementById('idr-balance');
    const eyeClosed = document.getElementById('eye-closed');
    const eyeOpened = document.getElementById('eye-opened');
    balance.innerHTML = '*****';
    eyeClosed.style.display = 'inline';
    eyeOpened.style.display = 'none';
}

function ShowBalance2() {
    const balances = loadBalancesFromStorage();
    const balance = document.getElementById('total-balance');
    const eyeClosed = document.getElementById('eye-closed2');
    const eyeOpened = document.getElementById('eye-opened2');
    balance.innerHTML = balances.total.toFixed(2);
    eyeClosed.style.display = 'none';
    eyeOpened.style.display = 'inline';
}

function HideBalance2() {
    const balance = document.getElementById('total-balance');
    const eyeClosed = document.getElementById('eye-closed2');
    const eyeOpened = document.getElementById('eye-opened2');
    balance.innerHTML = '*****';
    eyeClosed.style.display = 'inline';
    eyeOpened.style.display = 'none';
}

function TransactionPageButton(img, currency, balance, detail, buyrate, sellrate) {
    const balances = loadBalancesFromStorage();
    const url = `./TransactionPage.html?img=${encodeURIComponent(img)}&currency=${encodeURIComponent(currency)}&balance=${encodeURIComponent(balance)}&detail=${encodeURIComponent(detail)}&buyrate=${encodeURIComponent(buyrate)}&sellrate=${encodeURIComponent(sellrate)}&idrbalance=${encodeURIComponent(balances.idr)}`;
    window.location.href = url;
}

function BuyButton(img, currency, balance, buyrate, sellrate) {
    const balances = loadBalancesFromStorage();
    const url = `./BuyPage.html?img=${encodeURIComponent(img)}&currency=${encodeURIComponent(currency)}&balance=${encodeURIComponent(balance)}&buyrate=${encodeURIComponent(buyrate)}&sellrate=${encodeURIComponent(sellrate)}&idrbalance=${encodeURIComponent(balances.idr)}`;
    window.location.href = url;
}

function SellButton(img, currency, balance, sellrate) {
    const balances = loadBalancesFromStorage();
    const url = `./SellPage.html?img=${encodeURIComponent(img)}&currency=${encodeURIComponent(currency)}&balance=${encodeURIComponent(balance)}&sellrate=${encodeURIComponent(sellrate)}&idrbalance=${encodeURIComponent(balances.idr)}`;
    window.location.href = url;
}

function ProfileButton(){
    window.location.href = './ProfilePage.html'
}
function TopupButton(){
    window.location.href = './TopUpPage.html'
}

function TutorialButton(){
    window.location.href = 'https://www.youtube.com/watch?v=XHC6QNVrh2E'
}

function Logout(){
    window.location.href = './first-page.html'
}

function VerifyPayment(){
    const buy = parseFloat(document.getElementById('buy-input').value)
    let balances = loadBalancesFromStorage();
    balances.idr += buy
    saveBalancesToStorage(balances);
    alert(`Payment Verified!`);
    window.location.href = './HomePage.html';
}

window.onload = function () {
    //localStorage.clear();
    LoadBalance();
    LoadBuyRate();
    LoadSellRate();
    LoadSelectedRate()
};


