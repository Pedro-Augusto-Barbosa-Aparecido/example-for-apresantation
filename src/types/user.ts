import { DepartmentCreate } from './department';
import { AccountCreate } from "./account";

export type UserCreate = {
    name: string
    email: string
    id?: string

    account?: Array<AccountCreate>
    department?: Array<DepartmentCreate>

}

export type UserGetListRequest = {
    name: string

}

export type UserUpdate = {
    
}