import React from 'react';
import LoadingIcon from "@/components/SvgIcon/LoadingIcon";

const AppLoading = () => {
    return (
        <p className={'absolute top-1/2 left-1/2 z-10 min-h-[300px]'}>
            <LoadingIcon/>
        </p>
    );
};

export default AppLoading;