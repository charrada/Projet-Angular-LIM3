import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FormsModule,CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {

  posts: any[] = [];
  title: string = '';
  body: string = '';
  editingId: number | null = null; 

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => console.error('Erreur lors du chargement', err)
    });
  }

  addOrUpdatePost() {
    const post = { title: this.title, body: this.body };

    if (this.editingId) {
      // Mode modification
      this.postService.updatePost(this.editingId, post).subscribe({
        next: () => {
          alert('Post mis à jour !');
          this.resetForm();
          this.loadPosts();
        },
        error: (err) => console.error('Erreur update', err)
      });
    } else {
      // Mode ajout
      this.postService.addPost(post).subscribe({
        next: () => {
          alert('Post ajouté !');
          this.resetForm();
          this.loadPosts();
        },
        error: (err) => console.error('Erreur ajout', err)
      });
    }
  }

  editPost(post: any) {
    this.editingId = post.id;
    this.title = post.title;
    this.body = post.body;
  }

  deletePost(id: number) {
    if (confirm('Supprimer ce post ?')) {
      this.postService.deletePost(id).subscribe({
        next: () => {
          alert('Post supprimé !');
          this.loadPosts();
        },
        error: (err) => console.error('Erreur suppression', err)
      });
    }
  }

  resetForm() {
    this.title = '';
    this.body = '';
    this.editingId = null;
  }

}
