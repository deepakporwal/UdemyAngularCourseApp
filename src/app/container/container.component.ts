import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  someValue ='this is input value from container component';

  onButtonClickChildComponene($event : string){
    console.log($event);
  }
}
