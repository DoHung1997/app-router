import React from 'react';
import {svgIcons} from "@/assest";
import SvgIcon from "@/components/SvgIcon";

const LoadingIcon = () => {
    return (
        <SvgIcon src={svgIcons.loading} width={100} height={100}/>
    );
};

export default LoadingIcon;