import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {

  allproducts:any=[]

  constructor(private api:ApiServiceService,private router:Router){}

  ngOnInit(): void {
    this.api.kid().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
  }

  view(item:any){
    this.api.view(item)
    this.router.navigateByUrl('/poloshow')
  }

  add(item:any){
    this.api.add(item)
  }

}
