import { Component, OnInit } from '@angular/core';
import { MockUIs }     from '../mock.uis';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uicomps = MockUIs;

  constructor() { 
    console.log(this.uicomps);
  }

  ngOnInit() {
    //console.log(this.uicomps);

  }

}
