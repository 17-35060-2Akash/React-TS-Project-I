import React from 'react';

type ButtonStyle = {
    btnStyle: React.CSSProperties;
}

const ButtonStyle = (props: ButtonStyle) => {
    return (
        <div>
            <h2 style={props.btnStyle}>Button Style</h2>

        </div>
    );
};

export default ButtonStyle;