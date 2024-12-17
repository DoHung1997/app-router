import React, {ReactNode} from 'react';

import styles from './DefaultLayout.module.scss'
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import {cookies} from "next/headers";
import {StorageKey} from "@/constants";
import {cookieSet} from "@/helpers";

const DefaultLayout = ({children}: { children: ReactNode }) => {
    const cookieStore = cookies()
    const token = cookieStore.get(StorageKey.TOKEN)

    if (token) {
        cookieSet(StorageKey.TOKEN, token.value)
    }

    return (
        <div className={styles.pageContainer}>
            <Header/>
            <main className={styles.contentContainer}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default DefaultLayout;