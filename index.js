import generateBanks from './Components/generateBanks.js';
import activateBanks from './Components/activateBanks.js';
import transferMoney from './Components/transferMoney.js';

const htmlValuesOutput = document.getElementById('values')

let amountOfBanks = 5

let [initialBanks, oprocentowania] = generateBanks(amountOfBanks);
activateBanks(initialBanks, oprocentowania);
let startingValue = initialBanks.reduce((a, b) => a + b.kapital, 0);

setInterval(() => {
    let transferBanks = [];
    let bestBank = initialBanks[oprocentowania.indexOf(Math.max(...oprocentowania))];
    transferBanks.push(bestBank);

    for(let i of initialBanks){
        if(i !== bestBank){
            if(i.entryValue < (i.kapital - (i.kapital * (i.prowizja / 100)))){
                transferBanks.push(i)
            }
        }
    }

    if(transferBanks.length > 1) {
        transferMoney(transferBanks, bestBank);
    }
}, 5000);

setInterval(() => {
    let totalValue = initialBanks.reduce((a, b) => a + b.kapital, 0);
    htmlValuesOutput.innerHTML = `
    <div>
        <p>Początkowo Twój kapitał wynosił ${startingValue} zł</p>
        <p>W sumie Twój kapitał wynosi: ${totalValue.toFixed(2)} zł</p>
    </div>
    <div>
        <p>Poszczególny kapitał w bankach:</p>
        ${initialBanks.map((bank) => {
            return `<p>W banku numer ${bank.nazwa} posiadasz ${bank.kapital.toFixed(2)} zł</p>`
        }).join('')}
    </div>
    `
}, 60000);