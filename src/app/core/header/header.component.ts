import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { HttpEvent } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducer';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipe/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureRequest = new EventEmitter<string>();
  // render(feature: string) {
  //     this.featureRequest.emit(feature);
  // }
 authState: Observable<fromAuth.State>;

 constructor(private store: Store<fromApp.AppState>) {}
 ngOnInit() {
   this.authState = this.store.select('auth');
 }
 onSaveData() {
   this.store.dispatch(new RecipeActions.StoreRecipes());
}

 onGetData() {
   this.store.dispatch(new RecipeActions.FetchRecipes());
 }

 onLogout() {
   this.store.dispatch(new AuthActions.Logout());
 }
}
