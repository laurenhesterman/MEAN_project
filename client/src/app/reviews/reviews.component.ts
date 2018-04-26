import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private _dataService: DataService, private _req: ActivatedRoute, private _router: Router){}
  thisrestraunt;
  reviews;
  ngOnInit() {
    
    this._req.params.subscribe(data=>{
      console.log(data.id)
      this.getOne(data.id);  
      
    })
    
  }

  getReviewsFromService(){
   
    console.log("getreviews")
    let observable = this._dataService.getAllReviews(this.thisrestraunt._id);
    observable.subscribe(data => {    
      console.log("Got our reviews!", data),
      this.reviews = data
      
    });
  }

  getOne(id){
    let observable = this._dataService.findOne(id);  
    console.log("got one")
    observable.subscribe(data => {    
      console.log("Got our one data", data)
      this.thisrestraunt = data['data'];
      this.getReviewsFromService();
    
    })
  }



  

  
}