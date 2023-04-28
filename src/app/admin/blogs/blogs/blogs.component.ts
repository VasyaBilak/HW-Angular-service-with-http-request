import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { BlogsService } from 'src/app/shared/services/blogs/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  public adminBlogs!: IBlog[];
  public title!: string;
  public text!: string;
  public author!: string;
  public imagePath = 'https://freerangestock.com/sample/114385/woman-holding-sliced-pizza-to-eat.jpg';
  public editStatus = false;
  public editID!: number;

  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getAll().subscribe((data) => {
      this.adminBlogs = data;
    });
  }

  addBlog(): void {
    const newBlog = {
      title: this.title,
      text: this.text,
      author: this.author,
      imagePath: this.imagePath,
    };
    if (this.title && this.text && this.author) {
      this.blogService.create(newBlog).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    }
  }

  editBlog(blog: IBlog): void {
    this.title = blog.title;
    this.text = blog.text;
    this.author = blog.author;
    this.imagePath = blog.imagePath;
    this.editStatus = true;
    this.editID = blog.id;
  }

  saveBlog(): void {
    const updateBlog = {
      title: this.title,
      text: this.text,
      author: this.author,
      imagePath: this.imagePath,
    };

    if (this.title && this.text && this.author) {
      this.blogService.update(updateBlog, this.editID).subscribe(() => {
        this.getBlogs();
        this.resetForm();
      });
    }
  }

  deleteBlog(blog: IBlog): void {
    this.blogService.delete(blog.id).subscribe(() => {
      this.getBlogs();
    });
  }

  private resetForm(): void {
    this.text = '';
    this.title = '';
    this.author = '';
    this.imagePath = 'https://freerangestock.com/sample/114385/woman-holding-sliced-pizza-to-eat.jpg';
    this.editStatus = false;
  }
}
