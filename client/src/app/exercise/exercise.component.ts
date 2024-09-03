import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/exercise.css';

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

  goToExscroll(): void {
    this.router.navigate(['/exscroll']); 
  }
}
