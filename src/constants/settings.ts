import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserSettingsProps} from '../types/settings';

type Keys = keyof UserSettingsProps;

type Values = UserSettingsProps[Keys] | null;

export class UserSettings {
  static async get(key: Keys): Promise<Values> {
    return (await AsyncStorage.getItem(key)) as Values;
  }

  static async set(key: Keys, value: UserSettingsProps[Keys]): Promise<void> {
    await AsyncStorage.setItem(key, value);
  }

  static async setTheme(theme: UserSettingsProps['theme']) {
    UserSettings.set('theme', theme);
  }

  static async setLanguage(language: UserSettingsProps['language']) {
    UserSettings.set('language', language);
  }

  static async getTheme(): Promise<UserSettingsProps['theme']> {
    return (await UserSettings.get('theme')) as UserSettingsProps['theme'];
  }

  static async getLanguage(): Promise<UserSettingsProps['language']> {
    return (await UserSettings.get(
      'language',
    )) as UserSettingsProps['language'];
  }
}
