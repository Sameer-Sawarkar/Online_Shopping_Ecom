import { Category } from "./Category";
import { Retailer } from "./Retailer";

export class Product{

    product_id:number=0;
    name :string="";
    description:string ="";
	price:number = 0;
    stock:number = 0;
	available:boolean = true;
	imageUrl:string ="";
	category!: Category;
	retailer!: Retailer;
}