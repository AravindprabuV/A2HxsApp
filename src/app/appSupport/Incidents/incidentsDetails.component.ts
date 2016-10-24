/**
 * Created by AravindPrabuVK on 18-10-2016.
 */
import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {Incidents} from "../../Incidents";

@Component({
  templateUrl:'./incidentDetails.component.template.html',
  selector:'incident-details'
})

export class IncidentsDetails implements OnInit {
  incidents: Incidents;
  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.data.forEach((data: { incidents: Incidents }) => {
      console.log(data);
      this.incidents = data.incidents;
    });
  }
  /*ngOnInit() {
     this.route.data.forEach((data:{detailIncident:Incidents})=>
    {
      this.detailIncident = data.detailIncident;
    }
  )
  }*/
}
