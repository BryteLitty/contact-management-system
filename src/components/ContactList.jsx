import React, { useEffect, useState } from 'react';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm'; 

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = (newContact, index) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const editContact = (index, updatedContact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = updatedContact;
    setContacts(updatedContacts);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <ContactTable contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
    </div>
  );
};

export default ContactList;
