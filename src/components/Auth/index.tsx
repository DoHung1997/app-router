import React, {ReactNode} from 'react';

type PropsType = {
    isOpen: boolean;
    setIsOpen: (d: boolean) => void
    children?: ReactNode
}

const AuthContainer: React.FC<PropsType> = (props) => {

    return (
        <div/>
    );
};

export default AuthContainer;