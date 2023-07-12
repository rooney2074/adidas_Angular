import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-polo',
  templateUrl: './polo.component.html',
  styleUrls: ['./polo.component.css']
})
export class PoloComponent implements OnInit {

  allproducts:any=[];
  searchterm:string=''

  constructor(private api:ApiServiceService,private router:Router){}

  ngOnInit(): void {
    this.api.get().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }

  view(item:any){
    this.router.navigateByUrl('/poloshow')
    this.api.view(item)
  }

  add(item:any){
    this.api.add(item)
    alert('added to cart')
  }

  addwish(item:any){
    this.api.addtowish(item).subscribe(
      (data:any)=>{
        alert(data.message)
        
      },
      (data:any)=>{
        alert(data.error.message)
      }
    )
  }

}
