import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/management.css';

  constructor(private router: Router) {}

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToMain(): void {
    this.router.navigate(['/main']); 
  }

  goToMascroll(): void {
    this.router.navigate(['/mascroll']); 
  }
}
