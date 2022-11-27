import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

@Input('book') book : string = ' ';
@Input('val') value : string = ' ';

  constructor() { }

  ngOnInit(): void {
  }

}
