function fetchBitcoinPrice() {

    const bitcoin = document.querySelector("#price-bitcoin");

    fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    .then(data => data.json())
    .then(data => {
        const price = new Number(data.ticker.last);
        bitcoin.textContent = formatCurrency(price);
    });
}

function fetchLitecoinPrice() {

    const litecoin = document.querySelector("#price-litecoin");

    fetch('https://www.mercadobitcoin.net/api/LTC/ticker/')
    .then(data => data.json())
    .then(data => {
        const price = new Number(data.ticker.last);
        litecoin.textContent = formatCurrency(price);
    });
}

function fetchEuthereumPrice() {

    const euthereum = document.querySelector("#price-euthereum");

    fetch('https://www.mercadobitcoin.net/api/ETH/ticker/')
    .then(data => data.json())
    .then(data => {
        const price = new Number(data.ticker.last);
        euthereum.textContent = formatCurrency(price);
    });
}

function fetchDogecoinPrice() {

    const dogecoin = document.querySelector("#price-dogecoin");

    fetch('https://www.mercadobitcoin.net/api/DOGE/ticker/')
    .then(data => data.json())
    .then(data => {
        const price = new Number(data.ticker.last);
        dogecoin.textContent = formatCurrency(price);
    });
}

function formatCurrency(value){
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function loadCryptocurrencyPrices(){
    setInterval(function () {
        fetchBitcoinPrice();
        fetchLitecoinPrice();
        fetchEuthereumPrice();
        fetchDogecoinPrice();
    }, 5000);
}