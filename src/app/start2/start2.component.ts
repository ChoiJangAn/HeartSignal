import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-start2',
  templateUrl: './start2.component.html',
  styleUrls: ['./start2.component.scss']
})
export class Start2Component implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/start2.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

    // 페이지 전환 메소드
  goToStart3(): void {
    this.router.navigate(['/start3']);  // start3 페이지로 이동
  }
}


