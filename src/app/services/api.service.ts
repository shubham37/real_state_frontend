import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string;
  constructor(private httpClient: HttpClient) { 
    this.url = 'http://localhost:8000/api';
  }

  customerQuery(contactData): Observable<any> {
    return this.httpClient.post<any>(this.url + '/contact/', {
      contactData
    });
  }

  SearchQuery(options) : Observable<any> {
    return this.httpClient.get(this.url + '/search', {'params': options}
    );
  }

  getProperty(prop_id) : Observable<any> {
    return this.httpClient.get(this.url+'/property/'+prop_id)
  }

  getPropertyReview(prop_id) : Observable<any> {
    return this.httpClient.get(this.url+'/review/'+prop_id)
  }
 
  writeReview(prop_id, reviewData) : Observable<any> {
    return this.httpClient.post<any>(this.url+'/review/'+prop_id+'/add_review/',
    {
      reviewData
    })
  }

  getReviews() : Observable<any> {
    return this.httpClient.get(this.url+'/review')
  }

}
