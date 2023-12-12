export const saveContactToLocalstorage = (contact) => {
    const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const updatedContacts = [...existingContacts, contact];

    // Save the updated contacts array to local storage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
};


