import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start6',
  templateUrl: './start6.component.html',
  styleUrls: ['./start6.component.scss']
})
export class Start6Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start6.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  // 화면 전환 메소드
  goToStart7(): void {
    this.router.navigate(['/start7']);  // start7 페이지로 이동
  }
}
