import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentComponent} from './content.component';
import {AppSComponent} from './appSupport/appS.component';
import {CmsDComponent} from './cmsDev/cmsD.component';
import {CmsTComponent} from './cmsTest/cmsT.component';
import {BudDComponent} from './budDev/budD.component';
import {BudTComponent} from './budTest/budT.component';
import {LeaveComponent} from './leaveTracker/leave.component';
import {AdminComponent} from './Admin/admin.component';
import {ListIncidents} from "./appSupport/Incidents/support-incident.component";
import {HsxIncidentResolver} from "./HsxKnwResolver";
import {IncidentsDetails} from "./appSupport/Incidents/incidentsDetails.component";
import {HsxAppSupportRoutingModule} from "./appSupport/appS-routing.module";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ContentComponent},
  {
    path: 'support', component: AppSComponent
  },
  {path: 'cmsdev', component: CmsDComponent},
  {path: 'cmstest', component: CmsTComponent},
  {path: 'buddev', component: BudDComponent},
  {path: 'budtest', component: BudTComponent},
  {path: 'leave', component: LeaveComponent},
  {path: 'admin', component: AdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),HsxAppSupportRoutingModule],
    exports: [RouterModule],
  providers: [HsxIncidentResolver]
})
export class HsxAppRoutingModule {
}
