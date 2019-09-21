import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',

})
export class PostCreateComponent {
  newPost = 'TIDAK ADA KONTEN';

  onAddPost() {
    this.newPost = 'Post Pengguna';
    alert('Post Ditambah');
  }
}
