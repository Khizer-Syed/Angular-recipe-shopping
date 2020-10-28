import { Recip } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
recipes : Recip[]
}

const initialState: State = {
  recipes: [
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
]
};
export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
  switch(action.type) {
    case(RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case(RecipeActions.ADD_RECIPE):
     return {
       ...state,
       recipes: [...state.recipes, action.payload]
     };
    case(RecipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const modifiedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      }
      const newRecipes = [...state.recipes];
      newRecipes[action.payload.index] = modifiedRecipe;
      return {
        ...state,
        recipes: newRecipes
      };
      case(RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
      default:
       return state;
  }
}
