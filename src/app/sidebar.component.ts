/**
 * Created by AravindPrabuVK on 13-10-2016.
 */
import {Component,Input } from '@angular/core'
import {Router,ActivatedRoute} from '@angular/router'
import {Observable} from "rxjs";
import {SideNav} from './sideNavvi'
@Component({
  selector:'side-bar',
  templateUrl:'./sidebar.component.template.html'
})



export class SideBarComponent {

  @Input()
  sideNavs;
}
