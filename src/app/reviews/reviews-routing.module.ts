import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';


const routes: Routes = [
  {path:'',component:SendfeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
