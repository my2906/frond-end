import { Component } from '@angular/core';
import { data } from '../product.module';
import { product } from 'src/model/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
product=data;
}
