import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  currentPage = 1;
  trendingTV=[];
  pageNumbers:number[]=[];

  constructor(private _MovieService:MovieService) {
    for(let i=1; i<5; i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.getTrendingTv(this.currentPage).subscribe((data) => {
      this.trendingTV=data.results;
      console.log(data);
   
  })  
  }

changePage(index)
   {
     this.currentPage = index;
     this._MovieService.getTrendingTv(this.currentPage).subscribe((data) => {
     this.trendingTV=data.results;
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
