/**
 * Created by AravindPrabuVK on 13-10-2016.
 */
import {Component, NgModule} from '@angular/core'
import { Incidents } from '../Incidents'

@Component({
  selector:'<appS></appS>'
  ,templateUrl:"./appS.component.template.html"

})
// @NgModule({
//   imports:[
//
//   ],
//   declarations:[
//
//   ]
// })
export class AppSComponent{
  title = 'App Support';
  val=10;
  SideSubNav=[
    {
      name:'Pages',
      link:'#',
      id:1,
      child:[
        {
          name:'Pages',
          link:'pages',
          id:1
        }
      ]
    },{
      name:'Process',
      link:'#',
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
      link:'incidents',
      id:1,
      child:[
      ]
    }
  ];

}
