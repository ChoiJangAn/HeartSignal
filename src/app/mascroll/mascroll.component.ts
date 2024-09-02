import { Component, OnInit, OnDestroy } from '@angular/core';
import { loadStylesheet } from '../shared/utils/load-styles';
import { removeStylesheet } from '../shared/utils/remove-styles';

@Component({
  selector: 'app-mascroll',
  templateUrl: './mascroll.component.html',
  styleUrls: ['./mascroll.component.scss']
})
export class MascrollComponent implements OnInit, OnDestroy {
  private stylesheetUrl = 'assets/styles/mascroll.css';

  ngOnInit(): void {
    loadStylesheet(this.stylesheetUrl);
  }

  ngOnDestroy(): void {
    removeStylesheet(this.stylesheetUrl);
  }
}
