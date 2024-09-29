import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cart } from "src/app/cart";
import { Product } from "src/app/product";
import { CatalogueService } from "src/app/services/catalogue.service";

@Component({
	selector: "app-catalogue",
	templateUrl: "./catalogue.component.html",
	styleUrls: ["./catalogue.component.css"],
})
export class CatalogueComponent {
	cartDetails: any;
	selectedCategory: any;
	catalogueProducts: any;
	filteredProducts: any;

	constructor(
		private catalogueService: CatalogueService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.selectedCategory = params.get("category");
			this.catalogueService
				.getProductsByCategory(this.selectedCategory)
				.subscribe((products: Product[]) => {
					this.catalogueProducts = products;
					this.filteredProducts = products;
					// console.log(this.catalogueProducts);
				});
		});

		this.catalogueService
			.getCartDetails()
			.subscribe((data) => (this.cartDetails = data));
	}

	addProductToCart(product: Product) {
		const cartItem: Cart = {
			...product,
			quantity: 1,
		};
		if (!this.cartDetails) this.catalogueService.addToCart(cartItem);
		else {
			const existingCartItem = this.cartDetails.find(
				(item: Cart) => item.id === product.id
			);
			if (existingCartItem) {
				if (existingCartItem.quantity < 10) {
					existingCartItem.quantity += 1;
					this.catalogueService.updateCartItem(
						product.id,
						existingCartItem
					);
					alert("Added to Cart Successfully!");
				} else
					alert(
						"Can't add  more than 10 items of same product to cart"
					);
			} else this.catalogueService.addToCart(cartItem);
		}
	}

	filterProductsByPrice(minPrice: any, maxPrice: any) {
		this.filteredProducts = this.catalogueProducts;
		this.filteredProducts = this.catalogueProducts.filter(
			(product: Product) =>
				product.price >= minPrice && product.price <= maxPrice
		);
	}

	sortProducts(sortBy: string) {
		if (sortBy === "name") {
			this.filteredProducts = this.filteredProducts.sort(
				(a: any, b: any) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				}
			);
		} else if (sortBy === "price")
			this.filteredProducts = this.filteredProducts.sort(
				(a: any, b: any) => a.price - b.price
			);
	}
}
