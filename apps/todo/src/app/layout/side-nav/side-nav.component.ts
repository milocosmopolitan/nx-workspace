import { Component, ViewEncapsulation } from "@angular/core";
// import { INavNode } from '@workspace/ui'

@Component({
  // tslint:disable-next-line
  selector: 'todo-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent {

  navItems = [
    {
      label: 'dashboard',
      ariaLabel: 'Navigate to dashboard page',
      icon: 'dashboard',
      route: '/dashboard'
    },    
    {
      label: 'invoice',
      ariaLabel: 'Navigate to invoice page',
      icon: 'dashboard',
      route: '/invoice'
    },
    {
      label: 'tasks',
      ariaLabel: 'Navigate to task page',
      icon: 'dashboard',
      route: '/invoice'
    }
  ]  
}
