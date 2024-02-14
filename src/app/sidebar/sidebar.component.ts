import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  name = 'John';
  currentDate: Date = new Date();
  currentDateTime: Date = new Date();

  isCollapsed = false;
  openGroup: string | null = null;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleGroup(group: string): void {
    if (this.openGroup === group) {
      this.openGroup = null;
    } else {
      this.openGroup = group;
    }
  }

  isGroupOpen(group: string): boolean {
    return this.openGroup === group;
  }


}
