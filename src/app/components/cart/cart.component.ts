import { Component } from "@angular/core";
import { Cart } from "src/app/cart";
import { CartService } from "src/app/services/cart.service";

@Component({
	selector: "app-cart",
	templateUrl: "./cart.component.html",
	styleUrls: ["./cart.component.css"],
})
export class CartComponent {
	cartTitles:any[]=["Product","Description","Quantity","Total"]
	cartItems: Cart[] = [];
	totalAmount: number = 0;

	constructor(private cartService: CartService) {}

	ngOnInit() {
		this.cartService.getCartDetails().subscribe((data: any) => {
			this.cartItems = data;
			this.totalAmount = this.calcTotalAmount();
		});
	}

	decreaseQuant(itemId: any, cartItem: Cart) {
		let quant: any = cartItem.quantity;
		if (quant > 1) {
			cartItem.quantity--;
			this.updateTotalAmount();
			this.cartService.updateCartItem(itemId, cartItem);
			
		} else {
			if (window.confirm("Do you want to delete the item?")) {
				this.deleteItem(itemId);
			}
		}
	}

	increaseQuant(itemId: any, cartItem: Cart) {
		let quant: any = cartItem.quantity;
		if (quant > 0 && quant < 10) {
			cartItem.quantity++;
			this.updateTotalAmount();
			this.cartService.updateCartItem(itemId, cartItem);
		} else alert("Items not more than 10");
	}

	deleteItem(itemId: any) {
		this.cartService.deleteCartItem(itemId).subscribe(() => {
			this.cartItems = this.cartItems.filter(
				(item) => item.id !== itemId
			);
			if (this.cartItems.length === 0) this.cartItems = [];
		});
	}

	updateTotalAmount() {
		this.totalAmount = this.calcTotalAmount();
	}

	calcTotalAmount() {
		let totalAmount = 0;
		this.cartItems.forEach((item) => {
			totalAmount += item.price * item.quantity;
		});
		return totalAmount;
	}
}
