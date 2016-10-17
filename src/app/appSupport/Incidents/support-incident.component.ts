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
  incidents:Incidents[];
  constructor(private _hsxService:HsxKnwService,
              private route: ActivatedRoute,
              private router: Router
  ){

  }

  ngOnInit() {
    this._hsxService.getIncidents().then(incidents =>this.incidents = incidents);
    this.route.params.forEach((params: Params) => {
      this.selectedId = params['id'];
      this._hsxService.getIncidents()
        .then(incidents =>this.incidents = incidents);
    });
  }
}
