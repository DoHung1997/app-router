import React, {useCallback, useState} from 'react';
import {Input, InputProps} from "@nextui-org/input";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";

const InputPassword: React.FC<InputProps> = ({...inputProps}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = useCallback(() => setIsVisible(!isVisible), [isVisible]);

    return (
        <Input
            {...inputProps}
            endContent={
                <button
                    className="focus:outline-none" type="button" onClick={toggleVisibility}
                    aria-label="toggle password visibility"
                >
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                    ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
        />
    );
};

export default InputPassword;