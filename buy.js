function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        img: decodeURIComponent(params.get("img") || ""),
        currency: decodeURIComponent(params.get("currency") || ""),
        balance: decodeURIComponent(params.get("balance") || ""),
        buyrate: decodeURIComponent(params.get("buyrate") || ""),
        sellrate: decodeURIComponent(params.get("sellrate") || ""),
        idrbalance : decodeURIComponent(params.get('idrbalance') || "")
    };
}
window.onload = function(){
    const {img, currency, balance, buyrate, sellrate,idrbalance} = getQueryParams();
    if(img && currency && balance && buyrate && sellrate && idrbalance){
        document.getElementById('currency-name-title-buy').innerText = currency;
        document.getElementById('currency-name-balance-buy').innerText = currency;
        document.getElementById('currency-name-rate').innerText = currency;
        document.getElementById('currency-name-rate2').innerText = currency;
        document.getElementById('currency-img-buy').src = img;
        document.getElementById('detail-currency-balance-buy').innerText = balance;
        //document.getElementById('currency-detail-name-buy').innerText = detail;
        document.getElementById('buy-rate').innerText = buyrate;
        document.getElementById('idr-balance').innerText = idrbalance
        document.getElementById('sell-rate').innerText = sellrate
    }
    document.getElementById('buy-input').addEventListener('input', BuyCalc);
}

function BuyCalc() {
    var buyinput = parseFloat(document.getElementById('buy-input').value.replace(/,/g, '')) || 0;
    var rate = parseFloat(document.getElementById('buy-rate').innerText.replace(/,/g, '')) || 0;
    var res = buyinput / rate;
    document.getElementById('buy-output').value = res.toFixed(2);
}



function BuyPurchase(currencyCode) {
    const buyInput = parseFloat(document.getElementById('buy-input').value) || 0;
    const buyrate = parseFloat(document.getElementById('buy-rate').innerText) || 0;
    const sellrate = parseFloat(document.getElementById('sell-rate').innerText) || 0;
    const buyAmount = parseFloat((buyInput / buyrate).toFixed(2));
    const totalbalance = parseFloat(document.getElementById('total-balance').value) || 0;
    const total = buyAmount*sellrate;

    let balances = loadBalancesFromStorage();
    if(buyInput <= 0){
        return
    }
    if (buyInput > balances.idr) {
        alert("Insufficient Fund!");
        return;
    }
    balances.idr -= buyInput;
    balances.total += total;
    balances[currencyCode.toLowerCase()] = (balances[currencyCode.toLowerCase()] || 0) + buyAmount;
    console.log(buyAmount)
    console.log(total)
    console.log(balances.total)

    saveBalancesToStorage(balances);
    alert(`Payment Success!`);
    window.location.href = './WalletPage.html';
}
