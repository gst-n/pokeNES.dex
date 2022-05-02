import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';

import { ApiService } from 'src/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public pokeService:ApiService ) {}
   

  ngOnInit(): void {
    
  }
}
