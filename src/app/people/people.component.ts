import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  currentPage = 1;
  trendingPeople=[];
  pageNumbers:number[]=[];

  constructor(private _MovieService:MovieService) {
    for(let i=1; i<5; i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.getTrendingPeople(this.currentPage).subscribe((data) => {
      this.trendingPeople=data.results;
      console.log(data);
   
  })  
  }

changePage(index)
   {
     this.currentPage = index;
     this._MovieService.getTrendingPeople(this.currentPage).subscribe((data) => {
     this.trendingPeople=data.results;
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
