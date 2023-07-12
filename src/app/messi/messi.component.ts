import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit {

  allproducts:any=[];
  searchterm:string=''

  constructor(private api:ApiServiceService,private router:Router){}

  ngOnInit(): void {
    this.api.messi().subscribe(
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
    this.api.view(item)
    this.router.navigateByUrl('/messishow');
    
  }

  add(item:any){
    this.api.add(item)
    alert('Item Added')
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
