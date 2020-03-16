import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {CounterService} from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';

  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  teller: number = 0;
  secondsLocal: number = 0;
  

  gok(getal) {
    if(this.teller < 10){
    this.teller++;
    
    
    if(getal > this.randomNumber){window.alert('Lager')};
    if(getal < this.randomNumber){window.alert('Hoger')};
    if(getal == this.randomNumber){
      window.alert('Ge zit er bal op!\nOpnieuw Spelen?')
      window.location.reload();
    };
  }
  else{
    window.alert('you lost, starting over...');
    window.location.reload(); 
  };
  }

  constructor(counterservice: CounterService){
    counterservice.seconds.subscribe((seconds)=>{this.secondsLocal = seconds;});
  }
}


