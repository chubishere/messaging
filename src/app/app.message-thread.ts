import { Component } from '@angular/core';
import '../sass/message-thread.scss';

@Component({
  selector: 'my-message-thread',
  template: `
		<div class="message-thread">
      <div class="message">a</div>
      <div class="message">b</div>
      <div class="message">c</div>
      <div class="message">d</div>
		</div>
	`
})
export class MessageThreadComponent { 
}