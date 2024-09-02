import { Component, OnInit, OnDestroy } from '@angular/core';
import { loadStylesheet } from '../shared/utils/load-styles';
import { Router } from '@angular/router'; 
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/week.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToMain(): void {
    this.router.navigate(['/main']);  
  }

  goToDay(): void {
    this.router.navigate(['/day']);  
  }

  goToMonth(): void {
    this.router.navigate(['/month']);  
  }
}
