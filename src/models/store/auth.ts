import {StoreStatus} from "@/store/store";
import {AccountRoles} from "@/constants";

export type AuthInitStateType = {
    statusAuthAction: StoreStatus | ''
    user: AccountDataType | null
}

export type AccountDataType = {
    company: string
    companyWebsite: string
    country: string
    createdOn: string | null
    email: string
    emailConfirmed: boolean
    firstName: string
    id: string
    lastName: string
    roles: AccountRoles[]
}

export type TokenResponse = {
    accessToken: string
    expiresIn: number
    refreshToken: string
    tokenType: string
}

export type PayloadLogin = {
    username: string
    password: string
}

export type ResponseLogin = TokenResponse & {
    user: AccountDataType
}

export type PayloadRegister = {

}