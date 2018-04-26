import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private _http: HttpClient){}

  getAll(){
    
    return this._http.get('/restraunt')
  }
  getAllReviews(id){
    return this._http.get(`/review/${id}`)
  }
  create(restraunt){
   
    return this._http.post('/restraunt', restraunt)
  }
  createreview(review){
    return this._http.post('/review', review)
  }
  delete(id){
    return this._http.delete(`/restraunt/${id}`)
  }
  update(data, id){
    
    return this._http.put(`/restraunt/${id}`, data)
  }
  findOne(id){
    console.log(id)
    return this._http.get(`/restraunt/${id}`)
  }
  
 
  
}
