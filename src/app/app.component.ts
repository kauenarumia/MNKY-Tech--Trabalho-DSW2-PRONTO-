import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Isso permitirá que as rotas sejam exibidas
  imports: [RouterOutlet]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
