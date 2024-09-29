import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	titles: any[];
	constructor() {
		this.titles = [
			{
				name: "Kitchen Appliances",
				image_url: "../../../assets/images/kitchen_appliances.jpg",
			},
			{
				name: "Electronics",
				image_url: "../../../assets/images/electronics.jpg",
			},
			{
				name: "Fitness",
				image_url: "../../../assets/images/fitness.jpg",
			},
			{
				name: "Fruits",
				image_url: "../../../assets/images/fruits.jpg",
			},
			{
				name: "Vegetables",
				image_url: "../../../assets/images/vegetables.jpg",
			},
			{
				name: "Dairy",
				image_url: "../../../assets/images/dairy.avif",
			},
			{
				name: "Grains",
				image_url: "../../../assets/images/grains.avif",
			},
		];
	}
}
