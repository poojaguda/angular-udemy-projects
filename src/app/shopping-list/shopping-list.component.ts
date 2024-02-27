import { Component,OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
ingredients:ingredient[] =[
  new ingredient('Apples',5),
  new ingredient('Organe',10),

];

constructor() {}
  ngOnInit() {
    
  }
}

