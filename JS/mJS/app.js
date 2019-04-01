document.querySelector('#button-customer').addEventListener('click', getCustomer);
document.querySelector('#button-customers').addEventListener('click', getCustomers);

function getTD (tdData) {
    const td = document.createElement('td');
    td.innerText = tdData;
    return td;
};

function addCustomerData (resObj, parentTable){
    
    // resObj.forEach(function (customer){
    //     const tr = document.createElement('tr');
    //     tr.appendChild(getTD(customer.id));
    //     tr.appendChild(getTD(customer.name));
    //     tr.appendChild(getTD(customer.company));

    //     parentTable.appendChild(tr);
    // });


    let tBody = document.createElement('tbody'); 
    for (let index = 0; index < resObj.length; index++) {
        const element = resObj[index];

        let tr = document.createElement('tr');
        tr.appendChild(getTD(element.id));
        tr.appendChild(getTD(element.name));
        tr.appendChild(getTD(element.company));

        
        tBody.appendChild(tr);        
    }

    return tBody;
};

function getCustomer (){
    const lineBreaks = document.querySelector('br');
    lineBreaks.style.display = 'none';
    const progressBar = document.querySelector('.progress');
    progressBar.style.display = 'block';

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function (){
        if (this.status == 200) {
            const customerTable = document.querySelector('.customer-table');
            
            const resObj = JSON.parse(this.response);
            
            addCustomerData(resObj.results, customerTable);

            progressBar.style.display = 'none';
            lineBreaks.style.display = 'block';
            const customer = document.querySelector('.customer').style.display = 'block';
        }
    }

    xhr.onprogress = function (){}

    xhr.onerror = function (){}

    xhr.send();
};




function getCustomers (){
    const lineBreaks = document.querySelector('br');
    lineBreaks.style.display = 'none';
    const progressBar = document.querySelector('.progress');
    progressBar.style.display = 'block';
    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function (){
        if (this.status == 200) {
            const customersTable = document.querySelector('.customers-table');
            
            const resObj = JSON.parse(this.response);
            customersTable.appendChild(addCustomerData(resObj.results, customersTable));

            progressBar.style.display = 'none';
            lineBreaks.style.display = 'block';
            const customers = document.querySelector('.customers').style.display = 'block';
        }
    }

    xhr.onprogress = function (event){
        console.log(`total: ${event.total}`);
        console.log(`loaded: ${event.loaded}`);
    }

    xhr.onerror = function (){}

    xhr.send();
};