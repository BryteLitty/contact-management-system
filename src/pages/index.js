import React from 'react';
import ContactForm from '@/components/ContactForm';
import ContactList from '@/components/ContactList';


const index = () => {
  return (
    <div className='container mx-auto'>
      {/* <ContactForm /> */}
      <ContactList />
    </div>
  )
}

export default index;