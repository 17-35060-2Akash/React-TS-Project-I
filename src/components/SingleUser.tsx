import React from 'react';
import { IUserType } from '../fakedata/fakeData1';

type user = {
    user: IUserType;
}

const SingleUser = ({ user }: user) => {
    const { id, name, email, age } = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{age} years old</p>
        </div>
    );
};

export default SingleUser;