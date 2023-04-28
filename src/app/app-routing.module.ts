import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './admin/blogs/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog/blog.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin/blogs' },
  { path: 'blog', component: BlogComponent },
  { path: 'admin/blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
