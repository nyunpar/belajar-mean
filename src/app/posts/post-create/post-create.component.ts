import {Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
  @Output() postEmitted = new EventEmitter<Post>();
  enteredTitle = '';
  enteredContent = '';

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const posts: Post = {
      title : form.value.title,
      content: form.value.content};
    this.postEmitted.emit(posts);
  }
}
