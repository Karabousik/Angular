import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  title = 'My First Angular App!';
  myText = "Моя первая программа";

  setVisibility() {
    this.isVisible = !this.isVisible;
  }
}
