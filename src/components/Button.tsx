import React from 'react';

interface ButtonProp{
    children: string;
    onClick: any;
}

const Button: React.FC<ButtonProp> = ({children, onClick}) => {
    return (
        <>
            <button className='button' onClick={onClick}>{children}</button>
        </>
    );
}

export default Button;