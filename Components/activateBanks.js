const activateBanks = (banks, oprocentowania) => {
    for(let i of banks){
        setInterval(() => {
            i.kapital += Math.round(((i.kapital * (i.oprocentowanie / 100)) + Number.EPSILON) * 100) / 100
            i.oprocentowanie = Math.round(((Math.random() * 5) + Number.EPSILON) * 100) / 100
            oprocentowania[i.nazwa] = i.oprocentowanie;
        }, (i.cykl * 1000));
    }
}

export default activateBanks;