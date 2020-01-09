import { NodeWithChildren } from './node.interface';

export interface INavItemNode extends NodeWithChildren<INavItemNode> {
  label: string;
  route?: string;
  ariaLabel?: string;
  icon?: string;
  /** Whether ripples are disabled. */
  disableRipple?: boolean;
  onClick?: (e?: any) => void;
}

export interface INavListNode extends NodeWithChildren<INavItemNode> {
  /** Displayed label for nav list group */
  groupLabel?: string;
  /** Whether ripples are disabled. */
  disableRipple?: boolean;
}
