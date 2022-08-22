const guestNameInput = document.querySelector('#guest-name');
const guestList = document.querySelector('#guest-list');
const addFirstBtn = document.querySelector('#addFirst');
const addLastBtn = document.querySelector('#addLast');
const removeFirstBtn = document.querySelector('#removeFirst');
const removeLastBtn = document.querySelector('#removeLast');
const clearListBtn = document.querySelector('#clearList');

addFirstBtn.addEventListener('click', () =>
    addFirstGuest(guestNameInput.value)
);

addLastBtn.addEventListener('click', () => addLastGuest(guestNameInput.value));

removeFirstBtn.addEventListener('click', () => removeFirst());

removeLastBtn.addEventListener('click', removeLast);

clearListBtn.addEventListener('click', () => clearList());

let guestListArray = [];

const printGuestList = () => {
    clearList();
    guestListArray.forEach((guest) => {
        const newDiv = document.createElement('div');
        const newContent = document.createTextNode(guest);
        newDiv.appendChild(newContent);
        guestList.appendChild(newDiv);
    });
};

const addFirstGuest = (guestName) => {
    guestListArray.unshift(guestName);
    printGuestList();
};

const addLastGuest = (guestName) => {
    guestListArray.push(guestName);
    printGuestList();
};

const removeFirst = () => {
    guestListArray.shift();
    printGuestList();
};

//Same as removeFirst()
function removeLast() {
    guestListArray.pop();
    printGuestList();
}

const clearList = () => {
    guestList.replaceChildren();
};
