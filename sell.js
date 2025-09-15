function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        img: decodeURIComponent(params.get("img") || ""),
        currency: decodeURIComponent(params.get("currency") || ""),
        balance: decodeURIComponent(params.get("balance") || ""),
        sellrate: decodeURIComponent(params.get("sellrate") || ""),
        idrbalance : decodeURIComponent(params.get('idrbalance') || "")
    };
}
window.onload = function(){
    const {img, currency, balance, sellrate, idrbalance} = getQueryParams();
    if(img && currency && balance && sellrate && idrbalance){
        document.getElementById('currency-name-title-sell').innerText = currency;
        document.getElementById('currency-name-balance-sell').innerText = currency;
        document.getElementById('currency-name-rate3').innerText = currency;
        document.getElementById('currency-name-rate4').innerText = currency;
        document.getElementById('currency-img-sell').src = img;
        document.getElementById('detail-currency-balance-sell').innerText = balance;
        //document.getElementById('currency-detail-name-buy').innerText = detail;
        document.getElementById('sell-rate').innerText = sellrate;
        document.getElementById('idr-balance').innerText = idrbalance
    }
    document.getElementById('sell-input').addEventListener('input', SellCalc);
}

function SellCalc() {
    var sellinput = parseFloat(document.getElementById('sell-input').value.replace(/,/g, '')) || 0;
    var rate = parseFloat(document.getElementById('sell-rate').innerText.replace(/,/g, '')) || 0;
    var res = sellinput * rate;
    document.getElementById('sell-output').value = res.toFixed(2);
}



function SellPurchase(currencyCode) {
    const sellinput = parseFloat(document.getElementById('sell-input').value) || 0;
    const sellrate = parseFloat(document.getElementById('sell-rate').innerText) || 0;
    const sellAmount = sellinput * sellrate;


    let balances = loadBalancesFromStorage();
    if(sellinput <= 0){
        return
    }
    if (sellinput > balances[currencyCode.toLowerCase()]) {
        alert("Insufficient Fund!");
        return;
    }
    
    balances.total -= sellAmount
    balances.idr += sellAmount;
    balances[currencyCode.toLowerCase()] = (balances[currencyCode.toLowerCase()] || 0) - sellinput;
    console.log(sellAmount)
    console.log(balances.total)

    saveBalancesToStorage(balances);
    alert(`Payment Success!`);
    window.location.href = './WalletPage.html';
}
