import React from 'react';
import {Button} from "@nextui-org/react";
import {useTranslations} from "next-intl";
import {useAppContext} from "@/context/AppContext";

const AuthControl = () => {
    const t = useTranslations()
    const {setOpenAuthModal} = useAppContext()

    return (
        <>
            <Button
                color={"primary"}
                variant={"shadow"}
                onPress={() => setOpenAuthModal(true)}
            >
                {t('login')} / {t('register')}
            </Button>
        </>
    );
};

export default AuthControl;