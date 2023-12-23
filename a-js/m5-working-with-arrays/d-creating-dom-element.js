// We can dynamically generate HTML elements
const alice = {
    name: 'Alice Doe',
    age: 21,
    birthYear: 1990,
    friends: ['Bob', 'Charlie', 'Dave', 'Eve'],
}

// First, select the div that you want to insert the html into
const movementContainer = document.querySelector('.movements');

const displayFriendsFor = function (person) {

    // This is an important method
    // This returns the entire inner html inside the movementContainer
    console.log(movementContainer.innerHTML);

    /*
    Prints:
    <div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">4 000€</div>
        </div>
        <div class="movements__row">
          <div class="movements__type movements__type--withdrawal">
            1 withdrawal
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">-378€</div>
    </div>
     */

    // We looked at a similar property called 'textContent' earlier. That returned only the text, innerHTML returns the entire HTML
    console.log(movementContainer.textContent);
    /*
    Prints:
    2 deposit
          3 days ago
          4 000€
            1 withdrawal
          24/01/2037
          -378€
     */

    // Here, we are using it as a setter, removing the existing HTML.
    movementContainer.innerHTML = '';
    console.log(movementContainer.innerHTML); // Prints the empty string

    // Now we loop over each of the friends, adding a new div containing the friend name into selected element
    person.friends.forEach(
        function (friend, idx) {
            const html = `<div class="movements__row">Friend ${idx + 1}: ${friend}</div>`;
            // We use the insertAdjacentHTML to add HTML
            // 'afterbegin' denotes the position where you want to insert HTML.
            // There are 4 different places where html can be inserted, check MDN
            movementContainer.insertAdjacentHTML("afterbegin", html);
        })
}

displayFriendsFor(alice);