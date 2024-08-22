  
function loanCalculator(){
    const loanAmount = document.getElementById('amount').value;
const interest = document.getElementById('interest').value;
const months = document.getElementById('months').value;
const result = document.getElementById('result');

const monthlyPayment =  ((Number(loanAmount) * Number(interest / 100)) + Number(loanAmount))  / Number(months)


result.textContent = `Monthly payment: $${monthlyPayment.toFixed(2)}`
}
