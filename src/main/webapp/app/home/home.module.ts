import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomJhipsterSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CustomJhipsterSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class CustomJhipsterHomeModule {}
