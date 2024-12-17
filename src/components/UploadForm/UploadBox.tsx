'use client'

import React, {useRef} from 'react';
import {Upload, UploadProps} from "antd";
import {CloudUploadOutlined, PlusOutlined} from "@ant-design/icons";

import styles from "./UploadForm.module.scss";
import {Button} from "@nextui-org/react";
import {useTranslations} from "next-intl";

const {Dragger} = Upload;

const UploadBox = () => {
    const t = useTranslations("ViewerPage")

    const draggerRef = useRef<HTMLDivElement | null>(null);

    const propsUpload: UploadProps = {
        className: 'w-full h-full',
        openFileDialogOnClick: false
    }

    const handleClickDragger = () => {
        if (draggerRef.current) {
            const fileInput: HTMLInputElement | null = draggerRef.current.querySelector('input[type="file"]');
            if (fileInput) {
                fileInput.click();
            }
        }
    }

    return (
        <div className={`${styles.uploadBox}`} ref={draggerRef}>
            <Dragger {...propsUpload}>
                <p>
                    <CloudUploadOutlined className="text-[8rem]"/>
                </p>
                <p className="text-[1.5rem] font-bold my-1">
                    {t('click_or_drag_file_to_upload')}
                </p>

                <Button
                    className={`${styles.uploadButton} my-5 text-[1.3rem]`}
                    startContent={<PlusOutlined/>}
                    color={'danger'}
                    onPress={handleClickDragger}
                >
                    {t('choose_file')}
                </Button>
            </Dragger>

            <div>

            </div>
        </div>
    );
};

export default UploadBox;