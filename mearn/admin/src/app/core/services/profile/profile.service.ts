import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  protected url = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  public getRecords(options?: any): Observable<any> {
    let queryParams = options ? options.queryParams : {};
    return this.http.get(`${this.url}/profile`, { params: queryParams }).pipe(map(res => res));
  }

  public insertOrUpdate(id: any, body: any) {
    const data = {
      "data": {
        "type": "profile",
        "attributes": body
      }
    };
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    var response;

    if (id === null) {
      response = this.http.post(`${this.url}/profile`, data, options).pipe(map(res => res))
    } else {
      response = this.http.patch(`${this.url}/profile/${id}`, data, options).pipe(map(res => res))
    }
    return response;
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }

  public deleteProfile(id: any, options?: any) {
    return this.http.delete(`${this.url}/profile/${id}`, options).pipe(map(res => res));
  }

}