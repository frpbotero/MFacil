import { Comment } from "./comments.model";
import { User } from "./user.model";

export interface Post{
    author:User;
    content:string;
    image:string;
    comments:Comment;
    interactions:Array<string>
}