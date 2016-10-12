/**
 * Created by AravindPrabuVK on 08-10-2016.
 */
import { Component } from '@angular/core';
import {link} from "fs";
@Component({
  selector:'nav-comp',
  templateUrl:'./nav.component.template.html',
})

export class NavComponent {
  TitleHead="Hiscox";
  nav={};
  selectedNav={};
  Navs=[
    {link:'',name:'App Support',id:1}
    ,{link:'',name:'CMS Dev',id:2}
    ,{link:'',name:'CMS Testing',id:3}
    ,{link:'',name:'BUD Dev',id:4}
    ,{link:'',name:'BUD Testing',id:5}
    ,{link:'',name:'Leave Tracker',id:6}
    ,{link:'',name:'Admin',id:7}
    ];

  getSelectedTab(){
    return this.selectedNav;
  }
  selectTab(nav)
  {
    this.selectedNav=nav;
  }
}
