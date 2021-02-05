import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, Usuario_login } from '../models/objects';

export class API_Service {
  baseUrl = 'http://174.142.6.165:3000';

  auth_token: String = '';
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {}

  async start(user: Usuario_login) {
    return await this.login(user);
  }

  async login(user: Usuario_login) {
    return await this.httpClient
      .post(`${this.baseUrl}/login`, user)
      .toPromise()
      .then((resp) => {
        this.auth_token = <String>resp;
        this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth_token}`,
        });
      });
  }

  getUsers(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}/api/drugs`, {
      headers: this.headers,
    });
  }

  getUserById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl}/api/users/${id}`, {
      headers: this.headers,
    });
  }
}
