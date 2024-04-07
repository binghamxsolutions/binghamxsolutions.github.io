import { Component } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.sass']
})
export class ToTopButtonComponent {
  unsupportedMediaSize = window.matchMedia("(max-width: 239px)");
  mediaQueryTest = window.matchMedia("(max-width: 239px)");

  toTop() {
    var btn = document.getElementsByClassName("to-top");
    var ngbtn = document.getElementsByTagName("app-to-top-button");

    var otherBtnExists = false;

    if (btn.length != 0 || ngbtn.length != 0) {
      if (btn.length > 1) { //checks to see if another button exists
        var otherBtnExists = true;
      }
      
      if ((document.body.scrollTop > 30) || (document.documentElement.scrollTop > 30)) {
        btn[0].setAttribute("style", "display:block");
        ngbtn[0].setAttribute("style", "display:block");
        
        if (otherBtnExists == true) {// only shows the second to-top button if there are more than one
          btn[1].setAttribute("style", "display:block");	
        }
      } else {
        btn[0].setAttribute("style", "display:none");
        ngbtn[0].setAttribute("style", "display:none");
        if (otherBtnExists) {// only shows the second to-top button if there are more than one
          btn[1].setAttribute("style", "display:none");	
        }
      }	
      
    }
  }


  openSubMenu() {
    var nav = document.getElementsByTagName("nav")[1];
    nav.style.visibility = "visible";
    nav.style.opacity = "1";
  }

  closeSubMenu() {
    var nav = document.getElementsByTagName("nav")[1];
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
  }

  openContactOptions() {
    var contactOptionMenu = document.getElementById("contact");
    contactOptionMenu!.style.display = "grid";
  }

  closeContactOptions() {
    var contactOptionMenu = document.getElementById("contact");
    contactOptionMenu!.style.display = "none";
  }

//  window.onpagehide = () => {this.closeSubMenu()};

  /*
  mediaQueryTest.addEventListener('change', event => {
    if(event.matches) {
      window.scrollTo({top: 0, left: 0, behavior: "instant"});
    }
  });

  window.onload = () => {
    if (unsupportedMediaSize.matches) {
      window.scrollTo({top: 0, left: 0, behavior: "instant"});
    }
  };*/

}
