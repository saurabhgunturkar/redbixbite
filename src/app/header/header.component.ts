import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private translate: TranslateService, public toggle: AppComponent) {

    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en'); 
  }

  Temp: any;
  Flag: any = 'Arbic';

  switchLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }

  toggleSidebar() {
    debugger;
    this.toggle.toggleSidebar();
    this.Temp = true;
    this.Flag = 'English'
  }

  englishToggle() {
    debugger;
    this.toggle.english();
    this.Temp = false;
    this.Flag = 'Arbic'
  }

}
