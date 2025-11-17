import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private baseUrl = 'http://localhost:8080/post'; // URL de ton backend

  constructor(private http: HttpClient) { }

  // Ajouter un post
  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/add', post);
  }

  // Récupérer tous les posts
  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getAll');
  }

  // Récupérer un post par ID
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/get/' + id);
  }

  // Mettre à jour un post
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/update/' + id, post);
  }

  // Supprimer un post
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + '/delete/' + id);
  }
  
}
