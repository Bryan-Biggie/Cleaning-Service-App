import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { QuoteComponent } from './pages/contact/quote/quote.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:id', component: ServiceDetailsComponent }, // Route with parameter
  { path: 'contact', component: ContactComponent },
  { path: 'quotation', component: QuoteComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
