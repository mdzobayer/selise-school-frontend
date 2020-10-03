import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ThemeService } from './services/theme.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { OverlayContainer } from '@angular/cdk/overlay';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'selise-school';

  departments = [
    {"id": 1, "name": "Angular", "des": "you can write any thing"},
    {"id": 2, "name": "Node", "des": "you can write any thing"},
    {"id": 3, "name": "MongoDB", "des": "you can write any thing"},
    {"id": 4, "name": "Ruby", "des": "you can write any thing"},
    {"id": 5, "name": "Bootstrap", "des": "you can write any thing"}
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  darkMode$: Observable<boolean>;

  overlay: HTMLElement;
  theme = 'light-theme';

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) { 
    this.overlay = overlayContainer.getContainerElement();
  }

  ngOnInit() {
    this.darkMode$ = this.themeService.darkMode$;
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  setDarkMode({ checked }: MatSlideToggleChange) {
    this.themeService.setDarkMode(checked);
  }

  changeTheme(event): void {
    // if (this.overlay.classList.contains('dark-theme')) {
    //   this.overlay.classList.remove('dark-theme');
    //   this.overlay.classList.add('light-theme');
    // } else if (this.overlay.classList.contains('light-theme')) {
    //   this.overlay.classList.remove('light-theme');
    //   this.overlay.classList.add('dark-theme');
    // } else {
    //   this.overlay.classList.add('light-theme');
    // }

    const classlistLength = this.overlay.classList.length;
    this.overlay.classList.remove(this.overlay.classList[classlistLength - 1]);
    this.overlay.classList.add(event.value);
    this.theme = event.value;
  }

  changeThemeOutput(event) {
    this.changeTheme(event);
  }

}
