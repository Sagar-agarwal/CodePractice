const calc = document.querySelector('#calculate').addEventListener('click', runCalculations);

// Calculations event function
function runCalculations (e){
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalPayment = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Calculation formulas
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFloat(2);
        totalPayment.value = (monthly * calculatedPayments).toFloat(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFloat(2); 
    }
    else {
        showError();
    }


    e.preventDefault();
};

// Error function
function showError (){
    const msg = 'Check your values';

    const card = document.querySelector('.card');
    const heading = document.querySelector('.card-title');

    // Create error element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(msg));

    card.insertBefore(errorDiv, heading);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
};