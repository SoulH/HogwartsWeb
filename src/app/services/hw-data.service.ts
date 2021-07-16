import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HwDataService {
  private url_base: string = "http://hp-api.herokuapp.com/api/";

  constructor(private http: HttpClient) { }
  
  public getCharacters(house: string) {
    const path = `characters/house/${house}`;
    return this.http.get<any[]>(this.url_base + path);
  }

  public getStudents() {
    const path = "characters/students";
    return this.http.get<any[]>(this.url_base + path);
  }

  public getTeachers() {
    const path = "characters/staff";
    return this.http.get<any[]>(this.url_base + path);
  }
}
