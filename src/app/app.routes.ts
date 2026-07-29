import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { ListRender } from './list-render/list-render';

export const routes: Routes = [
    {path: '' , component: Login},
    {path: 'list', component: ListRender}
];