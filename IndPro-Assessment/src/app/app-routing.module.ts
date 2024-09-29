import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveFormComponent } from './interactive-form/interactive-form.component';
import { DyanamicDisplayComponent } from './dyanamic-display/dyanamic-display.component';

const routes: Routes = [
  {path:"form", component: InteractiveFormComponent},
  {path:"display", component: DyanamicDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
