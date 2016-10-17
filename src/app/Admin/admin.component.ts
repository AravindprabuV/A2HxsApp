/**
 * Created by AravindPrabuVK on 13-10-2016.
 */
import {Component,Input} from '@angular/core'
import {SideBarComponent} from "../sidebar.component";
import {SideNav} from '../sideNavvi'
@Component({
  selector:'<admin></admin>'
  ,templateUrl:"./admin.component.template.html"
  //,directives:[SideBarComponent]
})


export class AdminComponent{
  title = 'admin';

  SideSubNav  =[
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
