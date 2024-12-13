import React, {ReactNode} from 'react';

import styles from './DefaultLayout.module.scss'
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";

const DefaultLayout = ({children}: { children: ReactNode }) => {
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