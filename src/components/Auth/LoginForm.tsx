'use client'
import React, {useMemo} from 'react';
import {useTranslations} from "next-intl";
import {Input} from "@nextui-org/input";
import {Form, FormInstance} from "antd";

import InputPassword from "@/components/CustomUI/InputPassword";
import {useAppContext} from "@/context/AppContext";

import {usePathname, useRouter} from "@/i18n/routing";
import {loginAuthAction} from "@/store/auth/auth.action";
import {REGEX_EMAIL, REGEX_PASSWORD} from "@/constants";
import {PayloadLogin} from "@/models";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {selectAuth} from "@/store/auth/auth.slice";
import {StoreStatus} from "@/store/store";

type PropsType = {
    form: FormInstance
    onClose: () => void
}

const LoginForm: React.FC<PropsType> = ({form, onClose}) => {
    const t = useTranslations();
    const dispatch = useAppDispatch()
    const {refresh} = useRouter()
    const pathName = usePathname()

    const {statusAuthAction} = useAppSelector(selectAuth)
    const {openNotification, setUserData} = useAppContext()

    const handleFinish = (values: PayloadLogin) => {
        dispatch(loginAuthAction(values))
            .unwrap()
            .then((response) => {
                setUserData(response.user)
                openNotification('success', {
                    message: t('AuthPage.login_success') + "!"
                })
                onClose()
                console.log('pathName', pathName)
                refresh()
            })
            .catch((err) => {
                const errorText = 'AuthPage.' + err
                openNotification('error', {
                    message: t(errorText)
                })
            })
    }

    const memoDisable = useMemo(() => {
        return statusAuthAction === StoreStatus.PENDING
    }, [statusAuthAction])

    return (
        <Form
            form={form}
            labelCol={{span: 4}}
            wrapperCol={{span: 16, offset: 1}}
            onFinish={handleFinish}
        >
            <Form.Item
                className={'mb-[30px]'}
                label={t('email')}
                name={'username'}
                required
                rules={[
                    {
                        required: true,
                        message: t('AuthPage.email_is_required')
                    },
                    {
                        pattern: REGEX_EMAIL,
                        message: t('AuthPage.email_is_invalid')
                    },
                ]}
            >
                <Input disabled={memoDisable}/>
            </Form.Item>
            <Form.Item
                label={t('password')}
                name={'password'}
                required
                rules={[
                    {
                        required: true,
                        message: t("AuthPage.password_is_required")
                    },
                    {
                        pattern: REGEX_PASSWORD,
                        message: t("AuthPage.password_is_invalid")
                    },
                ]}
            >
                <InputPassword disabled={memoDisable}/>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;