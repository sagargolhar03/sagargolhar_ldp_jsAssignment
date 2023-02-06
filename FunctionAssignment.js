//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.


function addContact(id, refreshCallback) {
    refreshCallback();
}

function refreshContactList() {
    console.info('Hello World');
}

addContact(1, refreshContactList);