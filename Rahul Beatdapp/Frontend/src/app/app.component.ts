import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template:   
      `<div style="background-color:white;text-align:center;font-size: 50px;color: green"><label>Track Your Expenses</label></div><br/>
      <nav>
      <a routerLink="/Expense/Create" routerLinkActive="active">New spending</a> |
      <a routerLink="/Expense/Index" routerLinkActive="active">Your Expenses Overview</a>
      </nav>
      <!-- Where router should display a view -->
      <router-outlet></router-outlet>`
})
export class AppComponent { }
