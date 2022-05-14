import { OutsourcingCreate } from "./outsourcing";
import { UserCreate } from "./user";

export type DepartmentCreate = {
    name: string

    user?: Array<UserCreate>
    outsourcing?: Array<OutsourcingCreate>

}