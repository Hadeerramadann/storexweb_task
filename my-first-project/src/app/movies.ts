export class movies{
    public id: number;
    public title: string;
    public 	description: string;
    public Rate: number;
    public image: string;
    public category_id : number;

    
    

    constructor(id:number,
     title:string,
 	 description: string,
     Rate: number,
     image: string,
     category_id : number,
               
    ){
    this.id = id; 
    this.title = title;
    this.description = description;
    this.Rate = Rate;
    this.image = image;
    this.category_id = category_id;

    
    
    }
}