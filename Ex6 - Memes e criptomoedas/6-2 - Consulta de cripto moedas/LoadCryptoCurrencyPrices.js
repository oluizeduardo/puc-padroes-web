function fetchBitcoinPrice() {

    let bitcoin = document.querySelector("#price-bitcoin");

    fetch('https://www.mercadobitcoin.net/api/BTC/ticker/')
    .then(data => data.json())
    .then(data => {
        bitcoin.textContent = new Number(data.ticker.last).toFixed(2);
    });
}

function fetchLitecoinPrice() {

    let litecoin = document.querySelector("#price-litecoin");

    fetch('https://www.mercadobitcoin.net/api/LTC/ticker/')
    .then(data => data.json())
    .then(data => {
        litecoin.textContent = new Number(data.ticker.last).toFixed(2);
    });
}

function fetchEuthereumPrice() {

    let euthereum = document.querySelector("#price-euthereum");

    fetch('https://www.mercadobitcoin.net/api/ETH/ticker/')
    .then(data => data.json())
    .then(data => {
        euthereum.textContent = new Number(data.ticker.last).toFixed(2);
    });
}

function fetchDogecoinPrice() {

    let dogecoin = document.querySelector("#price-dogecoin");

    fetch('https://www.mercadobitcoin.net/api/DOGE/ticker/')
    .then(data => data.json())
    .then(data => {
        dogecoin.textContent = new Number(data.ticker.last).toFixed(2);
    });
}

function loadCryptocurrencyPrices(){
    fetchBitcoinPrice();
    fetchLitecoinPrice();
    fetchEuthereumPrice();
    fetchDogecoinPrice();
}