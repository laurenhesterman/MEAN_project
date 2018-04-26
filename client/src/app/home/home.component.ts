import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restraunts;
  constructor(private _dataService: DataService){}

  ngOnInit() {
   this.getAll()
  }
   
  getAll(){
    let observable = this._dataService.getAll();
  observable.subscribe(data => {    
    console.log("Got our restrauntss!", data),
    this.restraunts = data
    
  });
  }
  delete(id){
    console.log(id)
    let observable = this._dataService.delete(id);
    observable.subscribe(data => {
      console.log("deleting...")
      this.getAll()
    })
    
  }
}
