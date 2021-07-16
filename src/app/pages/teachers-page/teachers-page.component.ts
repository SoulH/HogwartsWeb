import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HwDataService } from 'src/app/services/hw-data.service';

@Component({
  selector: 'hw-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {
  public teachers: any[] = [];
  
  constructor(private hw: HwDataService) {
    this.reload();
  }

  ngOnInit(): void {
  }

  public reload(evn?: any) {
    this.hw.getTeachers().subscribe(res => {
      this.teachers = res;
    });
  }

}
