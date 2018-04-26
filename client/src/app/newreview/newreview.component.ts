import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  errors;
  newreview= {
    name:"",
    stars: 0,
    content: "",
    restid: ""
  }
  thisrestraunt;
  constructor(private _dataService: DataService, private _router: Router,private _req: ActivatedRoute,){}

  ngOnInit() {
    this._req.params.subscribe(data=>{
      console.log(data.id)
      this.getOne(data.id);

      
    })
  }

  getOne(id){
    let observable = this._dataService.findOne(id);
    console.log("got one")
    observable.subscribe(data => {    
      console.log("Got our one restraunt", data)    
      this.thisrestraunt = data['data'];
      console.log(this.thisrestraunt, "getoonee")
      console.log(this.thisrestraunt._id)
     
      
    })
  }
  createreview() {
    // var restid = this.thisrestraunt.id
    this.newreview.restid = this.thisrestraunt._id
    console.log(this.thisrestraunt.id)
    console.log(this.newreview, "in component")
    console.log("testtest")
   
    let observable = this._dataService.createreview(this.newreview);
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
