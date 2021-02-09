import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  trendingMovie:any;
  id:string="";
  constructor(private _MovieService:MovieService , private _Activatedroute:ActivatedRoute) {

      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
    });

    _MovieService.loadMovie(this.id).subscribe((data) => {
      this.trendingMovie=data;
      console.log(data);
     
  })  
  }


  ngOnInit(): void {
  }

}
