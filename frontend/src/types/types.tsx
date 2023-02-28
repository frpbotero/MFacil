export type Tuser = {
    id?:string;
    name:string;
    profession:string;
    dateNasc:string;
    resume:string;
    linkPortfolio:string;
    email:string;
    password:string;
    createdAt:String
}

export type Tcomment={
    id?:string;
    author:string;
    post:string;
    content:string;
    interactions:Array<string>
}
export type Tpost={
    author:String;
    content:String;
    interactions?:Array<String>
    comment?:Array<String>
}
