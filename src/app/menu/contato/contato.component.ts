import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: false,
  
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  showImage: boolean= false;

  toggleImage(){
    this.showImage = !this.showImage;
  }

}
