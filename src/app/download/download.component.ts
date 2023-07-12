import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

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
