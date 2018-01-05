import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isAuthenticated: boolean;

  constructor (
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.authService.watchAuthenticatedStatus()
        .subscribe(
            (data:boolean) => {
                this.isAuthenticated = data;
            }
        );
  }
}
