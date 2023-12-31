import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langArr: any = [
    '../../../../assets/images/en.png',
    '../../../../assets/images/ss.png',
    '../../../../assets/images/dd.png',
    '../../../../assets/images/c.png',
    '../../../../assets/images/b.png'
  ];
  imgIcon!: string;
  toggleMenu: boolean = false;
  menuToggle: boolean = false;
  menuToggleProfle: boolean = false;

  toggleMenuFN() {
    this.toggleMenu = !this.toggleMenu
  }

  ngOnInit() {
    this.imgIcon = this.langArr[0]
  }

  changeIconLang(img: string) {
    this.imgIcon = img;
  }

  menuToggleFN() {
    this.menuToggle = !this.menuToggle;
  }

  menuToggleProfileFN() {
    this.menuToggleProfle = !this.menuToggleProfle;
  }

  closeMenuFN() {
    this.menuToggle = false;
    this.menuToggleProfle = false
  }

}
