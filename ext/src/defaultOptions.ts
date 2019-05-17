"use strict";

export interface Options {
    bridgeApplicationName: string;
    mediaEnabled: boolean;
    mediaSyncElement: boolean;
    mediaStopOnUnload: boolean;
    localMediaEnabled: boolean;
    localMediaServerPort: number;
    mirroringEnabled: boolean;
    mirroringAppId: string;
    userAgentWhitelistEnabled: boolean;
    userAgentWhitelist: string[];

    [key: string]: Options[keyof Options];
}

const options: Options = {
    bridgeApplicationName: APPLICATION_NAME
  , mediaEnabled: true
  , mediaSyncElement: false
  , mediaStopOnUnload: false
  , localMediaEnabled: true
  , localMediaServerPort: 9555
  , mirroringEnabled: false
  , mirroringAppId: MIRRORING_APP_ID
  , userAgentWhitelistEnabled: true
  , userAgentWhitelist: [
        "https://www.netflix.com/*"
    ]
};

export default options;
