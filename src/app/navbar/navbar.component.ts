import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';
import {GeneralComponent} from '../general/general.component';
import {FeaturesComponent} from '../features/features.component';
import {TeamComponent} from '../team/team.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    routerConfig: Routes = [
    {
      path: 'general',
      component: GeneralComponent
    },
    {
      path: 'features',
      component: FeaturesComponent
    },
    {
      path: 'team',
      component: TeamComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    }
  ];



  constructor() {
  }

  ngOnInit() {
  }



}
