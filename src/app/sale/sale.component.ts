import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  count:number=0

  underwear:any=[];
  polo:any=[];
  outer:any=[];
  kid:any=[];
  jogger:any=[];
  hoddy:any=[];
  gra:any=[];
  searchterm:string=''


  constructor(private api:ApiServiceService,private router:Router) {}

  ngOnInit(): void {
    this.api.cartlist.subscribe(
      (data:any)=>{
        if(data){
          this.count=data.length;
        }
      }
    )
    this.api.underwear().subscribe(
      (data:any)=>{
        this.underwear=data.products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
    this.api.get().subscribe(
      (data:any)=>{
        this.polo=data.products
      }
    )
    this.api.outer().subscribe(
      (data:any)=>{
        this.outer=data.products
      }
    )
    this.api.kid().subscribe(
      (data:any)=>{
        this.kid=data.products
      }
    )
    this.api.jogger().subscribe(
      (data:any)=>{
        this.jogger=data.products
      }
    )
    this.api.hoddy().subscribe(
      (data:any)=>{
        this.hoddy=data.products
      }
    )
    this.api.graphic().subscribe(
      (data:any)=>{
        this.gra=data.products
      }
    )
  }

  add(item:any){
    this.api.add(item)
    alert('added to cart')
  }

  view(item:any){
    this.router.navigateByUrl('/poloshow')
    this.api.view(item)
  }

}
