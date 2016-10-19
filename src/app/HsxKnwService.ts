/**
 * Created by AravindPrabuVK on 16-10-2016.
 */
import {Injectable} from "@angular/core";
import {Incidents} from './Incidents'
import {INCIDETNS} from "../mock";

let hsxPromise = Promise.resolve(INCIDETNS);
@Injectable()
export class HsxKnwService{
  getIncidents(){
    return hsxPromise;
  }
  getIncident(id: number | string) {
    return hsxPromise
      .then(incidents => incidents.find(incidents => incidents.incidentId === +id));
  }
}
