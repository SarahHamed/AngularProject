import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  currentPage = 1;
  trendingMovies=[];
  pageNumbers:number[]=[];

  constructor(private _MovieService:MovieService) {
    for(let i=1; i<5; i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.getTrendingMovie(this.currentPage).subscribe((data) => {
      this.trendingMovies=data.results;
      console.log(data);
   
  })  
  }

changePage(index)
   {
     this.currentPage = index;
     this._MovieService.getTrendingMovie(this.currentPage).subscribe((data) => {
     this.trendingMovies=data.results;
    })
   }

   prev()
   {
     this.changePage(this.currentPage -1)
   }

   next()
   {
     this.changePage(this.currentPage +1)
   }

  ngOnInit(): void {
  }

}
