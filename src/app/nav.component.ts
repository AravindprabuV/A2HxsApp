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
    {link:'/support',name:'App Support',id:1}
    ,{link:'/cmsdev',name:'CMS Dev',id:2}
    ,{link:'/cmstest',name:'CMS Testing',id:3}
    ,{link:'/buddev',name:'BUD Dev',id:4}
    ,{link:'/budtest',name:'BUD Testing',id:5}
    ,{link:'/leave',name:'Leave Tracker',id:6}
    ,{link:'/admin',name:'Admin',id:7}
    ];

  getSelectedTab(){
    return this.selectedNav;
  }
  selectTab(nav)
  {
    this.selectedNav=nav;
  }
}
