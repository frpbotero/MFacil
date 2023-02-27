import { User } from "../user/user.model";

export interface Comment{
    author:User;
    content:string;
    interactions:Array<string>
}