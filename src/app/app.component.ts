import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVI5g0kBkvqNf-e8XJLxD3DRjB0gAQf9o',
      authDomain: 'ng-recipe-book-aa09b.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
  console.log(feature);
  this.loadedFeature = feature;
  }
}
