import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redbixbite';

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar') as HTMLElement | null;
    const mainContent = document.getElementById('content') as HTMLElement | null;

    if (sidebar && mainContent) {
      if (sidebar.style.float === 'left' || sidebar.style.float === '') {
        sidebar.style.float = 'right';
        mainContent.style.marginLeft = '0';
        mainContent.style.marginRight = '200px'
      }
      // else {
      //   sidebar.style.float = 'left';
      //   mainContent.style.marginLeft = '200px';
      //   mainContent.style.marginRight = '-200px'
      // }
    }
  }

  english() {
    const sidebar = document.getElementById('sidebar') as HTMLElement | null;
    const mainContent = document.getElementById('content') as HTMLElement | null;
    if (sidebar && mainContent) {
      if (sidebar.style.float === 'right' || sidebar.style.float === '') {
        sidebar.style.float = 'left';
        mainContent.style.marginLeft = '200px';
        mainContent.style.marginRight = '-200px'
      }
    }

  }


}
