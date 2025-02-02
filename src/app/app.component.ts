import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  selectedSection='home';
  title: any;

  changeSection(section: string) {
    this.selectedSection = '';
    
    setTimeout(() => {
      this.selectedSection = section;
    }, 200); 
  }

  toggleDarkMode(isDark: boolean){
    if(isDark){
    document.documentElement.classList.toggle('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  }
}
