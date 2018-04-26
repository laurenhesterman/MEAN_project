import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './newrest.component.html',
  styleUrls: ['./newrest.component.css']
})
export class NewrestComponent implements OnInit {
  errors;
  newrestraunt= {
    name:"",
    cuisine: ""
  }
  constructor(private _dataService: DataService, private _router: Router){}

  ngOnInit() {
  }    


  create() {
    console.log(this.newrestraunt, "in component")
    console.log("testtest")
    let observable = this._dataService.create(this.newrestraunt);
    observable.subscribe(data => {
      console.log("Got data")
      if (data['errors']){
        this.errors = data
        console.log(data['errors'])
      }
      else {
        this._router.navigate(['/']);
      }
      
    })

  }
}
