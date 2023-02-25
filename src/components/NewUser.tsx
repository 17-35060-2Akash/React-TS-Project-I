import React, { useState } from 'react';

const NewUser = () => {
    const [userName, setUserName] = useState('');
    const [showName, setShowName] = useState<true | false>(false);

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setUserName(name);

    };

    const handleShowName = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShowName(!showName);
    };
    return (
        <div>
            <h2>Create New User</h2>
            <input type="text" placeholder='Enter user name'
                name="" id="" value={userName}
                onChange={handleUserNameChange} />

            <button onClick={handleShowName}>Show Name</button>
            <p>{showName ? userName : ''}</p>
        </div>
    );
};

export default NewUser;