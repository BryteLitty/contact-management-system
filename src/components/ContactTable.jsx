import React from 'react';

const ContactTable = ({ contacts, editContact, deleteContact }) => {
  return (
    <div className='container mx-auto my-32'>
      <table className='w-full border border-gray-300'>
        <thead className='bg-gray-200'>
          <tr className='text-left'>
            <th className='p-2'>Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Phone Number</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className='p-2'>{contact && contact.name}</td>
              <td className='p-2'>{contact && contact.email}</td>
              <td className='p-2'>{contact && contact.phoneNumber}</td>
              <td className='p-2'>
                <button
                  onClick={() => editContact(index, contact)}
                  className='bg-blue-500 text-white px-4 py-2 mr-2 rounded'
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteContact(index)}
                  className='bg-red-500 text-white px-4 py-2 rounded'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
