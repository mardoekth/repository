import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  teller: number = 0;
  

  gok(getal) {
    if(this.teller < 10){
    this.teller++;
    window.alert(this.teller);
    
    if(getal > this.randomNumber){window.alert('Lager')};
    if(getal < this.randomNumber){window.alert('Hoger')};
    if(getal == this.randomNumber){window.alert('Ge zit er bal op!')};
  }
  else(window.alert('you lost'));
  }
}


