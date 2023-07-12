import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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

}
