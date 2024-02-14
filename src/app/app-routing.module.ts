import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveCleaningAgencyComponent } from './approve-cleaning-agency/approve-cleaning-agency.component';

const routes: Routes = [
  { path: 'approveCleaningAgency', component: ApproveCleaningAgencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
