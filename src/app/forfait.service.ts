import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ForfaitService {
 
  API_URL = 'http://localhost/projet1_angular/src/api/forfaits.php';

  constructor(private http: HttpClient) { }
  
  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this. API_URL);  
  }

  
  addForfait(forfait : Forfait): Observable<void> {
    console.log(forfait);
    return this.http.post<void>(this.API_URL, forfait, httpOptions);
  }

  
  updateForfait(forfait: Forfait): Observable<void> {
    return this.http.put<void>(`${this.API_URL}?id=${forfait.id}`, forfait, httpOptions);
  }

  deleteForfait(id: number): Observable<void> {
    console.log(`${this.API_URL}\\${id}`);
    return this.http.delete<void>(`${this.API_URL}?id=${id}`);
  }


}
