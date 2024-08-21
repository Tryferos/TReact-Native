import {EXTERNAL_API_URL, INTERNAL_API_URL} from '../constants/network';
import {useUserAuthentication} from '../store/authentication';
import useLoader from '../store/loader';
import {ErrorMiddlewareTypeProps} from '../types/network';

type PostRequestProps<T> = {
  url: string;
  body?: {[key: string]: any};
  formatData?: (data: any) => T;
};

class Network {
  private static _headers = () => {
    return {
      'Content-Type': 'application/json',
      'x-authentication-token': useUserAuthentication.getState().idToken ?? '',
    } as HeadersInit_;
  };

  static async get<T>({
    url,
    formatData,
  }: Omit<PostRequestProps<T>, 'body'>): Promise<T | null> {
    const urlToCall = `${INTERNAL_API_URL}${url}`;
    try {
      useLoader.getState().showLoader();
      const response = await fetch(urlToCall, {
        method: 'GET',
        headers: {
          ...this._headers(),
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
    } finally {
      useLoader.getState().hideLoader();
    }
  }

  static async post<T>({
    body,
    url,
    formatData,
  }: PostRequestProps<T>): Promise<T | null> {
    const urlToCall = `${INTERNAL_API_URL}${url}`;
    try {
      useLoader.getState().showLoader();
      const response = await fetch(urlToCall, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          ...this._headers(),
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
    } finally {
      useLoader.getState().hideLoader();
    }
  }
}

export default Network;
