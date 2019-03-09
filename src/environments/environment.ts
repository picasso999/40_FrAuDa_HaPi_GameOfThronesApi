// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAdF8NVYvqpuesvxil7id4phi8y931p5uI',
    authDomain: 'angular-portfolio-fd68f.firebaseapp.com',
    databaseURL: 'https://angular-portfolio-fd68f.firebaseio.com',
    projectId: 'angular-portfolio-fd68f',
    storageBucket: 'angular-portfolio-fd68f.appspot.com',
    messagingSenderId: '446735974078'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
