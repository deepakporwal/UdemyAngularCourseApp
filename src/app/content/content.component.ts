import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title : string ='my content page';
  count : any = 0;
  @Input() inputValue = '';
  @Output() newEvent =  new EventEmitter<string>();
  constructor(){

  }

  ngOnInit(){

  }

  getTitle() {
    return this.title;
  }

  onClick(){
    this.count  = this.count + 1;
    this.newEvent.emit(this.count);
  }

}
