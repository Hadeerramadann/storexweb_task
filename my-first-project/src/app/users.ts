export class users{
    public id: number;
    public name: string;
    public birthdate: Date;
    public email:string;
    public password:string;

    constructor(id:number,
                name:string,
                birthdate:Date,
                email:string,
                password:string
    ){
    this.id = id; 
    this.name = name;
    this.birthdate =birthdate ;
    this.email = email;
    this.password = password;
    
    }
}