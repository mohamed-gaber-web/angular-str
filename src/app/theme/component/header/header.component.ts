import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleMenu: boolean = false;

  toggleMenuFN() {
    this.toggleMenu = !this.toggleMenu
  }

}
