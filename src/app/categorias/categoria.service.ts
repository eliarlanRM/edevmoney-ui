import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoriaService {

  categoriasUrl = '';

  constructor(private http: HttpClient) {
    this.categoriasUrl = `${environment.apiUrl}/categoria`;
   }

  listarTodas(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(this.categoriasUrl, { headers })
      .toPromise();
  }

}
