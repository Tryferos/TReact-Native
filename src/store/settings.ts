import {create} from 'zustand';
import {UserSettings} from '../constants/settings';
import {UserSettingsProps} from '../types/settings';

export const useUserSettings = create<UserSettingsType>()(set => ({
  theme: 'light',
  language: 'en',
  init: async () => {
    const theme = await UserSettings.getTheme();
    const language = await UserSettings.getLanguage();
    set({theme, language});
  },
  setTheme: async (theme: UserSettingsProps['theme']) => {
    await UserSettings.setTheme(theme as UserSettingsProps['theme']);
    set({theme});
  },
  setLanguage: async (language: UserSettingsProps['language']) => {
    await UserSettings.setLanguage(language as UserSettingsProps['language']);
    set({language});
  },
}));

type UserSettingsType = {
  init: () => Promise<void>;
  setTheme: (theme: UserSettingsProps['theme']) => Promise<void>;
  setLanguage: (language: UserSettingsProps['language']) => Promise<void>;
} & UserSettingsProps;

export const getLanguageName = () => {
  const language = useUserSettings.getState().language;
  switch (language) {
    case 'en':
      return 'English';
    case 'el':
      return 'Ελληνικά';
    default:
      return 'English';
  }
};
