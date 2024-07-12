import {EXTERNAL_API_URL} from '../constants/network';

class Network {
  private static _headers: HeadersInit_ = {
    'Content-Type': 'application/json',
  };

  static async get<T>(url: string, formatData?: (data: any) => T): Promise<T> {
    const response = await fetch(`${EXTERNAL_API_URL}${url}`, {
      //TODO REPLACE EXTERNAL API WITH INTERNAL API
      method: 'GET',
      headers: {
        ...this._headers,
      },
    });
    const data = await response.json();
    if (formatData) {
      return formatData(data);
    }
    return data as T;
  }

  static async post<T>(url: string, body: {[key: string]: any}): Promise<T> {
    const response = await fetch(`${EXTERNAL_API_URL}${url}`, {
      //TODO REPLACE EXTERNAL API WITH INTERNAL API
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data as T;
  }
}

export default Network;
