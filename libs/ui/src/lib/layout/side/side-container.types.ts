export enum Side {
  Left = 'left',
  Right = 'right'
}


export enum SideContainerStatus {
  Opened = 'opened',
  Closed = 'closed'
}

export enum SideContainerSizeStatus {
  Default = 'default',
  Minimized = 'minimized',
  Widened = 'widened'
}

export interface LayoutSideStatusChangeEvent {
  status: SideContainerSizeStatus;
  width: number;
}