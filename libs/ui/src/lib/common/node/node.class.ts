export abstract class AbstractNodeWithChildren<Meta> {
  private _meta: Meta;
  public get meta() { return this._meta; };
  public set meta(value: Meta) {
    this._meta = value;
  }

  
}

export abstract class AbstractNode {}