import {Component} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',

})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'TIDAK ADA KONTEN';

  onAddPost(postInput: HTMLTextAreaElement) {
    // console.dir(postInput);
    this.newPost = postInput.value;
  }
}
