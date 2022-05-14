import { OutsourcingCreate } from "./outsourcing";
import { UserCreate } from "./user";

export type DepartmentCreate = {
    name: string

    users?: Array<UserCreate>
    outsourcing?: Array<OutsourcingCreate>

}