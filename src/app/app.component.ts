import { Component } from '@angular/core';
import '../sass/main.scss';

@Component({
  selector: 'my-app',
  template: `
		<div class="nav bordered">nav</div>
		<div class="layout">
			<my-message-thread class="layout__left"></my-message-thread>
			<div class="layout__right">view</div>
		</div>
	`
})
export class AppComponent { 

	process(){
	}
}

