import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private _dataService: DataService){}
  ngOnInit(){   
   
  }

}
