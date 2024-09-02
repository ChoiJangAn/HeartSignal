import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start4',
  templateUrl: './start4.component.html',
  styleUrls: ['./start4.component.scss']
})
export class Start4Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start4.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToStart5(): void {
    this.router.navigate(['/start5']);  // start5 페이지로 이동
  }
}
