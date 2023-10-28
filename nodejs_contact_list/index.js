const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contacts = require('./data.json');

const main = () => {
    console.log('Welcome to Contact Manager');
    console.log('1. Add Contact');
    console.log('2. View Contacts');
    console.log('3. Search Contact');
    console.log('4. Exit');
    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                addContact();
                break;
            case '2':
                viewContacts();
                break;
            case '3':
                searchContact();
                break;
            case '4':
                rl.close();
                break;
            default:
                main();
        }
    });
    
};

const addContact = () => {
    rl.question('What is your first name? ', (fname) => {
    rl.question('What is your number? ', (number) => {
        contacts.push({ name: fname, number: number });
        main();
    });
});
};


const viewContacts = () => {
    console.log('Your contacts are: ');
    contacts.forEach((contact) => {
        console.log(`Name: ${contact.name} Number: ${contact.number}`);
        main();
    });
};

const searchContact = () => {
    rl.question('Enter name to search: ', (name) => {
        const contact = contacts.find((contact) => contact.name === name);
        if (contact) {
            console.log(`Name: ${contact.name} Number: ${contact.number}`);
            main();
        } else {
            console.log('Contact not found');
            main();
        }
    });
};

main();

