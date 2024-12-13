import React, {useMemo} from 'react';
import {Col, Form, FormInstance, Row} from "antd";
import {useTranslations} from "next-intl";
import {Input} from "@nextui-org/input";

import {REGEX_EMAIL, REGEX_PASSWORD, REGEX_PHONE_NUMBER} from "@/constants";
import InputPassword from "@/components/CustomUI/InputPassword";
import {useAppSelector} from "@/hooks";
import {selectAuth} from "@/store/auth/auth.slice";
import {StoreStatus} from "@/store/store";

type PropsType = {
    form: FormInstance
    onClose: () => void
}

const RegisterForm: React.FC<PropsType> = ({form, onClose}) => {
    const t = useTranslations()
    const {statusAuthAction} = useAppSelector(selectAuth)

    const handleFinish = (values: any) => {
        console.log('register values', values)
        onClose()
    }

    const memoDisable = useMemo(() => {
        return statusAuthAction === StoreStatus.PENDING
    }, [statusAuthAction])

    return (
        <Form
            form={form}
            onFinish={handleFinish}
            layout={'vertical'}
        >
            <Row gutter={[30, 0]}>
                <Col span={24} sm={12}>
                    <Form.Item
                        className={'mb-[30px]'}
                        label={t('first_name')}
                        name={'firstName'}
                        required
                        rules={[
                            {
                                required: true,
                                message: t('AuthPage.first_name_is_required')
                            },
                            {
                                type: 'string',
                                max: 10,
                                min: 3,
                                message: t('AuthPage.first_name_is_too_long_short')
                            },
                        ]}
                    >
                        <Input disabled={memoDisable}/>
                    </Form.Item>
                </Col>
                <Col span={24} sm={12}>
                    <Form.Item
                        className={'mb-[30px]'}
                        label={t('last_name')}
                        name={'lastName'}
                        required
                        rules={[
                            {
                                required: true,
                                message: t('AuthPage.last_name_is_required')
                            },
                            {
                                type: 'string',
                                max: 10,
                                min: 3,
                                message: t('AuthPage.last_name_is_too_long_short')
                            },
                        ]}
                    >
                        <Input disabled={memoDisable}/>
                    </Form.Item>
                </Col>
                <Col span={24} sm={12}>
                    <Form.Item
                        className={'mb-[30px]'}
                        label={t('company')}
                        name={'company'}
                        required
                        rules={[
                            {
                                required: true,
                                message: t('AuthPage.company_is_required')
                            },
                        ]}
                    >
                        <Input disabled={memoDisable}/>
                    </Form.Item>
                </Col>

                <Col span={24} sm={12}>
                    <Form.Item
                        className={'mb-[30px]'}
                        label={t('phone')}
                        name={'phoneNumber'}
                        rules={[
                            {
                                pattern: REGEX_PHONE_NUMBER,
                                message: t('AuthPage.phone_number_is_invalid')
                            }
                        ]}
                    >
                        <Input disabled={memoDisable}/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item
                className={'mb-[30px]'}
                label={t('email')}
                name={'email'}
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
                className={'mb-2'}
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
            <p className={'mb-3'}>
                <span className={'text-danger font-bold'}>*</span>{" "}
                {t("AuthPage.password_rule")}
            </p>


            <Form.Item
                label={t('confirm_password')}
                name={'confirmPassword'}
                required
                rules={[
                    {
                        required: true,
                        message: t("AuthPage.password_is_required")
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error(t('AuthPage.confirm_password_not_match')));
                        },
                    }),
                ]}
            >
                <InputPassword disabled={memoDisable}/>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;