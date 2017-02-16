import { Component } from '@angular/core';
import X2JS from 'x2js';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { 
	xml = `
		<notes attr="atVal">
			<note>A</note>
			<note>B</note>
		</notes>`;
	name = 'Angular' + this.process();

	process(){
		let xj = new X2JS();
    let x:any = xj.xml2js(this.xml)
    return x.notes.note[0];
	}
}

