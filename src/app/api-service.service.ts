import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  
  viewdetails:any=[]
  cartarray:any=[]
  show:any=[]
  cartlist = new BehaviorSubject([])//cart array

  searchkey = new BehaviorSubject('')//to share stream of data

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('http://localhost:3000/item')
  }

  view(item:any){
    this.viewdetails=item;
  }

  jogger(){
    return this.http.get('http://localhost:3000/jogger')
  }

  outer(){
    return this.http.get('http://localhost:3000/outer')
  }

  hoddy(){
    return this.http.get('http://localhost:3000/hoddy')
  }

  graphic(){
    return this.http.get('http://localhost:3000/graphic')
  }

  kid(){
    return this.http.get('http://localhost:3000/kid')
  }

  messi(){
    return this.http.get('http://localhost:3000/messi')
  }

  underwear(){
    return this.http.get('http://localhost:3000/underwear')
  }

  add(item:any){
    this.cartarray.push(item);
    this.cartlist.next(this.cartarray);
    console.log(this.cartarray)

    let total=this.gettotal();
    console.log(total);
    let discount=this.discount();
    console.log(discount)
  }

  gettotal(){
    var grandsum=0;
    this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum;
  }

  discount(){
    var total=0;
    var discount=0;
    this.cartarray.map((item:any)=>{
      total+=item.price;
      discount=10*total/100;
      
    })
    return discount;
  }

  removecart(i:any){
    this.cartarray.map((item:any,index:any)=>{
      if(i.id==item.id){
        this.cartarray.splice(index,1);
      }

    })
    this.cartlist.next(this.cartarray)//remove and update
    let total=this.gettotal();
    console.log(total);
    let discount=this.discount();
    console.log(discount)
  }

  

  addtowish(item:any){
    const bodies={
      id:item.id,
      type:item.type,
      name:item.name,
      image:item.image,
      image2:item.image2,
      image3:item.image3,
      image4:item.image4,
      price:item.price,
      model:item.model,
      discription:item.discription
    }

    return this.http.post('http://localhost:3000/addswish',bodies)
  }

  getWishlist(){
    return this.http.get('http://localhost:3000/getwishlist')
  }

  deletewish(id:any){
    return this.http.delete('http://localhost:3000/delete/'+id)

  }
}
