/**
 * Created by AravindPrabuVK on 17-10-2016.
 */
import { Injectable } from '@angular/core';
import { Router, Resolve,ActivatedRouteSnapshot } from '@angular/router';

import { HsxKnwService } from  './HsxKnwService'
import {Incidents} from './Incidents'
@Injectable()
export class HsxIncidentResolver implements Resolve<Incidents> {
  constructor(private hsx: HsxKnwService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Incidents>|boolean {
    let id = +route.params['id'];

    return this.hsx.getIncident(id).then(incidents => {
      if (incidents) {
        return incidents;
      } else { // id not found
        this.router.navigate(['/support/incidents']);
        return false;
      }
    });
  }
}
