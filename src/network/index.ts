import {EXTERNAL_API_URL, INTERNAL_API_URL} from '../constants/network';
import {ErrorMiddlewareTypeProps} from '../types/network';

type PostRequestProps<T> = {
  url: string;
  body: {[key: string]: any};
  formatData?: (data: any) => T;
};

class Network {
  private static _headers: HeadersInit_ = {
    'Content-Type': 'application/json',
  };

  static async get<T>(
    url: string,
    formatData?: (data: any) => T,
  ): Promise<T | null> {
    const urlToCall = `${INTERNAL_API_URL}${url}`;
    try {
      const response = await fetch(urlToCall, {
        method: 'GET',
        headers: {
          ...this._headers,
        },
      });
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      if (formatData) {
        return formatData(data);
      }
      return data as T;
    } catch (err) {
      return null;
    }
  }

  static async post<T>({
    body,
    url,
    formatData,
  }: PostRequestProps<T>): Promise<T | null> {
    const urlToCall = `${INTERNAL_API_URL}${url}`;
    try {
      const response = await fetch(urlToCall, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          ...this._headers,
        },
      });
      if (!response.ok) {
        return null;
      }
      const data = await response.json();
      if (formatData) {
        return formatData(data);
      }
      return data as T;
    } catch (err) {
      return null;
    }
  }
}

export default Network;
