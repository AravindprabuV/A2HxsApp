/**
 * Created by AravindPrabuVK on 13-10-2016.
 */
import {Component} from '@angular/core'
import {SideBarComponent} from "../sidebar.component";
import {SideNav} from "../sideNavvi";

@Component({
  selector:'<budD></budD>'
  ,templateUrl:"./budD.component.template.html"

})

export class BudDComponent{
  title = 'Bud Dev';
  SideSubNav =[
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
