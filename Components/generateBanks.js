const generateBanks = (amount) => {
    let banks = [];
    let oprocentowania = [];

    for(let i = 0; i < amount; i++){
        let bank = {
            nazwa: i,
            cykl: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
            prowizja: Math.floor(Math.random() * (15 - 1 + 1)) + 1,
            oprocentowanie: Math.round(((Math.random() * 5) + Number.EPSILON) * 100) / 100,
            kapital: 15000,
            entryValue: 15000
        }
        banks.push(bank);
        oprocentowania.push(bank.oprocentowanie);
    }

    return [banks, oprocentowania];
}

export default generateBanks;