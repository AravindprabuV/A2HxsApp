import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NavComponent} from './nav.component';
import {ContentComponent} from "./content.component";
import {HsxAppRoutingModule} from './app-routing.module';
import {AppSComponent} from './appSupport/appS.component';
import {CmsDComponent} from './cmsDev/cmsD.component';
import {CmsTComponent} from './cmsTest/cmsT.component';
import {BudDComponent} from './budDev/budD.component';
import {BudTComponent} from './budTest/budT.component';
import {LeaveComponent} from './leaveTracker/leave.component';
import {AdminComponent} from './Admin/admin.component';
import {SideBarComponent} from './sidebar.component';
import {HsxAppSupportRoutingModule} from "./appSupport/appS-routing.module";
import {ListIncidents} from "./appSupport/Incidents/support-incident.component";
import {HsxKnwService} from "./HsxKnwService";
import {IncidentsDetails} from "./appSupport/Incidents/incidentsDetails.component";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    CmsDComponent,
    CmsTComponent,
    AppSComponent,
    LeaveComponent,
    AdminComponent,
    BudDComponent,
    BudTComponent,
    SideBarComponent,
    ListIncidents,
    IncidentsDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HsxAppRoutingModule,
    HsxAppSupportRoutingModule

  ],
  providers: [HsxKnwService],
  bootstrap: [AppComponent]
})
export class AppModule { }
