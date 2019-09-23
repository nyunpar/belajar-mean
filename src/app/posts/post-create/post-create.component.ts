import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
  @Output() postEmitted = new EventEmitter();
  enteredTitle = '';
  enteredContent = '';

  onAddPost() {
    const posts = {title : this.enteredTitle, content: this.enteredContent};
    this.postEmitted.emit(posts);
  }
}
