var milks = [];
var salaries = [];
var others = [];
var otherTypes = [];
var productions=[];
var sales=[];
var sellers=[];
var employes=[];
var products=[];
var buys=[];
var theBox = '1955';
var key1 = 0;
var key2 = 0;
var key3 = 0;
var key4 = 0;
var key5 = 0;

const printArea = document.querySelector('#DivIdToPrint');
const content = document.querySelector('#body');
const authentication = document.querySelector('#authentication');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const sign = document.querySelector('#sign');
setInterval(logIn,1)
function logIn(){
    if (sessionStorage["user"] === "احمد الخفيف" && sessionStorage["passwoed"] === "01016415126") {
        authentication.classList.add('hide');
        content.classList.remove('hide');    }
}
sign.addEventListener('click', function(){
    if (username.value === 'احمد الخفيف' && password.value==='01016415126'){
        authentication.classList.add('hide');
        content.classList.remove('hide');
        sessionStorage.setItem('user', 'احمد الخفيف');
        sessionStorage.setItem('passwoed', '01016415126');
    }

    else{
        alert('اسم المستخدم أو كلمة السر غير صحيحة')
    }
})

setInterval(save, 1);
setInterval(time, 100);
/******* milk ******/
const box = document.querySelector('nav input');
const milksellers = document.querySelector('#milk #sellers');
const milkTypes = document.querySelector('#milk #milkType');
const milkAmount = document.querySelector('#milk #amount');
const milkPrice = document.querySelector('#milk #price');
const milkTotal = document.querySelector('#milk #total');
const milkPaid = document.querySelector('#milk #paid');
const milkRemainder = document.querySelector('#milk #remainder');
const milkDays = document.querySelector('#milk #days');
const milkMonthes = document.querySelector('#milk #monthes');
const milkYears = document.querySelector('#milk #years');
const milkTime = document.querySelector('#milk #time');
const fromDays = document.querySelector('#from #days');
const fromMonthes = document.querySelector('#from #monthes');
const fromYears = document.querySelector('#from #years');
const fromTime = document.querySelector('#from #time');
const toDays = document.querySelector('#to #days');
const toMonthes = document.querySelector('#to #monthes');
const toYears = document.querySelector('#to #years');
const toTime = document.querySelector('#to #time');
const milkBuy = document.querySelector('#milk #buy');
const saveMilkData = document.querySelector('#save');
const milkInfo = document.querySelector('#milkInfo');
const totalMilk = document.querySelector('#totalMilk');
const calculate = document.querySelector('#calculate');
const milkDetails = document.querySelector('#milkDetails');
const milkTable = document.querySelector('#milkTable');
const Days = document.querySelectorAll('#days');
const Monthes = document.querySelectorAll('#monthes');
const Years = document.querySelectorAll('#years');
const Time = document.querySelectorAll('#time');
const addEmployee = document.querySelector('#addEmployee');
const btnAddEmployee = document.querySelector('#btnAddEmployee');
const EmployeeName = document.querySelector('#EmployeeName');
const plusEmployee = document.querySelector('#plusEmployee');
const updateEmployee = document.querySelector('#updateEmployee');
const btnUpdateEmployee = document.querySelector('#btnUpdateEmployee');
const nowEmployeeName = document.querySelector('#nowEmployeeName');
const afterEmployeeName = document.querySelector('#afterEmployeeName');
const changeEmployee = document.querySelector('#changeEmployee');
const btnDeleteEmployee = document.querySelector('#btnDeleteEmployee');
dateNow = new Date();
day = dateNow.getDate();
month = dateNow.getMonth() + 1;
year = dateNow.getFullYear();
timeME = dateNow.getHours();
for(i=0;i<Days.length;i++){
    Days[i].value = day;
    Monthes[i].value = month;
    Years[i].value = year;
    if (timeME<12){
        Time[i].value = "ًصباحا";
        
    }
    else{
        Time[i].value = "ًمساءا";
    }
}
milkAmount.value = 0;
milkPrice.value = 0;
milkTotal.value = 0;
milkPaid.value = 0;
milkRemainder.value = 0;
milkRemainder.disabled = true;
milkTotal.disabled = true;
totalMilk.disabled = true;
box.disabled = true;
/******* salaries ********/
const employees = document.querySelector('#employees');
const employeeType = document.querySelector('#employeeType');
const salary = document.querySelector('#salary');
const salaryDays = document.querySelector('#salaries #days');
const salaryMonthes = document.querySelector('#salaries #monthes');
const salaryYears = document.querySelector('#salaries #years');
const salaryTime = document.querySelector('#salaries #time');
const salaryPay = document.querySelector('#salaries #pay');
const salarySave = document.querySelector('#salaries #save');
const salaryInfo = document.querySelector('#salariesInfo');
const salaryDetails = document.querySelector('#salaryDetails');
const addseller = document.querySelector('#addseller');
const btnAddSeller = document.querySelector('#btnAddSeller');
const sellerName = document.querySelector('#sellerName');
const plusSeller = document.querySelector('#plusSeller');
const updateseller = document.querySelector('#updateseller');
const btnUpdateSeller = document.querySelector('#btnUpdateSeller');
const nowSellerName = document.querySelector('#nowSellerName');
const afterSellerName = document.querySelector('#afterSellerName');
const changeSeller = document.querySelector('#changeSeller');
const btnDeleteSeller = document.querySelector('#btnDeleteSeller');
salary.value = 0;
/******* others ********/
const othersTypes = document.querySelector('#othersTypes');
const othersAmount = document.querySelector('#others #amount');
const othersPrice = document.querySelector('#others #cost');
const othersTotal = document.querySelector('#others #totalCost');
const othersDays = document.querySelector('#others #days');
const othersMonthes = document.querySelector('#others #monthes');
const othersYears = document.querySelector('#others #years');
const othersTime = document.querySelector('#others #time');
const othersPay = document.querySelector('#others #pay');
const othersSave = document.querySelector('#others #save');
const othersInfo = document.querySelector('#othersInfo');
const otherDetails = document.querySelector('#otherDetails');
const addOther = document.querySelector('#addOther');
const btnAddOther = document.querySelector('#btnAddOther');
const OtherName = document.querySelector('#OtherName');
const plusOther = document.querySelector('#plusOther');
const updateOther = document.querySelector('#updateOther');
const btnUpdateOther = document.querySelector('#btnUpdateOther');
const nowOtherName = document.querySelector('#nowOtherName');
const afterOtherName = document.querySelector('#afterOtherName');
const changeOther = document.querySelector('#changeOther');
const btnDeleteOther = document.querySelector('#btnDeleteOther');
const addToMasrof = document.querySelector('#addToMasrof');
othersAmount.value=0;
othersPrice.value=0;
othersTotal.value=0;
othersTotal.disabled = true;
/******* production ********/
const productionTypes = document.querySelector('#productionType');
const productionAmount = document.querySelector('#production #amount');
const productionDays = document.querySelector('#production #days');
const productionMonthes = document.querySelector('#production #monthes');
const productionYears = document.querySelector('#production #years');
const productionTime = document.querySelector('#production #time');
const productionStock = document.querySelector('#production #stock');
const productionSave = document.querySelector('#production #save');
const productionInfo = document.querySelector('#productionInfo');
const productionDetails = document.querySelector('#productionDetails');
const addProduct = document.querySelector('#addProduct');
const btnAddProduct = document.querySelector('#btnAddProduct');
const ProductName = document.querySelector('#ProductName');
const plusProduct = document.querySelector('#plusProduct');
const updateProduct = document.querySelector('#updateProduct');
const btnUpdateProduct = document.querySelector('#btnUpdateProduct');
const nowProductName = document.querySelector('#nowProductName');
const afterProductName = document.querySelector('#afterProductName');
const changeProduct = document.querySelector('#changeProduct');
const btnDeleteProduct = document.querySelector('#btnDeleteProduct');
productionAmount.value = 0;
/******* strore ********/
const storeTypes = document.querySelector('#storeType');
const storeAmount = document.querySelector('#store #amount');
storeAmount.disabled=true;
/******* sales ********/
const salesTypes = document.querySelector('#salesTypes');
const salesName = document.querySelector('#salesName');
const salesAmount = document.querySelector('#sales #amount');
const salesWeight = document.querySelector('#sales #weight');
const salesPrice = document.querySelector('#sales #cost');
const salesTotal = document.querySelector('#sales #totalCost');
const salesDays = document.querySelector('#sales #days');
const salesMonthes = document.querySelector('#sales #monthes');
const salesYears = document.querySelector('#sales #years');
const salesTime = document.querySelector('#sales #time');
const salesSell = document.querySelector('#sales #sell');
const salesSave = document.querySelector('#sales #save');
const salesInfo = document.querySelector('#salesInfo');
const salesDetails = document.querySelector('#salesDetails');
const paidToFactory = document.querySelector('#paidToFactory');
const retainToFactory = document.querySelector('#retainToFactory');
const amountOrW = document.querySelector('#amountOrW');
const addBuy = document.querySelector('#addBuy');
const btnAddBuy = document.querySelector('#btnAddBuy');
const buyName = document.querySelector('#buyName');
const plusBuy = document.querySelector('#plusBuy');
const updateBuy = document.querySelector('#updateBuy');
const btnUpdateBuy = document.querySelector('#btnUpdateBuy');
const nowBuyName = document.querySelector('#nowBuyName');
const afterBuyName = document.querySelector('#afterBuyName');
const changeBuy = document.querySelector('#changeBuy');
const btnDeleteBuy = document.querySelector('#btnDeleteBuy');
salesAmount.value = 0;
salesPrice.value = 0;
salesTotal.value = 0;
salesWeight.value = 0;
paidToFactory.value = 0;
retainToFactory.value = 0;
salesTotal.disabled = true;
salesWeight.disabled = true;
retainToFactory.disabled = true;
/****** analyis ********/
const out = document.querySelector('#out');
const income = document.querySelector('#in');
const profit = document.querySelector('#profit');

/********************************/
if (localStorage["milk"] !== undefined && localStorage["milk"] !== null) {
milks = JSON.parse(localStorage.getItem('milk'));
for (i = 0; i < milks.length; i++) {
    milks[i].key=i+1;
        milkInfo.insertAdjacentHTML('afterend', `<tr>
       <td>${milks[i].date}</td>
       <td>${milks[i].remainder}</td>
       <td>${milks[i].paid}</td>
        <td>${milks[i].total}</td>
        <td>${milks[i].price}</td>
        <td>${milks[i].amount}</td>
        <td>${milks[i].type}</td>
        <td>${milks[i].seller}</td>
        <td class='hide'>${i+1}</td>
        </tr>`)
    }
 key1 = i;
}
if (localStorage["box"] !== undefined && localStorage["box"]!=="null"){
theBox = JSON.parse(localStorage.getItem('box'));
    box.value = theBox;
}
if (localStorage["salary"] !== undefined && localStorage["salary"]!=="null"){
salaries = JSON.parse(localStorage.getItem('salary'));
    for (i = 0; i < salaries.length; i++) {
        salaries[i].key = i + 1;
        salaryInfo.insertAdjacentHTML('afterend', `<tr>
       <td>${salaries[i].date}</td>
       <td>${salaries[i].salary}</td>
       <td>${salaries[i].type}</td>
        <td>${salaries[i].employee}</td>
                <td class='hide'>${i + 1}</td>
        </tr>`)
    }
 key2 = i;
   
}
if (localStorage["other"] !== undefined && localStorage["other"] !== null) {
    others = JSON.parse(localStorage.getItem('other'));
    for (i = 0; i < others.length; i++) {
        others[i].key = i + 1;
        othersInfo.insertAdjacentHTML('afterend', `<tr>
       <td>${others[i].date}</td>
        <td>${others[i].total}</td>
        <td>${others[i].price}</td>
        <td>${others[i].amount}</td>
        <td>${others[i].type}</td>
                <td class='hide'>${i + 1}</td>

        </tr>`)
    }
 key3 = i;
}
if (localStorage["production"] !== undefined && localStorage["production"] !== null) {
    productions = JSON.parse(localStorage.getItem('production'));
    for (i = 0; i < productions.length; i++) {
        productions[i].key = i + 1;
        productionInfo.insertAdjacentHTML('afterend', `<tr>
       <td>${productions[i].date}</td>
        <td>${productions[i].amount}</td>
        <td>${productions[i].type}</td>
                <td class='hide'>${i + 1}</td>

        </tr>`)
    }
    key4 = i;

}
if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
    sellers = JSON.parse(localStorage.getItem('seller'));
    for (i = 0; i < sellers.length; i++) {
        milksellers.insertAdjacentHTML('beforeend', `
       <option>${sellers[i].name}</option>`)
    }
}
if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
    buys = JSON.parse(localStorage.getItem('buy'));
    for (i = 0; i < buys.length; i++) {
        salesName.insertAdjacentHTML('beforeend', `
       <option>${buys[i].name}</option>`)
    }
}
if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
    employes = JSON.parse(localStorage.getItem('employee'));
    for (i = 0; i < employes.length; i++) {
        employees.insertAdjacentHTML('beforeend', `
       <option>${employes[i].name}</option>`)
    }
}
if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
    otherTypes = JSON.parse(localStorage.getItem('otherType'));
    for (i = 0; i < otherTypes.length; i++) {
        othersTypes.insertAdjacentHTML('beforeend', `
       <option>${otherTypes[i].name}</option>`)
    }
}
if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
    products = JSON.parse(localStorage.getItem('product'));
    for (i = 0; i < products.length; i++) {
        productionType.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        storeType.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
        salesTypes.insertAdjacentHTML('beforeend', `
       <option>${products[i].name}</option>`)
    }
}
if (localStorage["sale"] !== undefined && localStorage["sale"] !== null) {
    sales = JSON.parse(localStorage.getItem('sale'));
    for (i = 0; i < sales.length; i++) {
        sales[i].key = i + 1;
        salesInfo.insertAdjacentHTML('afterend', `<tr>
       <td>${sales[i].date}</td>
       <td>${sales[i].retainFactory}</td>
       <td>${sales[i].paidFactory}</td>
        <td>${sales[i].total}</td>
        <td>${sales[i].price}</td>
        <td>${sales[i].weight}</td>
        <td>${sales[i].amount}</td>
        <td>${sales[i].type}</td>
        <td>${sales[i].name}</td>
                <td class='hide'>${i + 1}</td>
        </tr>`)
    }
   key5 = i;

}
amountOrW.addEventListener('click',function(){
    if (amountOrW.checked){
        salesWeight.disabled = false;
    }
    else{
        salesWeight.disabled = true;

    }
})

function save() {
    localStorage.setItem('milk', JSON.stringify(milks));
    localStorage.setItem('box', JSON.stringify(theBox));
    localStorage.setItem('salary', JSON.stringify(salaries));
    localStorage.setItem('other', JSON.stringify(others));
    localStorage.setItem('production', JSON.stringify(productions));
    localStorage.setItem('sale', JSON.stringify(sales));
    localStorage.setItem('seller', JSON.stringify(sellers));
    localStorage.setItem('buy', JSON.stringify(buys));
    localStorage.setItem('employee', JSON.stringify(employes));
    localStorage.setItem('otherType', JSON.stringify(otherTypes));
    localStorage.setItem('product', JSON.stringify(products));
}

function time() {
    if(salesTypes.value==='دفع مقدم'){
        salesTotal.disabled = true;
        salesWeight.disabled = true;
        salesAmount.disabled = true;
        salesPrice.disabled = true;
    }
    else{
        salesAmount.disabled = false;
        salesPrice.disabled = false;
    }
    milkTotal.value = parseFloat(milkAmount.value) * parseFloat(milkPrice.value);
    othersTotal.value = parseFloat(othersAmount.value) * parseFloat(othersPrice.value);
    if (amountOrW.checked){
        salesTotal.value = parseFloat(salesWeight.value) * parseFloat(salesPrice.value);
    }
    else{
        salesTotal.value = parseFloat(salesAmount.value) * parseFloat(salesPrice.value);
    }
    if (localStorage["milk"] !== undefined && localStorage["milk"] !== null) {
        milks = JSON.parse(localStorage.getItem('milk'));
         totalPaid=0;
        totalT=0;
      foundseller=false;
        for (i = 0; i < milks.length; i++) {
            if (milks[i].seller === milksellers.value){
                foundseller = true;
                milkRemainder.value = milks[i].remainder;
            }
        }
        if (!foundseller){
            milkRemainder.value = 0;
        }
    }
    if (localStorage["production"] !== undefined && localStorage["production"] !== null) {
        productions = JSON.parse(localStorage.getItem('production'));
         totalAmount=0;
        for (i = 0; i < productions.length; i++) {
            if (productions[i].type === storeTypes.value) {
                totalAmount = totalAmount + parseFloat(productions[i].amount);
            }
        }
        storeAmount.value = totalAmount;
    }
    if (localStorage["sale"] !== undefined && localStorage["sale"] !== null) {
        sales = JSON.parse(localStorage.getItem('sale'));
         totalAmount=0;
        required=0;
        paidForF=0;
        foundSalesName = false;
        for (i = 0; i < sales.length; i++) {
            if (sales[i].type === storeTypes.value) {
                totalAmount = totalAmount + parseFloat(sales[i].amount);
            }
            if (sales[i].name === salesName.value) {
                foundSalesName = true;
                retainToFactory.value = sales[i].retainFactory;
            }
        }
        if(!foundSalesName){
            retainToFactory.value = 0;
        }
        storeAmount.value = parseFloat(storeAmount.value) - totalAmount;
        }
 

    if (localStorage["milk"] !== undefined && localStorage["milk"] !== null) {
        milks = JSON.parse(localStorage.getItem('milk'));
        totalPaidMilk = 0;
        for (i = 0; i < milks.length; i++) {
            totalPaidMilk = totalPaidMilk + parseFloat(milks[i].paid);
            
        }
    }
    if (localStorage["salary"] !== undefined && localStorage["salary"] !== null) {
        salarys = JSON.parse(localStorage.getItem('salary'));
        totalPaidSalary = 0;
        for (i = 0; i < salarys.length; i++) {
            totalPaidSalary = totalPaidSalary + parseFloat(salarys[i].salary);
        }
    }
    if (localStorage["other"] !== undefined && localStorage["other"] !== null) {
        others = JSON.parse(localStorage.getItem('other'));
        totalPaidOther = 0;
        for (i = 0; i < others.length; i++) {
            if (others[i].addMasrof){
                totalPaidOther = totalPaidOther + parseFloat(others[i].total);
            }
        }
    }
    if (localStorage["sale"] !== undefined && localStorage["sale"] !== null) {
        sales = JSON.parse(localStorage.getItem('sale'));
        totalIn = 0;
        for (i = 0; i < sales.length; i++) {
            totalIn = totalIn + parseFloat(sales[i].paidFactory);
        }
    }
    out.value = totalPaidMilk + totalPaidSalary + totalPaidOther;
    income.value = totalIn;
    profit.value = parseFloat(income.value) - parseFloat( out.value);
}
calculate.addEventListener('click', function () {
        day = fromDays.value;
        month =fromMonthes.value;
        year =fromYears.value;
        pmAm= fromTime.value;
        tMilk = 0;
        while (fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value !== toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value  ){
            for (i = 0; i < milks.length; i++) {
                if (milks[i].date === fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value) {
                    tMilk = tMilk + parseFloat(milks[i].amount);
                }
        }
            if (fromTime.value === "ًصباحا"){
                fromTime.value = "ًمساءا";
            }
            else{
                fromTime.value = "ًصباحا";
                fromDays.value = parseInt(fromDays.value)+1;
                if (fromDays.value === "" ){
                    fromMonthes.value = parseInt(fromMonthes.value) + 1;
                    fromDays.value = 1;
                    if (fromMonthes.value === "") {
                        fromYears.value = parseInt(fromYears.value) + 1;
                        fromMonthes.value=1;
                    }
                }
            }
    }
        if (fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value === toDays.value + ' ' + toMonthes.value + ' ' + toYears.value + ' ' + toTime.value ){
            for (i = 0; i < milks.length; i++) {
                if (milks[i].date === fromDays.value + ' ' + fromMonthes.value + ' ' + fromYears.value + ' ' + fromTime.value) {
                    tMilk = tMilk + parseFloat(milks[i].amount);
                }
            }
        }
        totalMilk.value=tMilk;
          fromDays.value = day;
          fromMonthes.value = month;
          fromYears.value = year;
          fromTime.value = pmAm;
})   
milkDetails.addEventListener('click',function(){
    milkTable.classList.toggle('hide');
})
salaryDetails.addEventListener('click', function () {
    salaryTable.classList.toggle('hide');
})
otherDetails.addEventListener('click', function () {
    othersTable.classList.toggle('hide');
})
salesDetails.addEventListener('click', function () {
    salesTable.classList.toggle('hide');
})
productionDetails.addEventListener('click', function () {
    productionTable.classList.toggle('hide');
})
btnAddSeller.addEventListener('click', function () {
    btnUpdateSeller.disabled=true;  
    addseller.classList.remove('hide')
})
btnUpdateSeller.addEventListener('click', function () {
    btnAddSeller.disabled = true;
    updateseller.classList.remove('hide');
    nowSellerName.value = milksellers.value;
    nowSellerName.disabled = true;
})
plusSeller.addEventListener('click', function () {
    btnUpdateSeller.disabled = false;  
    milksellers.insertAdjacentHTML('afterbegin', `<option>${sellerName.value}</option>`)
    addseller.classList.add('hide')
    sellers.push({
        name: sellerName.value
    })
})
changeSeller.addEventListener('click', function () {
    btnUpdateSeller.disabled = false;  
    if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
        sellers = JSON.parse(localStorage.getItem('seller'));
        for (i = 0; i < sellers.length; i++) {
            if (sellers[i].name === nowSellerName.value) {
                sellers[i].name = afterSellerName.value;
            }
        }
    }
    if (localStorage["milk"] !== undefined && localStorage["milk"] !== null) {
        milks = JSON.parse(localStorage.getItem('milk'));
        for (i = 0; i < milks.length; i++) {
            if (milks[i].seller === nowSellerName.value) {
                milks[i].seller = afterSellerName.value;
            }
        }
    }
    updateseller.classList.add('hide')
    location.reload();

})
btnDeleteSeller.addEventListener('click',function(){
    if (localStorage["seller"] !== undefined && localStorage["seller"] !== null) {
        sellers = JSON.parse(localStorage.getItem('seller'));
        for (i = 0; i < sellers.length; i++) {
            if (sellers[i].name === milksellers.value) {
                sellers.splice(i, 1);
            }
        }
    }
    location.reload();

})
btnAddEmployee.addEventListener('click', function () {
    btnUpdateEmployee.disabled = true;
    addEmployee.classList.remove('hide')
})
plusEmployee.addEventListener('click', function () {
    btnUpdateEmployee.disabled = false;
    employees.insertAdjacentHTML('afterbegin', `<option>${employeeName.value}</option>`)
    addEmployee.classList.add('hide')
    employes.push({
        name: employeeName.value
    })
})
btnUpdateEmployee.addEventListener('click', function () {
    btnAddEmployee.disabled = true;
    updateEmployee.classList.remove('hide');
    nowEmployeeName.value = employees.value;
    nowEmployeeName.disabled = true;
})
changeEmployee.addEventListener('click', function () {
    btnUpdateEmployee.disabled = false;  
    if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
        employes = JSON.parse(localStorage.getItem('employee'));
        for (i = 0; i < employes.length; i++) {
            if (employes[i].name === nowEmployeeName.value) {
                employes[i].name = afterEmployeeName.value;
            }
        }
    }
    if (localStorage["salary"] !== undefined && localStorage["salary"] !== null) {
        salaries = JSON.parse(localStorage.getItem('salary'));
        for (i = 0; i < salaries.length; i++) {
            if (salaries[i].employee === nowEmployeeName.value) {
                salaries[i].employee = afterEmployeeName.value;
            }
        }
    }
    updateEmployee.classList.add('hide')
    location.reload();

})
btnDeleteEmployee.addEventListener('click',function(){
    if (localStorage["employee"] !== undefined && localStorage["employee"] !== null) {
        employes = JSON.parse(localStorage.getItem('employee'));
        for (i = 0; i < employes.length; i++) {
            if (employes[i].name === employees.value) {
                employes.splice(i, 1);
            }
        }
    }
    location.reload();

})
btnAddOther.addEventListener('click', function () {
    btnUpdateOther.disabled = true;
    addOther.classList.remove('hide')
})
plusOther.addEventListener('click', function () {
    btnUpdateOther.disabled = false;
    othersTypes.insertAdjacentHTML('afterbegin', `<option>${OtherName.value}</option>`)
    addOther.classList.add('hide')
    otherTypes.push({
        name: OtherName.value
    })
})
btnUpdateOther.addEventListener('click', function () {
    btnAddOther.disabled = true;
    updateOther.classList.remove('hide');
    nowOtherName.value = othersTypes.value;
    nowOtherName.disabled = true;
})
changeOther.addEventListener('click', function () {
    btnUpdateOther.disabled = false;
    if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
        otherTypes = JSON.parse(localStorage.getItem('otherType'));
        for (i = 0; i < otherTypes.length; i++) {
            if (otherTypes[i].name === nowOtherName.value) {
                otherTypes[i].name = afterOtherName.value;
            }
        }
    }
    if (localStorage["other"] !== undefined && localStorage["other"] !== null) {
        others = JSON.parse(localStorage.getItem('other'));
        for (i = 0; i < others.length; i++) {
            if (others[i].type === nowOtherName.value) {
                others[i].type = afterOtherName.value;
            }
        }
    }
    updateOther.classList.add('hide')
    location.reload();

})
btnDeleteOther.addEventListener('click', function () {
    if (localStorage["otherType"] !== undefined && localStorage["otherType"] !== null) {
        otherTypes = JSON.parse(localStorage.getItem('otherType'));
        for (i = 0; i < otherTypes.length; i++) {
            if (otherTypes[i].name === othersTypes.value) {
                otherTypes.splice(i, 1);
            }
        }
    }
    location.reload();

})
btnAddProduct.addEventListener('click', function () {
    btnUpdateProduct.disabled = true;
    addProduct.classList.remove('hide')
})
plusProduct.addEventListener('click', function () {
    btnUpdateProduct.disabled = false;
    productionTypes.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
    storeType.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
    salesTypes.insertAdjacentHTML('afterbegin', `<option>${ProductName.value}</option>`)
    addProduct.classList.add('hide')
    products.push({
        name: ProductName.value
    })
})
btnUpdateProduct.addEventListener('click', function () {
    btnAddProduct.disabled = true;
    updateProduct.classList.remove('hide');
    nowProductName.value = productionTypes.value;
    nowProductName.disabled = true;
})
changeProduct.addEventListener('click', function () {
    btnUpdateProduct.disabled = false;
    if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
        products = JSON.parse(localStorage.getItem('product'));
        for (i = 0; i < products.length; i++) {
            if (products[i].name === nowProductName.value) {
                products[i].name = afterProductName.value;
            }
        }
    }
    if (localStorage["production"] !== undefined && localStorage["production"] !== null) {
        productions = JSON.parse(localStorage.getItem('production'));
        for (i = 0; i < productions.length; i++) {
            if (productions[i].type === nowProductName.value) {
                productions[i].type = afterProductName.value;
            }
        }
    }
    updateProduct.classList.add('hide')
    location.reload();

})
btnDeleteProduct.addEventListener('click', function () {
    if (localStorage["product"] !== undefined && localStorage["product"] !== null) {
        products = JSON.parse(localStorage.getItem('product'));
        for (i = 0; i < products.length; i++) {
            if (products[i].name === productionTypes.value) {
                products.splice(i, 1);
            }
        }
    }
    location.reload();

})
btnAddBuy.addEventListener('click', function () {
    btnUpdateBuy.disabled = true;
    addBuy.classList.remove('hide')
})
btnUpdateBuy.addEventListener('click', function () {
    btnAddBuy.disabled = true;
    updateBuy.classList.remove('hide');
    nowBuyName.value = salesName.value;
    nowBuyName.disabled = true;
})
plusBuy.addEventListener('click', function () {
    btnUpdateBuy.disabled = false;
    salesName.insertAdjacentHTML('afterbegin', `<option>${buyName.value}</option>`)
    addBuy.classList.add('hide')
    buys.push({
        name: buyName.value
    })
})
changeBuy.addEventListener('click', function () {
    btnUpdateBuy.disabled = false;
    if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
        buys = JSON.parse(localStorage.getItem('buy'));
        for (i = 0; i < buys.length; i++) {
            if (buys[i].name === nowBuyName.value) {
                buys[i].name = afterBuyName.value;
            }
        }
    }
    if (localStorage["sale"] !== undefined && localStorage["sale"] !== null) {
        sales = JSON.parse(localStorage.getItem('sale'));
        for (i = 0; i < sales.length; i++) {
            if (sales[i].name === nowBuyName.value) {
                sales[i].name = afterBuyName.value;
            }
        }
    }
    updateBuy.classList.add('hide')
    location.reload();

})
btnDeleteBuy.addEventListener('click', function () {
    if (localStorage["buy"] !== undefined && localStorage["buy"] !== null) {
        buys = JSON.parse(localStorage.getItem('buy'));
        for (i = 0; i < buys.length; i++) {
            if (buys[i].name === salesName.value) {
                buys.splice(i, 1);
            }
        }
    }
    location.reload();

})
saveMilkData.addEventListener('click', function () {
    if (isNaN(milkAmount.value) || isNaN(milkPrice.value) || isNaN(milkPaid.value)) {
        alert('you must enter numbers only');
    }
    else if ((milkAmount.value==='0' || milkPrice.value==='0') && (milkPaid.value==='0')){
        alert('يجب ادخال على الاقل كمية اللبن وسعر الكيلو أو المدفوع');
    }
    else if ((milkAmount.value==='0' && milkPrice.value==='0') && (milkPaid.value!=='0')){
        if (parseFloat(milkPaid.value) > parseFloat(milkRemainder.value)) {
            alert('المدفوع أكبر من الباقي');
        }
        else{
                milks.push({
                    key:key1+1,
                    seller: milksellers.value,
                    type: '______',
                    amount: milkAmount.value,
                    price: milkPrice.value,
                    total: milkTotal.value,
                    paid: milkPaid.value,
                    remainder: parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value),
                    date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
                });
            sales.push({
                key: key5 + 1,
                name: milksellers.value,
                type: "",
                amount: 0,
                weight: 0,
                price: 0,
                total: 0,
                paidFactory: 0,
                retainFactory: -(parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value)),
                date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
            });
            key1++;
            key5++;
            milkRemainder.value = parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value);
                theBox = parseFloat(box.value) - parseFloat(milkPaid.value);
            
          }}
    else {
        if (parseFloat(milkPaid.value) > parseFloat(milkRemainder.value) + parseFloat(milkTotal.value)) {
            alert('المدفوع أكبر من الباقي');
        }
        else{
        milks.push({
            key: key1 + 1,
            seller: milksellers.value,
            type: milkTypes.value,
            amount: milkAmount.value,
            price: milkPrice.value,
            total: milkTotal.value,
            paid: milkPaid.value,
            remainder: parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value) ,
            date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value+' '+milkTime.value 
        });
            sales.push({
                key: key5 + 1,
                name: milksellers.value,
                type: "",
                amount: 0,
                weight: 0,
                price: 0,
                total: 0,
                paidFactory: 0,
                retainFactory: -(parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value)),
                date: milkDays.value + ' ' + milkMonthes.value + ' ' + milkYears.value + ' ' + milkTime.value
            });
            key1++;
            key5++;
            milkRemainder.value = parseFloat(milkRemainder.value) + parseFloat(milkTotal.value) - parseFloat(milkPaid.value);

                theBox = parseFloat(box.value) - parseFloat(milkPaid.value);
    }
    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(milkPaid.value);
        milkData = JSON.parse(localStorage.getItem('milk'));
        milkInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${milkData[milkData.length - 1].date}</td>
        <td>${milkData[milkData.length - 1].remainder}</td>
        <td>${milkData[milkData.length - 1].paid}</td>
        <td>${milkData[milkData.length - 1].total}</td>
        <td>${milkData[milkData.length - 1].price}</td>
        <td>${milkData[milkData.length - 1].amount}</td>
        <td>${milkData[milkData.length - 1].type}</td>
        <td>${milkData[milkData.length - 1].seller}</td>
        <td class='hide'>${milkData[milkData.length - 1].key}</td>
        </tr>`)
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال شراء لبن</h1>
        <hr>
        <table style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].seller} </td>
        <th style="height:10mm"> اسم البائع </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].type} </td>
        <th style="height:10mm"> نوع اللبن </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].amount} </td>
        <th style="height:10mm"> كمية اللبن </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].price} </td>
        <th style="height:10mm"> سعر كيلو اللبن </th>
        </tr>
        <tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].total} </td>
        <th style="height:10mm"> المطلوب </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].paid} </td>
        <th style="height:10mm"> المدفوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].remainder} </td>
        <th style="height:10mm"> الباقي </th>
        </tr>
        <tr>
        <td style="height:10mm">${milkData[milkData.length - 1].date} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
        printDiv();
        milkAmount.value = 0;
        milkPrice.value = 0;
        milkTotal.value = 0;
        milkPaid.value = 0;
        setTimeout(function () {
            window.location.reload();
        }, 10)
    },100)
})
salarySave.addEventListener('click',function(){
if(salary.value==='0'){
    alert('يجب ادخال المرتب')
}
else{
    salaries.push({
        key: key2 + 1,
        employee:employees.value,
        type:employeeType.value,
        salary:salary.value,
        date: salaryDays.value + ' ' + salaryMonthes.value + ' ' + salaryYears.value + ' ' + salaryTime.value 
    })
    key2++;
    theBox = parseFloat(box.value) - parseFloat(salary.value);
}
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(salary.value);
        salaryData = JSON.parse(localStorage.getItem('salary'));
        salaryInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${salaryData[salaryData.length - 1].date}</td>
        <td>${salaryData[salaryData.length - 1].salary}</td>
        <td>${salaryData[salaryData.length - 1].type}</td>
        <td>${salaryData[salaryData.length - 1].employee}</td>
        <td class='hide'>${salaryData[salaryData.length - 1].key}</td>
        </tr>`)
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال استلام</h1>
        <hr>
        <table style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].employee} </td>
        <th style="height:20mm"> الاسم </th>
        </tr>
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].type} </td>
        <th style="height:20mm"> نوع العمل </th>
        </tr>
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].salary} </td>
        <th style="height:20mm"> المرتب المصروف </th>
        </tr>
        <tr>
        <td style="height:20mm">${salaryData[salaryData.length - 1].date} </td>
        <th style="height:20mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:20mm"> </td>
        <th style="height:20mm"> التوقيع </th>
        </tr>
        </table>
     `);
        printDiv();
        salary.value = 0;
    },100)
})
othersSave.addEventListener('click', function () {

    if (isNaN(othersAmount.value) || isNaN(othersPrice.value)) {
        alert('you must enter numbers only');
    } else if (othersAmount.value === '0' || othersPrice.value === '0') {
        alert('يجب ادخال الكمية والسعر');
    } else {

        others.push({
            key: key3 + 1,
            type: othersTypes.value,
            amount: othersAmount.value,
            price: othersPrice.value,
            total: othersTotal.value,
            date: othersDays.value + ' ' + othersMonthes.value + ' ' + othersYears.value + ' ' + othersTime.value,
            addMasrof:addToMasrof.checked
        });
        key3++;
        theBox = parseFloat(box.value) - parseFloat(othersTotal.value);
    }
    setTimeout(function () {
        box.value = parseFloat(box.value) - parseFloat(othersTotal.value);
        othersData = JSON.parse(localStorage.getItem('other'));
        othersInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${othersData[othersData.length - 1].date}</td>
        <td>${othersData[othersData.length - 1].total}</td>
        <td>${othersData[othersData.length - 1].price}</td>
        <td>${othersData[othersData.length - 1].amount}</td>
        <td>${othersData[othersData.length - 1].type}</td>
        <td class='hide'>${othersData[othersData.length - 1].key}</td>
        </tr>`)
        printArea.innerHTML = '';
        printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مصروفات</h1>
        <hr>
        <table style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].type} </td>
        <th style="height:10mm"> النوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].amount} </td>
        <th style="height:10mm"> الكمية </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].price} </td>
        <th style="height:10mm"> سعر الوحدة </th>
        </tr>
        <tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].total} </td>
        <th style="height:10mm"> الاجمالي </th>
        </tr>
        <tr>
        <td style="height:10mm">${othersData[othersData.length - 1].date} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
        printDiv();
        othersAmount.value = 0;
        othersPrice.value = 0;
        othersTotal.value = 0;
    },100)
})
productionSave.addEventListener('click', function () {

    if (isNaN(productionAmount.value)) {
        alert('you must enter numbers only');
    } else if (productionAmount.value === '0') {
        alert('يجب ادخال الكمية ');
    } else {
        productions.push({
            key: key4 + 1,
            type: productionTypes.value,
            amount: productionAmount.value,
            date: productionDays.value + ' ' + productionMonthes.value + ' ' + productionYears.value + ' ' + productionTime.value
        });
        key4++;

    }
    setTimeout(function () {
        productionData = JSON.parse(localStorage.getItem('production'));
        productionInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${productionData[productionData.length - 1].date}</td>
        <td>${productionData[productionData.length - 1].amount}</td>
        <td>${productionData[productionData.length - 1].type}</td>
        <td class='hide'>${productionData[productionData.length - 1].key}</td>
        </tr>`)
        productionAmount.value = 0;
    },100)
})
salesSave.addEventListener('click', function () {
        if (salesTypes.value === 'دفع مقدم') {
            if (parseFloat(paidToFactory.value) > 0){
            sales.push({
                key: key5 + 1,
                name: salesName.value,
                type: salesTypes.value,
                amount: salesAmount.value,
                weight: salesWeight.value,
                price: salesPrice.value,
                total: salesTotal.value,
                paidFactory: paidToFactory.value,
                retainFactory: parseFloat(retainToFactory.value)+parseFloat(salesTotal.value)-parseFloat(paidToFactory.value),
                date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
            });
                milks.push({
                    key: key1 + 1,
                    seller: salesName.value,
                    type: "",
                    amount: 0,
                    price: 0,
                    total: 0,
                    paid: 0,
                    remainder: -(parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ),
                    date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
                });
                key5++;
                key1++;
                theBox = parseFloat(box.value) + parseFloat(paidToFactory.value);
                retainToFactory.value = parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ;

        setTimeout(function(){
            printArea.innerHTML = '';
                box.value = parseFloat(box.value) + parseFloat(paidToFactory.value);
                salesData = JSON.parse(localStorage.getItem('sale'));
                salesInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${salesData[salesData.length - 1].date}</td>
        <td>${salesData[salesData.length - 1].retainFactory}</td>
        <td>${salesData[salesData.length - 1].paidFactory}</td>
        <td>${salesData[salesData.length - 1].total}</td>
        <td>${salesData[salesData.length - 1].price}</td>
        <td>${salesData[salesData.length - 1].weight}</td>
        <td>${salesData[salesData.length - 1].amount}</td>
        <td>${salesData[salesData.length - 1].type}</td>
        <td>${salesData[salesData.length - 1].name}</td>
        <td class='hide'>${salesData[salesData.length - 1].key}</td>
        </tr>`)
                printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال دفع مقدم</h1>
        <hr>
        <table style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].name} </td>
        <th style="height:10mm"> الاسم </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].type} </td>
        <th style="height:10mm"> النوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].paidFactory} </td>
        <th style="height:10mm"> المدفوع للمصنع </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].date} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
                printDiv();
setTimeout(function(){
window.location.reload();
},10)
            
        }, 500);
        
        }
            else{
                alert('يجب ادخال المدفوع للمصنع');
            }
        }
      
        else if (isNaN(salesAmount.value) || isNaN(salesPrice.value)) {
            alert('you must enter numbers only');
        }
        else if (salesAmount.value === '0' || salesPrice.value === '0') {
            alert('يجب ادخال الكمية والسعر');
        }
        else if (parseFloat(salesAmount.value) > parseFloat(storeAmount.value)) {
            alert('الكمية غير متوفرة');
        }

        else {
             if(amountOrW.checked){
                 sales.push({
                     key: key5 + 1,
                     name: salesName.value,
                     type: salesTypes.value,
                     amount: salesAmount.value,
                     weight: salesWeight.value,
                     price: salesPrice.value,
                     total: salesTotal.value,
                     paidFactory: paidToFactory.value,
                     retainFactory: parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ,
                     date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
                 });
                 milks.push({
                     key: key1 + 1,
                     seller: salesName.value,
                     type: "",
                     amount:0,
                     price: 0,
                     total: 0,
                     paid: 0,
                     remainder: -(parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ),
                     date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
                 });
            }
            else{
                 sales.push({
                     key: key5 + 1,
                     name: salesName.value,
                     type: salesTypes.value,
                     amount: salesAmount.value,
                     weight: 'ــــــــ',
                     price: salesPrice.value,
                     total: salesTotal.value,
                     paidFactory: paidToFactory.value,
                     retainFactory: parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ,
                     date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
                 });
                 milks.push({
                     key: key1 + 1,
                     seller: salesName.value,
                     type: "",
                     amount: 0,
                     price: 0,
                     total: 0,
                     paid: 0,
                     remainder: -(parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value)),
                     date: salesDays.value + ' ' + salesMonthes.value + ' ' + salesYears.value + ' ' + salesTime.value
                 });
            }
            key5++;
            key1++;
            theBox = parseFloat(box.value) + parseFloat(salesTotal.value);
        }
    if (isNaN(salesAmount.value) || isNaN(salesPrice.value)) {
    }
    else if (salesAmount.value === '0' || salesPrice.value === '0') {
    }
    else if (parseFloat(salesAmount.value) > parseFloat(storeAmount.value)) {
    }
    else{
        retainToFactory.value = parseFloat(retainToFactory.value) + parseFloat(salesTotal.value) - parseFloat(paidToFactory.value) ;

        setTimeout(function () {
            box.value = parseFloat(box.value) + parseFloat(salesTotal.value);

            salesData = JSON.parse(localStorage.getItem('sale'));
            salesInfo.insertAdjacentHTML('afterend', `<tr>
        <td>${salesData[salesData.length - 1].date}</td>
        <td>${salesData[salesData.length - 1].retainFactory}</td>
        <td>${salesData[salesData.length - 1].paidFactory}</td>
        <td>${salesData[salesData.length - 1].total}</td>
        <td>${salesData[salesData.length - 1].price}</td>
        <td>${salesData[salesData.length - 1].weight}</td>
        <td>${salesData[salesData.length - 1].amount}</td>
        <td>${salesData[salesData.length - 1].type}</td>
        <td>${salesData[salesData.length - 1].name}</td>
        <td class='hide'>${salesData[salesData.length - 1].key}</td>
        </tr>`)
            printArea.innerHTML = '';

                printArea.insertAdjacentHTML('afterbegin', `<h1>ايصال مبيعات</h1>
        <hr>
        <table style="width:105mm;text-align:center;margin:auto">
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].name} </td>
        <th style="height:10mm"> الاسم </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].type} </td>
        <th style="height:10mm"> النوع </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].amount} </td>
        <th style="height:10mm"> الكمية </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].weight} </td>
        <th style="height:10mm"> الوزن </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].price} </td>
        <th style="height:10mm"> سعر الوحدة </th>
        </tr>
        <tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].total} </td>
        <th style="height:10mm"> الاجمالي </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].paidFactory} </td>
        <th style="height:10mm"> المدفوع للمصنع </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].retainFactory} </td>
        <th style="height:10mm"> المتبقي للمصنع </th>
        </tr>
        <tr>
        <td style="height:10mm">${salesData[salesData.length - 1].date} </td>
        <th style="height:10mm"> التاريخ </th>
        </tr>
        <tr>
        <td style="height:10mm"> </td>
        <th style="height:10mm"> التوقيع </th>
        </tr>
        </table>
     `);
                printDiv();
        
            salesAmount.value = 0;
            salesPrice.value = 0;
            salesTotal.value = 0;
            setTimeout(function () {
                window.location.reload();
            }, 10)
        }, 500)
    }

})
function printDiv() {

    var newWin = window.open('', 'Print-Window');

    newWin.document.open();

    newWin.document.write(`<html><body style='text-align:center; border: 2px solid black' onload="window.print()"> ${printArea.innerHTML} </body > </html>`);

    newWin.document.close();

    setTimeout(function () {
        newWin.close();
    }, 10);

}
milkTable.addEventListener('click',function(e){
    for (i = 0; i < milks.length; i++) {
        if (milks[i].key == e.path[1].cells[8].innerText) {
            for (j = i+1; j < milks.length; j++) {
                if (milks[j].seller == e.path[1].cells[7].innerText){
                milks[j].remainder = milks[j].remainder-milks[i].total;
            }}
            theBox = parseFloat(theBox) + parseFloat(milks[i].paid);
            milks.splice(i,1);
            a = milkTable.children[0].children[0].children["length"];
            milkTable.children[0].children[0].children[a - parseInt(e.path[1].cells[8].innerText)].remove();


        }
    }
    location.reload();
})
salaryTable.addEventListener('click',function(e){
    for (i = 0; i < salaries.length; i++) {
        if (salaries[i].key == e.path[1].cells[3].innerText) {
            theBox = parseFloat(theBox) + parseFloat(salaries[i].salary);
            
        salaries.splice(i,1);
        a = salaryTable.children[0].children[0].children["length"];
        salaryTable.children[0].children[0].children[a - parseInt(e.path[1].cells[3].innerText)].remove();
        }}
    location.reload();
});
othersTable.addEventListener('click', function (e) {
    for (i = 0; i < others.length; i++) {
        if (others[i].key == e.path[1].cells[5].innerText) {
            theBox = parseFloat(theBox) + parseFloat(others[i].total);
            others.splice(i, 1);
            a = othersTable.children[0].children[0].children["length"];
       othersTable.children[0].children[0].children[a - parseInt(e.path[1].cells[5].innerText)].remove();
        }
    }
    location.reload();
});
productionTable.addEventListener('click', function (e) {
    for (i = 0; i < productions.length; i++) {
        if (productions[i].key == e.path[1].cells[3].innerText) {
            productions.splice(i, 1);
            a = productionTable.children[0].children[0].children["length"];
       productionTable.children[0].children[0].children[a - parseInt(e.path[1].cells[3].innerText)].remove();
        }
    }
    location.reload();
});
salesTable.addEventListener('click', function (e) {
    for (i = 0; i < sales.length; i++) {
        if (sales[i].key == e.path[1].cells[5].innerText) {
            theBox = parseFloat(theBox) - parseFloat(sales[i].total);
            sales.splice(i, 1);
            a = salesTable.children[0].children[0].children["length"];
            salesTable.children[0].children[0].children[a - parseInt(e.path[1].cells[5].innerText)].remove();
        }
    }
    location.reload();
});





















































/*function pay (day,month,year){
    totalThisDay = 0;
    totalThisMonth = 0;
    totalThisYear = 0;
    data = JSON.parse(localStorage.getItem('log'));
    for(i=0;i<data.length;i++){
        if (data[i].date.substring(8, 10) === day && data[i].date.substring(4, 7) === month && data[i].date.substring(11, 15)===year){
            totalThisDay += parseFloat(data[i].total);
        }
        if (data[i].date.substring(4, 7) === month && data[i].date.substring(11, 15)===year){
            totalThisMonth += parseFloat(data[i].total);
        }
        if (data[i].date.substring(11, 15)===year){
            totalThisYear += parseFloat(data[i].total);
        }
    }

}
find.addEventListener('click',function(){
    pay(days.value, monthes.value, years.value);
    thisDay.value=totalThisDay;
    thisMonth.value=totalThisMonth;
    thisYear.value=totalThisYear;
})
*/