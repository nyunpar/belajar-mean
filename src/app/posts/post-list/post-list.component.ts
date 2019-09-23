import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts= [
    {title : 'Post Pertama', content : 'Ini Konten Pertama'},
    {title : 'Post Kedua', content : 'Ini Konten Kedua'},
    {title : 'Post Ketiga', content : 'Ini Konten Ketiga'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
