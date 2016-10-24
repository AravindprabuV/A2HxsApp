/**
 * Created by AravindPrabuVK on 16-10-2016.
 */
export class Incidents{
  constructor(id,desc,cause,res,cnt,ref){
    this.incidentId=id;
    this.incidentDesc=desc;
    this.incidentCause=cause;
    this.incidentResolution=res;
    this.oCount=cnt;
    this.incidentRef=ref;
  }
  incidentId:number;
  incidentDesc:string;
  incidentCause:string;
  incidentResolution:string;
  oCount:number;
  incidentRef:string;
}
