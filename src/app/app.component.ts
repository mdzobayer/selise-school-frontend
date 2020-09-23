import { Component } from '@angular/core';


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
export class AppComponent {
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

}
