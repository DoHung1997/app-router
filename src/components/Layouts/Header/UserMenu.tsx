import React from 'react';
import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import {AccountDataType} from "@/models";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

const UserMenu = ({userData}: { userData: AccountDataType | null }) => {
    const t = useTranslations()

    if (!userData) return null

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">{t('AuthPage.signed_in_as')}</p>
                    <p className="font-semibold">{userData.email}</p>
                </DropdownItem>
                <DropdownItem key="document" className="h-14 gap-2">
                    <p className="">{t('DocumentPage.my_document')}</p>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    <Link href={'/auth/logout'} className={'w-full'}>
                        <p className={'w-full'}>
                            {t('log_out')}
                        </p>
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserMenu;