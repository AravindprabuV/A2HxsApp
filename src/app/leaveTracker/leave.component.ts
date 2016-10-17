/**
 * Created by AravindPrabuVK on 13-10-2016.
 */
import {Component} from '@angular/core'
import {SideBarComponent} from "../sidebar.component";
import {SideNav} from "../sideNavvi";

@Component({
  selector:'<leave></leave>'
  ,templateUrl:"./leave.component.template.html"

})

export class LeaveComponent{
  title = 'Leave';
  SideSubNav=[
    {
      name:'Pages',
      link:'',
      id:1,
      child:[
        {
          name:'Pages',
          link:'',
          id:1
        }
      ]
    },{
      name:'Process',
      link:'',
      id:1,
      child:[
        {
          name:'Pages',
          link:'',
          id:1
        }
      ]
    },{
      name:'Team',
      link:'',
      id:1,
      child:[
        {
          name:'Pages',
          link:'',
          id:1
        }
      ]
    },{
      name:'Incidents',
      link:'',
      id:1,
      child:[
        {
          name:'Pages',
          link:'',
          id:1
        }
      ]
    }
  ];

}
