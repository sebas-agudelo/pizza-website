import { IProducts } from "./products";

export interface ICategories {
    category_name: string;
    category_img: string;
    products: IProducts[];
}