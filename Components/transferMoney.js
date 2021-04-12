const transferMoney = (banks, bestBank) => {
    for(let bank of banks) {
        if(bank !== bestBank){
            bestBank.kapital += Math.round(((bank.kapital * 0.5 - (bank.kapital * 0.5 * (bank.prowizja / 100))) + Number.EPSILON) * 100) / 100
            bestBank.entryValue += Math.round(((bank.kapital * 0.5 - (bank.kapital * 0.5 * (bank.prowizja / 100))) + Number.EPSILON) * 100) / 100
            bank.kapital = Math.round(((bank.kapital * 0.5) + Number.EPSILON) * 100) / 100
            bank.entryValue = Math.round(((bank.kapital * 0.5) + Number.EPSILON) * 100) / 100
        }
    }
}

export default transferMoney;