import {Component, DoCheck} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'e-shop-frontend';
  isAdmin: boolean
  ngDoCheck(): void {
    this.isAdmin = environment.isAdmin
  }
}
