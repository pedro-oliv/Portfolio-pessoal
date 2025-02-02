import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  standalone: false,
  
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.scss'
})
export class BarraComponent {
  
  selected = '';

  @Output() sectionChange = new EventEmitter<string>();

  select(section: string){
    this.selected = section;
    this.sectionChange.emit(section);
  }

  @Output() darkModeToggle = new EventEmitter<boolean>();
  isDarkMode: boolean = false;

  toggleDarkMode(isChecked: boolean){
    this.isDarkMode = isChecked;
    this.darkModeToggle.emit(this.isDarkMode);
  }
}
