import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  socials = [
    {"url":"https://instagram.com/binghamxsolutions", "img": "../icons/iInstagram_black.png", "alt": "Instagram logo"},
    {"url": "https://linkedin.com/in/binghamxsolutions", "img": "../icons/iLinkedIn_black.png", "alt": "LinkedIn logo"}
  ];

  constructor(private menuService: MenuService)   { }
  
  closeMenu() {
    this.menuService.modifyState();
  }
}

