import { AccountCreate } from "./account";
import { DepartmentCreate } from "./department";

export type OutsourcingCreate = {
    legacy_sm: string

    department?: DepartmentCreate
    account?: AccountCreate

}