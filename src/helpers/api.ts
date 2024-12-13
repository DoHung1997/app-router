import {AxiosError, AxiosResponse} from "axios";

export const handleResponse = async (response: AxiosResponse) => await response.data.result.items

export const handleErrorApi = (err: AxiosError) => {
    let message = '';
    if (err.status === 500 || !err.status) {
        return "server_error"
    }
    const errResponse: any = err.response
    message = errResponse ? errResponse.data.detail : err.message;
    return message
}


