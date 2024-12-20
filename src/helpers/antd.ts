import {UploadFile} from 'antd/lib';

export const customRequestAntd = ({file, onSuccess}: any) => {
    setTimeout(() => {
        if (onSuccess) onSuccess('custom');
    }, 0);
};

export const getBase64 = (file: any) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
        src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj as any);
            reader.onload = () => resolve(reader.result as string);
        });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
};


export const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

// export const trimValidator = (rule: RuleObject, value: StoreValue, messErr: string) => {
//   if (value.trim() === '') {
//     return Promise.reject(messErr);
//   }
//   return Promise.resolve();
// };

export const arraysMatch = (arr1: any[], arr2: any[]): boolean => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const idMap = new Map(arr2.map(item => [item.id, true]));
    return arr1.every(file => idMap.has(file.fileId));
};