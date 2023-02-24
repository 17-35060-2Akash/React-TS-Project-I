import React from 'react';

type UserProps = {
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
};

const UserV2 = ({ user }: UserProps) => {
    const { name, age, isRegistered, lang } = user;
    return (
        <div style={{
            border: "1px solid skyblue",
            margin: "30px",
            padding: "20px",
            paddingBottom: "40px"
        }}>
            <h2>{name}</h2>
            {/* <p>na.akash715@gmail.com</p> */}
            <p>{age} years old</p>
            <p>{isRegistered ? "Varified" : "Unverified"}</p>
            <h3>He can speak:</h3>
            {
                lang.map((singleOne, idx) => <span key={idx}>{singleOne}, </span>)
            }

        </div>
    );
};

export default UserV2;