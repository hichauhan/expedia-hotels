import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotel: Hotel = {
    id: 1,
    name: "Crown Plaza"
  };

  constructor() { }

  ngOnInit() {
  }

}
