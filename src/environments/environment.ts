// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //server: 'https://api.lot.com/flights-v1/',
  server: 'http://localhost:3000/',
  apiCredentials: {
    apiKey: '9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg',
    appId: '2przp49a52',
    secretKey: 's5kft57wrPivA93fsf55fggr4pDcB62XPl7'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
