import React, { useState } from 'react';

type UserType = { [key: string]: any };

const NewUserForm = () => {
    const [user, setUser] = useState<UserType>({});

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user)

    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const field: string = event.target.name;
        const value: string = event.target.value;
        // console.log(field, value);
        let newUser: UserType = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">
                        <h3>Name:</h3>
                        <input onBlur={handleInputBlur} type="text" name="name" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        <h3>Email:</h3>
                        <input onBlur={handleInputBlur} type="email" name="email" />
                    </label>
                </div>
                <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default NewUserForm;