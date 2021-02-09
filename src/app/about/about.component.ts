import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[]
})
export class AboutComponent implements OnInit {

  constructor(private _TestService:TestService) {
    _TestService.name="sayed";
 //   _TestService.printNmae();

   }

  ngOnInit(): void {
  }

}
