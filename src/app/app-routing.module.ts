import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { TitleRResolver } from './title-r.resolver';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./book/book.component').then((c) => c.BookComponent),
    title:'Home book'
  },
  {
    path: 'add',
    component: AddComponent,
    title:'add new book'
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    title: TitleRResolver
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
