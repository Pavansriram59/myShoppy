import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CatalogueComponent } from "./components/catalogue/catalogue.component";
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", redirectTo: "", pathMatch: "full" },
	{ path: "catalogue/:category", component: CatalogueComponent },
	{ path: "cart", component: CartComponent },
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
	HomeComponent,
	CatalogueComponent,
	CartComponent,
	PageNotFoundComponent,
];
