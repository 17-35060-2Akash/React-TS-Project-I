import React, { useState, ChangeEvent } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = { name, email }
        console.log(newUser);
    };

    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">
                        Name:
                        <input type="text" name="" id="name"
                            defaultValue={name}
                            onChange={handleNameChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email:
                        <input type="email" name="" id="email"
                            defaultValue={email}
                            onChange={handleEmailChange} required />
                    </label>
                </div>
                <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default UserForm;