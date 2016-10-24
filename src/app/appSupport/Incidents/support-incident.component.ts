/**
 * Created by AravindPrabuVK on 16-10-2016.
 */
import {Component, OnInit} from '@angular/core'
import {Incidents} from '../../Incidents'
import {HsxKnwService} from "../../HsxKnwService";
import {Params, ActivatedRoute, Router} from "@angular/router";

@Component({
    selector :'list-incidents',
    templateUrl:'./support-incident.component.template.html',
    providers:[HsxKnwService]
})

export class ListIncidents implements OnInit{
  selectedId:number;
  incidents:Incidents[];
  constructor(private _hsxService:HsxKnwService,
              private route: ActivatedRoute,
              private router: Router
  ){

  }

  editIncident:Incidents={
    incidentId:null,
  incidentDesc:null,
  incidentCause:null,
  incidentResolution:null,
  oCount:null,
  incidentRef:null
  }

  ngOnInit() {
//    this._hsxService.getIncidents().then(incidents =>this.incidents = incidents);
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this._hsxService.getIncidents()
        .then(incidents =>this.incidents = incidents);
    });

  }
  onSelected(incident: Incidents)
  {
    this.selectedId = incident.incidentId;
    this.router.navigate([incident.incidentId],{relativeTo:this.route});

  }
  editSelected(incident: Incidents){
   // this._hsxService.getIncident(incident.incidentId).then(incident => this.editIncident = incident);

    this._hsxService.getIncident(incident.incidentId).then(incident => this.editIncident = incident);
    alert('clicked'+this.editIncident.incidentRef+this.editIncident.oCount);
  }
}
