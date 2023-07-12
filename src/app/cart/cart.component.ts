import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any=[]
  total:number=0
  discount:number=0
  check:number=0
  grand:any

  sett=this.fb.group({
    red:['',[Validators.required,Validators.pattern('[0-9]*')]],
    size:['',[Validators.required,Validators.pattern('[0-9]*')]],
    color:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private api:ApiServiceService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.api.cartlist.subscribe(
      (data:any)=>{
        this.cart=data
      }
    )

    // this.cart.map((i:any)=>{
    //   console.log(i.price)
    //   // this.total+=i.price
    //   // console.log(this.total)
    //   // this.discount=10*this.total/100;

    // })

    this.grand=this.api.gettotal()
    this.total=this.api.discount()

  }

  removeitem(i:any){
    this.api.removecart(i)

    this.grand=this.api.gettotal()
    this.total=this.api.discount()
  }

  placed(){
    alert('your order is placed')
  }


}

  


