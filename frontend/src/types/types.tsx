export type user = {
    name:string;
    profession:string;
    dateNasc:string;
    resume:string;
    linkPortfolio:string;
    email:string;
    password:string;
    createdAt:String
}

export type comment={
    author:string;
    post:string;
    content:string;
    interactions:Array<string>
}
export type post={
    author:String;
    content:String;
    interactions?:Array<String>
}
