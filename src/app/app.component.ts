import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location = {
    address: "BP 03 Babi"
  }

  submitForm(value: any) {
    console.log( value )
  }
}
