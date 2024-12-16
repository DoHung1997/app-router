'use client'

import React from 'react';
import {Button} from "@nextui-org/react";
import {cookieGet} from "@/helpers";
import {StorageKey} from "@/constants";

const ViewPdf = () => {
    const handleGetToken = () => {
        const token = cookieGet(StorageKey.TOKEN)
        console.log('token', token)
    }

    return (
        <div>
            <Button onPress={handleGetToken}>
                Get Token
            </Button>
        </div>
    );
};

export default ViewPdf;