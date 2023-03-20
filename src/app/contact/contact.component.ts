import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor()
  {
    this.favoriteSeason="";
  }
  favoriteSeason: string;
  seasons: string[] = ['KIM CƯƠNG', 'VÀNG', 'BẠC', 'ĐỒNG'];
}
