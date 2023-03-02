export type Tuser = {
    id?:String;
    name?:String;
    profession?:String;
    dateNasc?:String;
    resume?:String;
    linkPortfolio?:String;
    email?:String;
    password?:String;
    confirmPassword?:String;
    createdAt?:Date
    
}

export type Tcomment={
    id?:String;
    author:String;
    post:String;
    content:String;
    interactions:Array<String>
    map?:Array<Object>|undefined
}
export type Tpost={
    author:String;
    content:String;
    interactions?:Array<String>;
    comment?:Array<String>;
    map?:Array<Object>
}
