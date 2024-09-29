import { Component } from "@angular/core";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
	titles: any[];
	navItems: any[];
	constructor() {
		this.titles = [
			"Kitchen Appliances",
			"Electronics",
			"Fitness",
			"Fruits",
			"Vegetables",
			"Dairy",
			"Grains",
		];
		this.navItems = ["Deals", "What's New", "Delivery"];
	}
}
