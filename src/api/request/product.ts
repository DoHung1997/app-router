import api from "@/api";
import {handleResponse} from "@/helpers";

export const getAllSeoProducts = async () => {
    try {
        const response = await api.get('/v1/seo/product', {
            pageSize: 9999,
            pageNumber: 1,
            search: ''
        })
        return handleResponse(response)
    } catch (error) {
        return error
    }
}


export const getAllProducts = async () => {
    try {
        const response = await api.get('/v1/product', {
            pageSize: 9999,
            pageNumber: 1,
            search: ''
        })
        return handleResponse(response)
    } catch (error) {
        return error
    }
}

export const getSeoProductById = async (id: string) => {
    try {
        const response = await api.get(`/v1/seo/product/${id}`)
        return handleResponse(response)
    } catch (error) {
        return error
    }
}