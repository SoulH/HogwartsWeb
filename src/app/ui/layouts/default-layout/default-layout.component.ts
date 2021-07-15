import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hw-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public house: any = {};
  public houses: any[] = [
    {name: "", phrase: ""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
