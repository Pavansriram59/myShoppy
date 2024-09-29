import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../product";
import { Cart } from "../cart";

@Injectable({
	providedIn: "root",
})
export class CatalogueService {
	private apiUrl = "http://localhost:3000";
	constructor(private httpClient: HttpClient) {}

	getProducts() {
		return this.httpClient.get(`${this.apiUrl}/products`);
	}
	getCartDetails() {
		return this.httpClient.get(`${this.apiUrl}/cart`);
	}
	getProductsByCategory(category: string) {
		return this.httpClient.get(`${this.apiUrl}/products`).pipe(
			map((res: any) => {
				const products = res;
				return products.filter(
					(product: Product) => product.category === category
				);
			})
		);
	}

	addToCart(product: Cart) {
		this.httpClient.post(`${this.apiUrl}/cart`, product).subscribe({
			next: () => alert("Added to Cart Successfully!"),
			error: (err) => console.log("Error", err),
		});
	}
	
	updateCartItem(productId: any, cartItem: Cart) {
		this.httpClient
			.put<Cart>(`${this.apiUrl}/cart/${productId}`, cartItem)
			.subscribe({
				next: (res: any) =>
					console.log("Cart Updated Successfully!", res),
				error: (err) => console.log("Error", err),
			});
	}
}
