import { Component } from '@angular/core';
import { UserService } from '../user-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const user = {
      firstName:this.firstName,
      lastName: this.lastName,
      username: this.username,
      email: this.email,
      password: this.password
    };




    this.userService.createUser(user).subscribe(
      () => {
        alert('Inscription réussie !');


        this.router.navigate(['login']); // redirige vers login après succès
      
      
      
      }
    );

    

}


}