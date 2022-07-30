import { Application } from "src/applications/entities/application.entity";

export class User {
    id: number;
    email: string;
    password: string;
    administrator: boolean;
    applications: Application[];
}
