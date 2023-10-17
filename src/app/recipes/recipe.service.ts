import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'Description', 
        'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient ('Fries',20)
        ]),
        new Recipe('Second Recipe', 
        'Bla bla bla', 
        'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient ('Meat',1)
        ])
    
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
}