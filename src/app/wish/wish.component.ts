import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  allproducts:any=[]

  constructor(private api:ApiServiceService,private router:Router){}

  ngOnInit(): void {
    this.api.getWishlist().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
  }

  view(item:any){
    this.router.navigateByUrl('/poloshow')
    this.api.view(item)
  }

  deletewish(item:any){
    this.api.deletewish(item.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('wish')
        window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

}
