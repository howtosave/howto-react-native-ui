# Build and Deploy

## Android

```sh
# install eas
npm install -g eas

# install sharp-cli
npm install -g sharp-cli

# on project root directory
# generate project id
eas init

# build on local
eas build -p android --profile preview --local
```

### Android keystore

- location: ~/.android/debug.keystore
- store password: android
- alias: androiddebugkey
- key password: android

```sh
# list keys
keytool -list -v -keystore ~/.android/debug.keystore -storepass android

# 
keytool -list -v -keystore ~/.android/debug.keystore -storepass android -alias androiddebugkey -keypass android
```
