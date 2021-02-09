import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

  trendingPerson:any;
  id:string="";
  constructor(private _MovieService:MovieService , private _Activatedroute:ActivatedRoute) {

      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
    });

    _MovieService.loadPerson(this.id).subscribe((data) => {
      this.trendingPerson=data;
      console.log(data);
     
  })  
  }

  ngOnInit(): void {
  }

}
