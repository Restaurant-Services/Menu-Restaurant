import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zumi-sushi';

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler($event: Event): any {
    const message = `Attenzione, aggiornando o chiudendo la pagina perderai l'ordine`;
    $event.preventDefault();
    $event.returnValue = false;
    return message;
  }
}
