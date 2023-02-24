import React from 'react';

type UserProps = { name: string, age: number, isRegistered: boolean };

const User = ({ name, age, isRegistered }: UserProps) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>na.akash715@gmail.com</p>
            <p>{age} years old</p>
            <p>{isRegistered ? "Varified" : "Unverified"}</p>
        </div>
    );
};

export default User;