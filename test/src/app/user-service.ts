import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:8080/user'; // URL de ton backend

  constructor(private http: HttpClient) { }

  
  
  // Ajouter un utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/user/add', user);
  }


salut(){
  return console.log("saluuuuut");
}


  // Récupérer tous les utilisateurs
  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getAll');
  }

  // Récupérer un utilisateur par ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/' + id);
  }

  // Mettre à jour un utilisateur
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/' + id, user);
  }

  // Supprimer un utilisateur
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/delete/' + id);
  }

  // Login
  login(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', user);
  }

}
