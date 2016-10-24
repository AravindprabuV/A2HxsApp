/**
 * Created by AravindPrabuVK on 23-10-2016.
 */
import {Component,Input} from '@angular/core';
import {Incidents} from "../../Incidents";



@Component({
  selector:'edit-incidents',
  templateUrl:'editIncidents.component.template.html'
})
export class EditIncidents{
  @Input()  incident:Incidents;

  resetData(){
    this.incident={
      incidentId:null,
      incidentDesc:null,
      incidentCause:null,
      incidentResolution:null,
      oCount:null,
      incidentRef:null
    }
  }
}
