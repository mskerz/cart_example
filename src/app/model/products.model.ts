// To parse this data:
//
//   import { Convert } from "./file";
//
//   const products = Convert.toProducts(json);

export interface Products {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
    quantity_order:number;
}

export interface Rating {
    rate:  number;
    count: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProducts(json: string): Products[] {
        return JSON.parse(json);
    }

    public static productsToJson(value: Products[]): string {
        return JSON.stringify(value);
    }
}
