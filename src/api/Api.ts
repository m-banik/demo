export interface ApiConfigInterface {
  baseUrl?: string;
}

export class Api {
  private _baseUrl = '';

  constructor(config?: ApiConfigInterface) {
    if (config && typeof config?.baseUrl === 'string') {
      this.baseUrl = config.baseUrl;
    }
  }

  public get baseUrl() {
    return this._baseUrl;
  }

  public set baseUrl(baseUrl: string) {
    this._baseUrl = baseUrl;
  }
}
