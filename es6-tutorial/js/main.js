let calculateMonthlyAmmortization = (principal, years, rate) => {
    let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];

    for(let y=0; y<years; y++)
    {
        let interestY = 0;
        let principalY = 0;
        for(let m=0;m<12;m++)
        {
            let interestM = balance * monthlyRate;
            let principalM = monthlyPayment - interestM;
            interestY = interestY + principalM;
            balance = balance - principalM;
        }
        amortization.push({principalY, interestY, balance})
    }
    return {monthlyPayment, monthlyRate, amortization};
}


let calculateMonthlyPayment = (principal, years, rate) => {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return { principal: principal, years: years, rate: rate, monthlyPayment: monthlyPayment, monthlyRate: monthlyRate };
};

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let { monthlyPayment, monthlyRate, amortization } = calculateMonthlyAmmortization(principal, years, rate);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    amortization.forEach(month => console.log(month));
});