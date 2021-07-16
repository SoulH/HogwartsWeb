import { Injectable } from '@angular/core';
import { RegistrationModel } from '../core/models';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { catchError, retry, shareReplay, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private localdb: NgxIndexedDBService) { }

  public add(data: RegistrationModel) {
    return this.localdb.add('enrollments', data);
  }

  public getAll() {
    return this.localdb.getAll<RegistrationModel>('enrollments');
  }

  /*
  public getByIdentification(iden: number) {
    return this.localdb.getAll<RegistrationModel>('enrollments').pipe(switchMap(res => {
      return res.find(f => f.identification == iden);
    }));
  }
  */
}
