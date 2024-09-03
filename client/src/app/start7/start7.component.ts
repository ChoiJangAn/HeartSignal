import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start7',
  templateUrl: './start7.component.html',
  styleUrls: ['./start7.component.scss']
})
export class Start7Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start7.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  // 화면 전환 메소드
  goToLogin(): void {
    this.router.navigate(['/login']);  // login 페이지로 이동
  }
}
