import { Component, OnInit } from '@angular/core';
import { HwDataService } from 'src/app/services/hw-data.service';

@Component({
  selector: 'hw-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {
  public students: any[] = [];

  constructor(private hw: HwDataService) {
    this.reload();
  }

  ngOnInit(): void {
  }

  public reload(evn?: any) {
    this.hw.getStudents().subscribe(res => {
      this.students = res;
    });
  }

}
