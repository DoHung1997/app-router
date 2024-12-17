import React from 'react';
import UploadForm from "../UploadForm";

const PDFViewerContainer = () => {
    return (
        <>
            {/*  Upload file form  */}
            <div className={'w-full bg-secondary15 py-20 px-5 sm:px-6 md:px-12 lg:px-20'}>
                <UploadForm/>
            </div>
        </>
    );
};

export default PDFViewerContainer;