import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  trendingTV:any;
  id:string="";
  constructor(private _MovieService:MovieService , private _Activatedroute:ActivatedRoute) {

      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
    });

    _MovieService.loadTV(this.id).subscribe((data) => {
      this.trendingTV=data;
      console.log(data);
     
  })  
  }

  ngOnInit(): void {
  }

}
