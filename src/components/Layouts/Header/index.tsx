'use client'

import React, {useMemo} from 'react';
import {Link} from "@/i18n/routing";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";

import styles from './Header.module.scss'
import UserMenu from "@/components/Layouts/Header/UserMenu";
import AuthControl from "@/components/Layouts/Header/AuthControl";

import {useAppContext} from "@/context/AppContext";


const Header = () => {
    const {userData} = useAppContext()

    const memoAuthMenu = useMemo(() => {
        return userData ? <UserMenu userData={userData}/> : <AuthControl/>
    }, [userData])

    return (
        <Navbar
            shouldHideOnScroll
            maxWidth={'full'}
            isBordered
            className={`${styles.navbarContainer}`}
            classNames={{
                wrapper: 'px-0'
            }}
        >
            <NavbarBrand className="">
                <Link href="/" aria-current="page">
                    <p className="font-bold text-inherit">ACME</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/*{*/}
                {/*    HEADER_ROUTES_DATA.map((item) => {*/}
                {/*        return (*/}
                {/*            <NavbarItem*/}
                {/*                key={item.id}*/}
                {/*                isActive={pathname.includes(item.name)}*/}
                {/*                className={'text-[1.1rem] me-2 uppercase hover:text-primary-80 hover:cursor-pointer'}*/}
                {/*            >*/}
                {/*                <Link href={item.href}>*/}
                {/*                    {t(`${item.name}`)}*/}
                {/*                </Link>*/}
                {/*            </NavbarItem>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {memoAuthMenu}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;