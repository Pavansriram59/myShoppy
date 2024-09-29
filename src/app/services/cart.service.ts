import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cart } from "../cart";

@Injectable({
	providedIn: "root",
})
export class CartService {
	private apiUrl: string = "http://localhost:3000";
	constructor(private httpClient: HttpClient) {}

	getCartDetails() {
		return this.httpClient.get(`${this.apiUrl}/cart`);
	}

	updateCartItem(itemId: any, cartItem: Cart) {
		this.httpClient
			.put<Cart>(`${this.apiUrl}/cart/${itemId}`, cartItem)
			.subscribe({
				next: (res: any) =>
					console.log("Cart Updated Successfully!", res),
				error: (err) => console.log("Error", err),
			});
	}

	deleteCartItem(itemId: any) {
		return this.httpClient.delete(`${this.apiUrl}/cart/${itemId}`);
	}
}
