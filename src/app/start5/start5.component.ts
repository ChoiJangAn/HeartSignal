import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start5',
  templateUrl: './start5.component.html',
  styleUrls: ['./start5.component.scss']
})
export class Start5Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start5.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToStart6(): void {
    this.router.navigate(['/start6']);  // start6 페이지로 이동
  }
}
