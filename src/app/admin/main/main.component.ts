import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  isAdmin: boolean
  constructor() { }

  ngOnInit(): void {
     this.isAdmin = environment.isAdmin
  }

  ngOnDestroy(): void {
    environment.isAdmin = false
  }
}
