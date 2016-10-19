import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListIncidents} from "./Incidents/support-incident.component";
import {AppSComponent} from "./appS.component";
import {IncidentsDetails} from "./Incidents/incidentsDetails.component";
import {HsxIncidentResolver} from "../HsxKnwResolver";

@NgModule({
  imports:[
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/  incidents',
        pathMatch: 'full'
      },
      {
        path: 'incidents',
        component: ListIncidents,
        children: [
          {
            path: ':id',
            component: IncidentsDetails,
            resolve: {
              incidents: HsxIncidentResolver
            }
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers:[
    HsxIncidentResolver
  ]
})
export class HsxAppSupportRoutingModule {
}


