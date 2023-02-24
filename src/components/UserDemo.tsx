import React from 'react';
import { IUserType } from '../fakedata/fakeData1';
import SingleUser from './SingleUser';

type users = {
    users: IUserType[];
}

const UserDemo = ({ users }: users) => {
    // console.log(users);
    return (
        <div>
            {
                users.map(user =>
                    <SingleUser key={user.id} user={user}></SingleUser>)
            }
        </div>
    );
};

export default UserDemo;