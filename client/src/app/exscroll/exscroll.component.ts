import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'; 
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-exscroll',
  templateUrl: './exscroll.component.html',
  styleUrls: ['./exscroll.component.scss']
})
export class ExscrollComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/exscroll.css';

  constructor(private router: Router) {}

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToExercise(): void {
    this.router.navigate(['/exercise']); 
  }

}
