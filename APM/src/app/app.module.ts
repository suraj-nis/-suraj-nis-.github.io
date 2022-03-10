import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    /* Tells what the module will use which compoenents */
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    PurchaseComponent,
    ProfileComponent
  ],
  imports: [
    /* imports the routing material */
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    RouterModule.forRoot([
      { path: 'purchase', component: PurchaseComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
