import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from '../contact/contact.component';
import { PurchaseComponent } from '../purchase/purchase.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      /* this code creates multiple paths to different componeents to have a multipage website */
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'contact', component: ContactComponent },
      {
        path: 'contact/:id',
        canActivate: [ProductDetailGuard],
        component: ContactComponent
      },
      { path: 'purchase', component: PurchaseComponent },
      {
        path: 'purchase/:id',
        canActivate: [ProductDetailGuard],
        component: PurchaseComponent
      },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'profile/:id',
        canActivate: [ProductDetailGuard],
        component: ProfileComponent
      }
     
    ]),
    SharedModule
  ]
})
export class ProductModule { }
