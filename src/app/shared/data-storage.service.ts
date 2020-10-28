import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipe/recipe.service';
import { Recip } from '../recipe/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    // return this.httpClient
    //   .put('https://ng-recipe-book-aa09b.firebaseio.com/recipes.json',
    //    this.recipeService.getRecipes(),
    //     {
    //       observe: 'body',
    //       params: new HttpParams().set('auth', token)
    //       // headers: new HttpHeaders().set('Authorization', 'Bearer: dcddbjbcjbb')
    //     });
    const req = new HttpRequest('PUT',
    'https://ng-recipe-book-aa09b.firebaseio.com/recipes.json',
     this.recipeService.getRecipes(), {
       reportProgress: true
     });
    return this.httpClient.request(req);
  }

  // getRecipes() {
  //
  //   //return this.httpClient.get<Recip []>('https://ng-recipe-book-aa09b.firebaseio.com/recipes.json?auth=' + token)
  //   this.httpClient.get<Recip []>('https://ng-recipe-book-aa09b.firebaseio.com/recipes.json', {
  //     observe: 'body',
  //     responseType: 'json'
  // })
  //   .map((recipes) => {
  //     console.log(recipes);
  //     for (let recipe of recipes) {
  //       if (!recipe['ingredients']) {
  //         recipe['ingredients'] = [];
  //       }
  //     }
  //     return recipes;
  //   }).subscribe((recipes: Recip[]) => {
  //     this.recipeService.setRecipes(recipes);
  //   });
  // }
}
