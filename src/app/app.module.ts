import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CatalogueService } from "./services/catalogue.service";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		routingComponents
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [CatalogueService],
	bootstrap: [AppComponent],
})
export class AppModule {}
