import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Product } from './product/product';
import { Loading } from './loading/loading';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"login",component:Login},
    {path:"product/:id",component:Product},
        {path:"loading",component:Loading},

];
