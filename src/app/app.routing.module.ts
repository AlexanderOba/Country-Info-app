import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountryDetailsComponent } from "./landing_page/country_details_page.component";
import { HomeComponent } from "./landing_page/home.component";
import { PersonsInputComponent } from "./persons/persons-input.component";

const routes: Routes = [
    { path: '' ,  component: HomeComponent },
    { path: 'input' , component: PersonsInputComponent },
    { path: 'country_details_page/:name' , component: CountryDetailsComponent }
]; 

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]  //we export this after coz it has been deconstructed
})
export class AppRoutingModule{}