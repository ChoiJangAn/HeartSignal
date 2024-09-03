import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';  // Router import 추가
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/login.css';

  constructor(private router: Router) {}  // Router 주입

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }

  goToMain(): void {
    console.log('goToMain 함수가 호출되었습니다.');
    this.router.navigate(['/main']);  
  }
}
