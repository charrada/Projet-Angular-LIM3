import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.userService.login(user).subscribe(
      (res: any) => {
        if (res) {
          alert('Login réussi !');
          // Redirige vers la page de ton choix
          this.router.navigate(['loading']);
        } else {
          alert('Email ou mot de passe incorrect.');
        }
      },
      (err) => {
        console.error(err);
        alert('Erreur lors de la connexion.');
      }
    );
  }

}
