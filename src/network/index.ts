import {EXTERNAL_API_URL} from '../constants/network';

class Network {
  static async get<T>(url: string, formatData?: (data: any) => T): Promise<T> {
    const response = await fetch(`${EXTERNAL_API_URL}${url}`, {
      //TODO REPLACE EXTERNAL API WITH INTERNAL API
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data as T;
  }
}

export default Network;
