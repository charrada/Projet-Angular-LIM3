import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Product } from './product/product';
import { Loading } from './loading/loading';
import { Register } from './register/register';
import { Post } from './post/post';
import { Test } from './test/test';

export const routes: Routes = [
    {path:"home",component:Home},
    {path:"login",component:Login},
    {path:"product/:id",component:Product},
    {path:"loading",component:Loading},
    {path:"register",component:Register},
    {path:"post",component:Post},
    {path:"test1",component:Test}
];
