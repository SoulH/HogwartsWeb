import { Injectable } from '@angular/core';
import { RegistrationModel } from '../core/models';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { catchError, map, retry, shareReplay, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private collection = 'enrollments';
  constructor(private localdb: NgxIndexedDBService) { }

  public set(data: RegistrationModel) {
    if (data.id) 
      return this.localdb.update(this.collection, data).pipe(map(res => {
        return res[0];
      }));
      delete data.id;
    return this.localdb.add(this.collection, data).pipe(map(res => {
      data.id = res;
      return data;
    }));
  }

  public get(id: number) {
    return this.localdb.getByID<RegistrationModel>(this.collection, id);
  }

  public delete(id: number) {
    return this.localdb.delete<RegistrationModel>(this.collection, id).pipe(map(res => {
      return res[0];
    }));
  }

  public getAll() {
    return this.localdb.getAll<RegistrationModel>(this.collection);
  }

  /*
  public getByIdentification(iden: number) {
    return this.localdb.getAll<RegistrationModel>(this.collection).pipe(switchMap(res => {
      return res.find(f => f.identification == iden);
    }));
  }
  */
}
