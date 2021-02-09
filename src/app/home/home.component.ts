import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[]
})
export class HomeComponent implements OnInit {
  
  currentPage = 1;
  trendingAll=[];
  pageNumbers:number[]=[];

  constructor(private _MovieService:MovieService) {

    for(let i=1; i<5; i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.getTrendingAll(this.currentPage).subscribe((data) => {
      this.trendingAll=data.results;
      console.log(data);
   /*  for(let i=0; i<data.results.length; i++)
     {
       data.results[i].poster_path = 'https://image.tmdb.org/t/p/w500/'+data.results[i].poster_path;
       this.trendingAll.push(data.results[i]);
     }
     */
    })

   }

   changePage(index)
   {
     this.currentPage = index;
     this._MovieService.getTrendingAll(this.currentPage).subscribe((data) => {
     this.trendingAll=data.results;
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
