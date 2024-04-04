const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectMoedas = document.querySelector(".select-moedas")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value


    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // REAL
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const realToday = 1
    const dolarToday = 5
    const euroToday = 7
    const libraToday = 6.5
    const bitcoinToday = 350.000

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "dolar" && selectMoedas.value == "real-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (selectMoedas.value == "dolar-1" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelect.value == "euro" && selectMoedas.value == "real-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectMoedas.value == "euro-1" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelect.value == "libra" && selectMoedas.value == "real-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (selectMoedas.value == "libra-1" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelect.value == "bitcoin" && selectMoedas.value == "real-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (selectMoedas.value == "net" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }
    if (selectMoedas.value == "real-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (selectMoedas.value == "dolar-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (selectMoedas.value == "euro-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (selectMoedas.value == "libra-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (selectMoedas.value == "net") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar" && selectMoedas.value == "dolar-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue)
    }


    if (currencySelect.value == "euro" && selectMoedas.value == "euro-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "libra" && selectMoedas.value == "libra-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "bitcoin" && selectMoedas.value == "net") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar" && selectMoedas.value == "euro-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue * 1.08)
    }

    if (currencySelect.value == "euro" && selectMoedas.value == "dolar-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue * 0.93)
    }

    if (currencySelect.value == "dolar" && selectMoedas.value == "libra-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue * 1.26)
    }

    if (currencySelect.value == "libra" && selectMoedas.value == "dolar-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue * 0.80)
    }

    if (currencySelect.value == "dolar" && selectMoedas.value == "net") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue * 65659)
    }

    if (currencySelect.value == "bitcoin" && selectMoedas.value == "dolar-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue * 0.000015)
    }

    if (currencySelect.value == "libra" && selectMoedas.value == "euro-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue * 0.86)
    }

    if (currencySelect.value == "euro" && selectMoedas.value == "libra-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue * 1.17)
    }

    if (currencySelect.value == "bitcoin" && selectMoedas.value == "euro-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue * 0.000017)
    }

    if (currencySelect.value == "euro" && selectMoedas.value == "net") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue * 60595)
    }

    if (currencySelect.value == "bitcoin" && selectMoedas.value == "libra-1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue * 0.000019)
    }


    if (currencySelect.value == "libra" && selectMoedas.value == "net") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue * 51898)
    }




}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/real.png"
    }



    convertValues()

}

function changeMoedas() {

    const moedasName = document.getElementById("moedas-name")
    const moedasImage = document.querySelector(".moedas-img")


    if (selectMoedas.value == "real-1") {
        moedasName.innerHTML = "Real brasileiro"
        moedasImage.src = "./assets/real.png"
    }

    if (selectMoedas.value == "dolar-1") {
        moedasName.innerHTML = "Dólar Americano"
        moedasImage.src = "./assets/dolar.png"
    }

    if (selectMoedas.value == "euro-1") {
        moedasName.innerHTML = "Euro"
        moedasImage.src = "./assets/euro.png"
    }

    if (selectMoedas.value == "libra-1") {
        moedasName.innerHTML = "Libra"
        moedasImage.src = "./assets/libra.png"
    }

    if (selectMoedas.value == "net") {
        moedasName.innerHTML = "bitcoin"
        moedasImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

selectMoedas.addEventListener("change", changeMoedas)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

/*if (selectMoedas.value == "dolar-1") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
       style: "currency", currency: "USD"
   }).format(inputCurrencyValue)
   }*/