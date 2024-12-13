'use client'

import React, {useMemo} from 'react';
import {useTranslations} from "next-intl";
import {Form} from "antd";
import {Button} from "@nextui-org/react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";

import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

import {AuthName} from "@/constants";
import {useAppContext} from "@/context/AppContext";
import {StoreStatus} from "@/store/store";
import {controlAuthStatus, selectAuth} from "@/store/auth/auth.slice";
import {useAppDispatch, useAppSelector} from "@/hooks";

type PropsType = {}

const AuthModal: React.FC<PropsType> = () => {

    const t = useTranslations()
    const dispatch = useAppDispatch()

    const {openAuthModal, setOpenAuthModal, authMode, setAuthMode} = useAppContext()

    const [form] = Form.useForm()

    const {statusAuthAction} = useAppSelector(selectAuth)

    const handleOpenChange = (open: boolean) => {
        setOpenAuthModal(open)
        if (!open) {
            form.resetFields()
            setAuthMode(AuthName.LOGIN)
            dispatch(controlAuthStatus(''))
        }
    }

    const memoAuthData = useMemo(() => {
        const footerNavigate = (
            <p>
                {authMode === AuthName.REGISTER ? t('AuthPage.dont_have_account') : t('AuthPage.already_have_account')}?
                <button
                    className={'hover:underline cursor-pointer ms-2 font-bold'}
                    onClick={() => setAuthMode(authMode === AuthName.REGISTER ? AuthName.LOGIN : AuthName.REGISTER)}
                >
                    {t(authMode === AuthName.REGISTER ? AuthName.LOGIN : AuthName.REGISTER)}
                </button>
            </p>
        )

        const AuthForm = authMode === AuthName.REGISTER ? RegisterForm : LoginForm

        return {
            title: t(authMode),
            bodyAuth: <AuthForm form={form} onClose={() => handleOpenChange(false)}/>,
            footerNavigate
        }
    }, [authMode, t])

    return (
        <Modal
            isOpen={openAuthModal}
            onOpenChange={handleOpenChange}
            placement={'top'}
            size={'xl'}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-center text-2xl my-6">
                            {memoAuthData.title}
                        </ModalHeader>
                        <ModalBody className={'px-[4rem]'}>
                            {memoAuthData.bodyAuth}
                        </ModalBody>
                        <ModalFooter className={'grid grid-cols-1 px-[4rem] text-center mb-6'}>
                            <Button
                                color="primary"
                                onPress={() => form.submit()}
                                style={{width: 'clamp(200px, 20%, 300px)'}}
                                className={'font-bold mx-auto'}
                                isLoading={statusAuthAction === StoreStatus.PENDING}
                            >
                                {memoAuthData.title}
                            </Button>

                            <div className={'mt-4'}>
                                {memoAuthData.footerNavigate}
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;