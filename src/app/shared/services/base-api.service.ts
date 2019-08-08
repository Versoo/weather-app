export abstract class BaseApiService {
  protected API_ACCESS_TOKEN: string;
  protected API_BASE_URI: string;
  protected DEFAULT_PARAMS: { [key: string]: any};

  protected generateQueryString(params: {}): string {
    const data = {...this.DEFAULT_PARAMS, ...params};
    return Object.keys(data).map(key => key + '=' + data[key]).join('&');
  }
}
