import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrationModel } from 'src/app/core/models';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'hw-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss']
})
export class RequestPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public ds = new MatTableDataSource<any>([]);
  public columnDef: string[] = [
    "identification",
    "name",
    "lastname",
    "age",
    "house"
  ];
  
  constructor(private enrollment: EnrollmentService) {
    this.enrollment.getAll().subscribe(res => {
      console.log('res', res);
      this.ds = new MatTableDataSource<any>(res);
      this.ds.paginator = this.paginator;
      this.ds.sort = this.sort;
    })
  }

  ngOnInit(): void {
  }

}
