import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PortalComponent } from './portal/portal.component';


@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
