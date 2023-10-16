import { Component, OnInit, Output, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', {static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static:true}) amountInputRef: ElementRef;
//  ingredientAdded = new EventEmitter<{name: string, amount: number}>();
@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(){}

  ngOnInit(){
    
  }
  
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
