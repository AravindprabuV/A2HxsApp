/**
 * Created by AravindPrabuVK on 15-10-2016.
 */
import any = jasmine.any;

export class SideNav{
  name:string;
  link:string;
  id:number;
  child:Array<sideNav>;
}
class sideNav{
  name:string;
  link:string;
  id:number;
}

