import React from 'react';

interface ButtonProp{
    children: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProp> = ({children, onClick}) => {
    return (
        <>
            <button className='button' onClick={onClick}>{children}</button>
        </>
    );
}

export default Button;