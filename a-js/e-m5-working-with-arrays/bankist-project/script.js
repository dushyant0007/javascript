'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2023-11-21T08:31:17.577Z',
    '2023-11-14T06:21:49.811Z',
    '2023-10-24T13:51:47.229Z',
    '2023-10-06T07:24:05.503Z',
    '2023-09-13T19:49:51.079Z',
    '2023-09-08T09:10:38.870Z',
    '2023-08-26T01:26:27.149Z',
    '2023-08-18T05:47:42.324Z'
  ]
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2023-11-21T08:31:17.577Z',
    '2023-11-14T06:21:49.811Z',
    '2023-10-24T13:51:47.229Z',
    '2023-10-06T07:24:05.503Z',
    '2023-09-13T19:49:51.079Z',
    '2023-09-08T09:10:38.870Z',
    '2023-08-26T01:26:27.149Z',
    '2023-08-18T05:47:42.324Z'
  ]
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2023-11-21T08:31:17.577Z',
    '2023-11-14T06:21:49.811Z',
    '2023-10-24T13:51:47.229Z',
    '2023-10-06T07:24:05.503Z',
    '2023-09-13T19:49:51.079Z',
    '2023-09-08T09:10:38.870Z',
    '2023-08-26T01:26:27.149Z',
    '2023-08-18T05:47:42.324Z'
  ]
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2023-11-21T08:31:17.577Z',
    '2023-11-14T06:21:49.811Z',
    '2023-10-24T13:51:47.229Z',
    '2023-10-06T07:24:05.503Z'
  ]
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//-----------------------------------------------------------

//Print Balance
const displayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0)
  account.balance = balance;
  labelBalance.textContent = balance.toFixed(2) + ' €';
}



//-----------------------------------------------------------

// Display Transactions
const displayMovements = function (acc, sort = false) {

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  containerMovements.innerHTML = '';
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${(date.getMonth() + 1)}`.padStart(2, 0);
    const year = `${date.getFullYear()}`.padStart(2, 0);
    const displayDate = day + '/' + month + '/' + year;
    const diff = Math.round((Number(Date.now()) - Number(date.getTime())) / (1000 * 60 * 60 * 24));
    const displayDt = diff > 5 ? displayDate : diff + ' days ago';
    console.log(displayDt)



    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDt}</div>
        <div class="movements__value">${mov.toFixed(2)} €</div>
      </div>`;

    // containerMovements.insertAdjacentHTML('afterbegin',html);
    containerMovements.innerHTML += html;
  });
}


//-----------------------------------------------------------

const calDisplaySummary = function (acc) {

  const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = incomes.toFixed(2) + ' €';

  const out = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(out) + ' €';

  const interest = acc.movements.filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .reduce((acc, val) => acc + val, 0);

  labelSumInterest.textContent = interest.toFixed(2) + ' €';
}

//-----------------------------------------------------------
//computing username
//The username = initials of the user's name
const createUserName = function (all_acc) {
  all_acc.forEach((acc) => {
    acc.username = acc.owner.toLocaleLowerCase().split(' ').map(i => i[0]).join('');
  })
  return
}
createUserName(accounts)

//-----------------------------------------------------------

function updateUI(currentAccount) {
  displayMovements(currentAccount);
  calDisplaySummary(currentAccount);
  displayBalance(currentAccount);
}

//--Logout Timer

const startLogOutTimer = function () {
  //set timer to 5 minutes

  let time = (60 * 5); // 5min

  // call the timer every second
    let timer = setInterval(() => {
    time--;
    let min = String(Math.trunc(time / 60)).padStart(2, '0');
    let secs = String(time % 60).padStart(2, '0');
    labelTimer.textContent = min + ':' + secs;

    if (time == 0){
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
      currentAccount = '';
    }

  }, 1000)

  return timer;

}

//-----------------------------------------------------------

let currentAccount,timer;

// Event Handlers
btnLogin.addEventListener('click', function (event) {
  //prevent form form submitting on click
  event.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (!currentAccount)
    alert('No user exists')
  else if (currentAccount.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 1;
    labelWelcome.textContent = 'Welcome back, ' + currentAccount.owner.split(' ')[0];
    updateUI(currentAccount);

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${(now.getMonth() + 1)}`.padStart(2, 0);
    const year = `${now.getFullYear()}`.padStart(2, 0);
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minutes = `${now.getMinutes()}`.padStart(2, 0);


    labelDate.textContent = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes;

    // if already there is a timer // clare it
    if(timer){
      clearInterval(timer)
    }

    timer = startLogOutTimer();

  }
  else
    alert('wrong password');

  //clear input fields
  inputLoginUsername.value = inputLoginPin.value = '';

  // loosing focus from the field
  inputClosePin.blur();

})

//-----------------------------------------------------------

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if (amount > 0 &&
    receiverAcc &&
    currentAccount.balance > amount &&
    receiverAcc.username !== currentAccount.username) {

    currentAccount.movements.unshift(-amount);
    receiverAcc.movements.unshift(amount);

    currentAccount.movementsDates.unshift(new Date().toISOString())
    receiverAcc.movementsDates.unshift(new Date().toISOString())
    updateUI(currentAccount)

  }
  else {
    alert('Transfer Invalid');
  }
})

//-----------------------------------------------------------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)) {
    const idx = accounts.findIndex((acc) => currentAccount === acc);
    accounts.splice(idx, 1);
    containerApp.style.opacity = 0;
    currentAccount = '';
  }
  else {
    alert('wrong details')
  }

  inputCloseUsername = inputClosePin = '';
  inputClosePin.blur(); // top make out of focus
})
//-----------------------------------------------------------
// only garnet loan if there is at least one deposit with
// at least 10% of the requested loan amount

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  let amount = Math.floor(Number(inputLoanAmount.value));
  if (amount > 0 && currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
    currentAccount.movements.unshift(amount);
    currentAccount.movementsDates.unshift(new Date().toISOString())
    updateUI(currentAccount);
  }
  else {
    return alert("You need at least a deposit of 10% of the loan amount");
  }

  inputLoanAmount.value = '';

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur(); // top make out of focus
});

//-----------------------------------------------------------

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount, sorted = !sorted);
})


//-------------------------TEST-SECTION----------------------
///////////////////////////xxxxxxxxx/////////////////////////
//-------------------------TEST-SECTION----------------------

let arr = ['a', 'b', 'c', 'd']
let arr1 = [1, 2, 3, 4, 5, 6]

//SLICE(srtIdx,endIdx) - return new array sliced array without deleting items form original array

//SPLICE(The index at which to start changing the array,The number of elements to remove from the array starting at the start index.) 
// return new array, and remove item from current array 

// Reverse() the current array and return the reference of current array
// concat(arr2) - return new concaved array
// at(-1) - return last element
// arr.forEach((curr,idx,array)=>{})
// map.forEach((value,key,map)=>{})
// set.forEach((value,_,set)=>{})
// arr.map((itm,i,arr)=>{}) / return new modified array
// arr.reduce((acc,curr,idx,arr)=>{},acc_start_value)
// arr.find((curr_item)={condition}) // return first element  
// arr.findIndex((curr_item)={condition}) // return index




