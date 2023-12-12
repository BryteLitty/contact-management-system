import React, { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation using Regular Expression
        addContact({ name, email, phoneNumber });
        setName('');
        setEmail('');
        setPhoneNumber('');
    }

  return (
    <div className='container mx-auto my-32'>
        <form className='w-[40%] mx-auto'>
            <div className="my-5">
                <label className='font-bold'>Name:</label>
                <div className='mt-2'>
                    <input 
                        type="text" 
                        value={name}
                        placeholder='Enter Name'
                        onChange={(e) => setName(e.target.value)} 
                        required
                        className='w-full bg-slate-50 p-4 border border-sky-500"'
                    />
                </div>
            </div>

            <div className="my-5">
                <label className='font-bold'>Email:</label>
                <div className='mt-2'>
                    <input 
                        type="email" 
                        value={email}
                        placeholder='Enter Email Address'
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                        className='w-full bg-slate-50 p-4 border border-sky-500"'
                    />
                </div>
            </div>

            <div className="my-5">
                <label className='font-bold'>Phone Number:</label>
                <div className='mt-2'>
                    <input 
                        type="number" 
                        value={phoneNumber}
                        placeholder='+233 249 013 159'
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        required
                        className='w-full bg-slate-50 p-4 border border-sky-500"'
                    />
                </div>
            </div>

            <div>
                <button type='submit' className='bg-orange-600 font-bold text-white text-2xl text-center w-full p-3'>
                    Add Contact
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm;