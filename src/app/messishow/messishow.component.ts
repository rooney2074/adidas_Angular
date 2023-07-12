import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-messishow',
  templateUrl: './messishow.component.html',
  styleUrls: ['./messishow.component.css']
})
export class MessishowComponent implements OnInit {

  feed=""
  feedback:any
  feedbacks:any=[]
  shows:any=[]

  red:any=''
  color=''
  size=''
  item:any=[]
  price:any=''
  total:any=[]
  discount:any=''

  sett=this.fb.group({
    red:['',[Validators.required,Validators.pattern('[0-9]*')]],
    size:['',[Validators.required,Validators.pattern('[0-9]*')]],
    color:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  })

  constructor(private api:ApiServiceService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.item=this.api.viewdetails
    this.price=this.item.price
    console.log(this.item)
    console.log(this.price)
  }

  redok(){
    var red:any = this.sett.value.red
    

    if(this.sett.value.red){
      // console.log(red);
      this.total=this.price*red
    this.discount=10*this.total/100;
    console.log(this.total)
      
    }else{
      alert('Please Enter Quantity')
    }
  }

  add(item:any){
    this.api.add(item)
    alert('added to cart')
  }

  ok(){
    var feed = this.feed
    console.log(feed);
    if(this.item.id){
      localStorage.setItem('feed',JSON.stringify(feed));
      localStorage.setItem('id',JSON.stringify(this.item.id));

    this.feedback=JSON.parse(localStorage.getItem('feed') || '');


    this.feedbacks.push(this.feedback)
    console.log(this.feedbacks)

    console.log(this.feedback)

    }else{
      alert('wrong')
    }
  }

  show(){

    this.shows=JSON.parse(localStorage.getItem('feed') || '');
    console.log(this.shows)
    
  }


}
