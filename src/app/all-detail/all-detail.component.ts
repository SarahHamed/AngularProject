import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-detail',
  templateUrl: './all-detail.component.html',
  styleUrls: ['./all-detail.component.scss']
})
export class AllDetailComponent implements OnInit {

  trendingAll:any;
  id:string="";
  mediaType:string="";
  constructor(private _MovieService:MovieService , private _Activatedroute:ActivatedRoute) {

      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
    });
    this._Activatedroute.paramMap.subscribe(params => { 
      this.mediaType = params.get('mediaType'); 
  });

    _MovieService.loadSelectedMedia(this.id,this.mediaType).subscribe((data) => {
      this.trendingAll=data;
      console.log(data);
     
  })  
  }

  ngOnInit(): void {
  }

}
