// start1.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start1',
  templateUrl: './start1.component.html',
  styleUrls: ['./start1.component.scss']
})
export class Start1Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start1.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  // 화면 전환 메소드
  goToStart2(): void {
    this.router.navigate(['/start2']);  // start2 페이지로 이동
  }
}
