import React from 'react';
import Image from 'next/image';

import {SvgIconPropsType} from "@/models";

const SvgIcon = (props: SvgIconPropsType) => {
    const {src, width = 200, height = 80, alt} = props;

    return (
        <Image width={width} height={height} src={src} alt={alt ?? "icon"}/>
    );
};

export default SvgIcon;