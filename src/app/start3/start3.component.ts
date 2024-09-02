import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start3',
  templateUrl: './start3.component.html',
  styleUrls: ['./start3.component.scss']
})
export class Start3Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start3.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }
  goToStart4(): void {
    this.router.navigate(['/start4']);  // start4 페이지로 이동
  }
}
