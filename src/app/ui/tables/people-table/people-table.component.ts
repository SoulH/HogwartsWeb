import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'hw-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public ds = new MatTableDataSource<any>([]);
  public columnDef: string[] = [
    "image",
    "name",
    "age",
    "patronus"
  ];
  @Input() 
  set data(val: any[]) {
    const today = new Date().toISOString().slice(0,10).split("-").map(f => parseInt(f));
    val = val.map(f => {
      let born = (<string>f.dateOfBirth).slice(0,10).split("-").map(x => parseInt(x));
      let by = born[2] || <number>f.yearOfBirth || 0;
      f.age = by == 0 ? '?' : today[0] - by - 1;
      if (today[1] >= born[1] && today[2] > born[0])
        f.age += 1;
      return f;
    });
    this.ds = new MatTableDataSource<any>(val);
    this.ds.paginator = this.paginator;
    this.ds.sort = this.sort;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
