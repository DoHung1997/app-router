import {StoreStatus} from "@/store/store";

export type ProductInitStateType = {
    statusProductAction: StoreStatus | ''
    products: ProductModel[]
}


export type ProductModel = {
    id: string
    productName: string
    description: string
    price: number
    salePrice: number
    starNumber: number
    inventory: number
    thumbnail: string
    reviewIds: string[]
    sold: number
    measurements: string
    disclaimers: string
}