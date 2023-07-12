import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count:number=0

  constructor(private api:ApiServiceService){}

  ngOnInit(): void {
    this.api.cartlist.subscribe(
      (data:any)=>{
        if(data){
          this.count=data.length;
        }
      }
    )
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

}
