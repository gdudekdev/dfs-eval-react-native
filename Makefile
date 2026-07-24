ANDROID_STUDIO_JBR := /Applications/Android Studio.app/Contents/jbr/Contents/Home
ifneq ($(wildcard $(ANDROID_STUDIO_JBR)),)
export JAVA_HOME := $(ANDROID_STUDIO_JBR)
endif

.DEFAULT_GOAL := help

.PHONY: install start android run ios clean-android reset devices doctor

install: 
	npm install

start:
	npx react-native start

android:
	npx react-native run-android

run: android 

ios: 
	npx react-native run-ios

reset:
	npx react-native start --reset-cache

clean-android:
	cd android && ./gradlew clean

doctor:
	npx react-native doctor
