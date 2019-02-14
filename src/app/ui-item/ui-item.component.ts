import { Component, ElementRef, Input, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UIItem} from '../UI';

@Component({
  selector: 'app-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.css']
})
export class UiItemComponent implements OnInit {

  @Input() item:UIItem;

  constructor(
    private el: ElementRef, 
    private http: HttpClient) { }
  
  ngOnInit(){
    let src = this.item.url;
    var elm = this.el.nativeElement;
    this.http.get(src,{responseType:"text"}).subscribe(
      response => {
        elm.innerHTML = response;
      }
    );
  }
}
