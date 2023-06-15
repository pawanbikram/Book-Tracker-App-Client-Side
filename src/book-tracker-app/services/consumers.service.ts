import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Consumer } from '../modules/home/models/consumer.model';

@Injectable({
  providedIn: 'root'
})

export class ConsumersService {
  baseApiUrl: string = 'https://localhost:7268';

  constructor(private http: HttpClient) { }
  
  getAllConsumers(): Observable<Array<Consumer>> {
    return this.http.get<Array<Consumer>>(this.baseApiUrl + '/api/Consumer');
  }

  addConsumer(addConsumerRequest: Consumer): Observable<Consumer> {
    return this.http.post<Consumer>(this.baseApiUrl + '/api/Consumer', addConsumerRequest);
  }

  getConsumer(id: string): Observable<Consumer> {
    return this.http.get<Consumer>(this.baseApiUrl + '/api/Consumer/' + id);
  }

  updateConsumer(id: number, updateConsumerRequest: Consumer): Observable<Consumer> {
    return this.http.put<Consumer>(this.baseApiUrl + '/api/Consumer/' + id, updateConsumerRequest);
  }
  
  deleteConsumer(id: number): Observable<Consumer> {
    return this.http.delete<Consumer>(this.baseApiUrl + '/api/Consumer/' + id);
  }
}