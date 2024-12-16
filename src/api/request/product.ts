import api from "@/api";
import {handleErrorApi} from "@/helpers";

export const getAllSeoProducts = async () => {
    try {
        const response = await api.get('/v1/seo/product', {
            pageSize: 9999,
            pageNumber: 1,
            search: ''
        })
        const promiseData = await response.data
        return promiseData.result.items
    } catch (error) {
        console.log('error', handleErrorApi(error as any))
        return []
    }
}


export const getAllProducts = async () => {
    try {
        const response = await api.get('/v1/product', {
            pageSize: 9999,
            pageNumber: 1,
            search: ''
        })
        const promiseData = await response.data
        return promiseData.result.items
    } catch (error) {
        return error
    }
}

export const getSeoProductById = async (id: string) => {
    try {
        const response = await api.get(`/v1/seo/product/${id}`)
        const promiseData = await response.data
        return promiseData.result
    } catch (error) {
        return error
    }
}