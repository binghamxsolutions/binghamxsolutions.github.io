import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';
import { ToTopButtonComponent } from './to-top-button/to-top-button.component';
import { UnsupportedMessageComponent } from './unsupported-message/unsupported-message.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToTopButtonComponent,
    UnsupportedMessageComponent,
    HomeComponent,
    ContactComponent,
    PricingComponent,
    IntakeFormComponent,
    ContactCardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
