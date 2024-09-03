import { Component, OnInit, OnDestroy } from '@angular/core';
import { loadStylesheet } from '../shared/utils/load-styles';
import { Router } from '@angular/router';  // Router import 추가
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/main.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToExercise(): void {
    this.router.navigate(['/exercise']);  
  }

  goToWeight(): void {
    this.router.navigate(['/weight']);  
  }

  goToDay(): void {
    this.router.navigate(['/day']);  
  }

  goToManagement(): void {
    this.router.navigate(['/management']);  
  }
}
