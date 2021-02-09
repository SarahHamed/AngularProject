import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';


@NgModule({
  declarations: [SendfeedbackComponent, SendmessageComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})

export class ReviewsModule { }
