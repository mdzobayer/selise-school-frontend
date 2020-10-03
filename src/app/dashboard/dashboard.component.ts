import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'selise-school-frontend';
  overlay: HTMLElement;
  theme = 'light-theme';

  @Output()
  changeThemeOutput: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit(): void {

  }


  changeTheme(event): void {

    this.changeThemeOutput.emit(event);
  }

}
