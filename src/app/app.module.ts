import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './core/header/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { AboutComponent } from './pages/about/about.component';
import { MainAboutComponent } from './pages/about/main-about/main-about.component';
import { ServicesComponent } from './pages/services/services.component';
import { MainServicesComponent } from './pages/services/main-services/main-services.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ModalComponent } from './pages/projects/modal/modal.component';
import { MainProjectsComponent } from './pages/projects/main-projects/main-projects.component';
import { NewLetterComponent } from './pages/home/new-letter/new-letter.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { MainPricingComponent } from './pages/pricing/main-pricing/main-pricing.component';
import { TeamComponent } from './pages/team/team.component';
import { MainTeamComponent } from './pages/team/main-team/main-team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { FootComponent } from './core/footer/foot/foot.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './pages/contact/quote/quote.component'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationModalComponent } from './pages/contact/confirmation-modal/confirmation-modal.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { MainTestimonialComponent } from './pages/testimonial/main-testimonial/main-testimonial.component';
import { MainContactComponent } from './pages/contact/main-contact/main-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Main2AboutComponent } from './pages/about/main2-about/main2-about.component';
import { Main2ServicesComponent } from './pages/services/main2-services/main2-services.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { FaqSectionComponent } from './pages/testimonial/faq-section/faq-section.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    MainAboutComponent,
    ServicesComponent,
    MainServicesComponent,
    ProjectsComponent,
    ModalComponent,
    MainProjectsComponent,
    NewLetterComponent,
    PricingComponent,
    MainPricingComponent,
    TeamComponent,
    MainTeamComponent,
    TestimonialComponent,
    FootComponent,
    ContactComponent,
    QuoteComponent,
    ConfirmationModalComponent,
    NotFoundComponent,
    PageHeaderComponent,
    MainTestimonialComponent,
    MainContactComponent,
    Main2AboutComponent,
    Main2ServicesComponent,
    ServiceDetailsComponent,
    FaqSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatExpansionModule, // Import Angular Material Expansion module
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
