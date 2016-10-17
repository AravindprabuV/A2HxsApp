/**
 * Created by AravindPrabuVK on 16-10-2016.
 */
import {Injectable} from "@angular/core";
import {Incidents} from './Incidents'
import {INCIDETNS} from "../mock";

@Injectable()
export class HsxKnwService{
  getIncidents(): Promise<Incidents[]> {
    return Promise.resolve(INCIDETNS);
  }
  getIncident(id: number | string) {
    return crisesPromise
      .then(crises => crises.find(crisis => crisis.id === +id));
  }
}
