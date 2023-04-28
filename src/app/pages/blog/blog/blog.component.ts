import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { BlogsService } from 'src/app/shared/services/blogs/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs!: IBlog[];

  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe((data) => {
      this.blogs = data;
    });
  }

}
