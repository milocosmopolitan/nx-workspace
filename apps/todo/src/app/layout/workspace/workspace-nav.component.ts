import { Component, ViewEncapsulation, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkspaceNav {
  @Output() public itemSelected = new EventEmitter();
  onButtonClick(key: string) {
    this.itemSelected.emit(key);
  }
}
