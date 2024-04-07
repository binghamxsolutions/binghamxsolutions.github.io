import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  colorHeader() {
    var header = document.getElementsByTagName("header")[0];
    var nav_items = document.getElementsByTagName("nav")[0].querySelectorAll("a");
    
    if ((document.body.scrollTop > 15) || (document.documentElement.scrollTop > 15)) {
      header.style.backgroundColor = "var(--darkPurple)";
      header.style.boxShadow = "0px 0px 3px #000";
      
      for (var i = 0; i < nav_items.length; i++) {
        nav_items[i].style.color = "var(--fulvous)";
      }
    } else {
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
      for (i = 0; i < nav_items.length; i++) {
        nav_items[i].style.color = "var(--fulvous)";
      }
    }
  }
}
