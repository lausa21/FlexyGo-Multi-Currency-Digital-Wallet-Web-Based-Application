function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        img: decodeURIComponent(params.get("img") || ""),
        currency: decodeURIComponent(params.get("currency") || ""),
        balance: decodeURIComponent(params.get("balance") || ""),
        detail: decodeURIComponent(params.get("detail") || ""),
        buyrate: decodeURIComponent(params.get('buyrate') || ""),
        sellrate: decodeURIComponent(params.get('sellrate') || ""),
        idrbalance: decodeURIComponent(params.get('idrbalance') || "")
    };
}
window.onload = function(){
    const {img, currency, balance, detail, buyrate, sellrate, idrbalance} = getQueryParams();
    if(img && currency && balance && detail && buyrate &&sellrate && idrbalance){
        document.getElementById('currency-name-title').innerText = currency;
        document.getElementById('currency-name-balance').innerText = currency;
        document.getElementById('currency-img').src = img;
        document.getElementById('detail-currency-balance').innerText = balance;
        document.getElementById('currency-detail-name').innerText = detail;
        document.getElementById('buy-rate').innerText = buyrate
        document.getElementById('idr-balance').innerText = idrbalance
        document.getElementById('sell-rate').innerText = sellrate
        document.getElementById('sell-rate2').innerText = sellrate
    }
}