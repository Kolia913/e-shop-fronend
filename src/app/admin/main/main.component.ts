import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  isAdmin: boolean
  constructor(private readonly route: Router) { }

  ngOnInit(): void {
     this.isAdmin = environment.isAdmin
     if (!this.isAdmin) {
       this.route.navigate(['/'])
    }
  }

  ngOnDestroy(): void {
    environment.isAdmin = false
  }
}
