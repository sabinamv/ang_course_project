import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
 // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',[]),
    new Recipe('Second Recipe', 'Bla bla bla', 'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',[])

  ];

  constructor(private recipeService: RecipeService){

  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

 /* onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }*/

}
