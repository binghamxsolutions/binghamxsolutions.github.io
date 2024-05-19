import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', title: "bingham x solutions"},
  {path: 'contact', component: ContactComponent, title: "Contact | bingham x solutions"},
  {path: 'pricing', component: PricingComponent, title: "Pricing | bingham x solutions"},
  {path: '404', component: PageNotFoundComponent, title: "Page Not Found | bingham x solutions"},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
