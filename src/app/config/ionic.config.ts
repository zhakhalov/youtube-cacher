/// <reference path="../app.ts" />

namespace app.config {
  export class IonicConfig {
    public static $inject: string[] = [
      '$ionicConfigProvider'
    ];
    
    constructor($ionicConfigProvider: ionic.utility.IonicConfigProvider) {
      $ionicConfigProvider.backButton.previousTitleText(false);
      $ionicConfigProvider.backButton.text('');
    }
  }
}

app.Application.context.config(app.config.IonicConfig);