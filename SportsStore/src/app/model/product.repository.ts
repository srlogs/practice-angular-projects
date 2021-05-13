import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private dataSource: StaticDataSource) {
        this.dataSource.getProducts().subscribe((data: any) => {
            this.products = data;
            this.categories = data.map((p: any) => p.category)
                .filter((c: any, index: number, array: any) => array.indexOf(c) == index).sort();
        });
    }
    getProducts(category: string = ""): Product[] {
        return this.products
            .filter(p => category == "" || category == p.category);
    }

    getProduct(id: number) {
        return this.products.find((p: any) => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}