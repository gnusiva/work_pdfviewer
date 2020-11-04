import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchPdfComponent } from './launch-pdf/launch-pdf.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';

const routes: Routes = [
  {path: '', redirectTo: 'launch-pdf', pathMatch: 'full'},
  {path: 'launch-pdf', component: LaunchPdfComponent},
  {path: 'view-pdf', component: ViewPdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
