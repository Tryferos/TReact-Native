This is a new **React Native** Template

# Getting Started

Create a react-native app

```bash
npx react-native init YourApplicationName
```

Pull the code and replace old files with the new files (only files with the same file_name.extension)

```bash
git pull https://github.com/Tryferos/TReact-Native
```

Make sure any merge conflicts are resolved.

## Install the depedencies

```bash
npm run init
```

## Finally follow these guides to setup your environment

- [react-native-vector-icons setup](https://github.com/oblador/react-native-vector-icons/tree/master?tab=readme-ov-file)

## Add the following lines to android folder.

`android/buiid.gradle`

```gradle
depedencies {
...
classpath("com.google.gms:google-services:4.4.2")
}
```

`android/app/build.gradle`

```gradle
...
apply plugin: 'com.google.gms.google-services'
...

depedencies{
    ...
    implementation project(':react-native-vector-icons')

    implementation 'com.google.android.gms:play-services-auth:21.0.0'
}
...
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
```

`android/settings.gradle`

```gradle
...
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

## Useful Resources

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
