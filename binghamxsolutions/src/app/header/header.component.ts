import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent  {
  public state?: boolean;

  constructor(private menuService: MenuService) { this.checkStatus() }

  toggleMenu() {
    this.menuService.modifyState();
    this.checkStatus();
  }

  checkStatus() {
    this.state = this.menuService.getState();
  }
}
