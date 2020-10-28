import { Recip } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class RecipeService {
recipesChanged = new Subject<Recip[]>();
  private recipes: Recip[] = [
    new Recip('French Toast',
    'This is a delicious american french toast',
    'https://img.taste.com.au/IwliboxE/taste/2016/11/french-toast-with-strawberries-and-syrup-3587-1.jpeg',
     [new Ingredient('Bread', 5),
      new Ingredient('Eggs', 10),
      new Ingredient('Sugar', 1)]),
    new Recip('Chicken Manchurian',
    'This is a meat dish',
    'https://media1.s-nbcnews.com/i/newscms/2017_20/1215661/baked-chicken-today-170519-tease_15b214baba5431d761c7a46cf08e062c.jpg',
     [new Ingredient('Meat', 5),
      new Ingredient('Chilly', 10),
      new Ingredient('Oil', 1)])
];

getRecipes () {
  return this.recipes.slice();
}

getRecipe(index: number) {
  return this.recipes[index];
}

addRecipe(recipe: Recip) {
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recip) {
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}

setRecipes(recipes: Recip[]) {
  this.recipes = recipes;
  this.recipesChanged.next(this.recipes.slice());
}
}
