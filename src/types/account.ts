import { OutsourcingCreate } from './outsourcing';
import { UserCreate } from './user';

export type AccountCreate = {
    name: string,
    email: string

    user?: UserCreate
    outsourcing?: Array<OutsourcingCreate>

}

export type AccountGetListRequest = {
    name?: string

}

export type AccountUpdate = {
    id?: string
    name: string
    email: string

    user?: UserCreate
    outsourcing?: Array<OutsourcingCreate>

}