export type NavigationParamList = {
  [key in keyof typeof MainNavigatorScreenNames]: undefined;
};

export const MainNavigatorScreenNames = {
  Main_Home: 'Main_Home',
} as const;
