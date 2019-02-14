import { 
    //AfterViewInit, 
    Compiler,
    Component, 
    Injector,
    //NgModule,
    NgModuleRef, 
    OnInit, 
    ViewChild, 
    ViewContainerRef 
  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockUIs }     from '../mock.uis';
import { UI, UIItem }     from '../ui';


@Component({
  templateUrl: './ui.component.html'
})

export class UIComponent implements OnInit {

  uicomps:UI[] = MockUIs;

  ui: string = "ui";
  uiURL: string = "";
  uiTemplate = "";
  uiName = "";
  uiComp: UI;
  uiItems: UIItem[];

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let ui = this.route.snapshot.paramMap.get('ui');
    this.ui  = ui;
    for (var i=0;i<this.uicomps.length;i++) {
      let comp:UI = this.uicomps[i];
      if (comp.ui == this.ui) {
        this.uiComp = comp;
        this.uiName = comp.name;
        if (comp.items) {
          this.uiItems = comp.items;
        }
        break;
      }
    }
  }

}