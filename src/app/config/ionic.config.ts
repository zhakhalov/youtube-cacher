
namespace app.config {
  class IonicConfig {
    public static $inject: string[] = [
      '$ionicConfigProvider',
    ];
    
    constructor($ionicConfigProvider: ionic.utility.IonicConfigProvider) {
      //-----------------------------------------------------------------------------------------------------
      //                                                                                           backButton
      //-----------------------------------------------------------------------------------------------------
      $ionicConfigProvider.backButton.previousTitleText(false);
      $ionicConfigProvider.backButton.text('');
      $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
    }
  }
  
  Application.context.config(IonicConfig);
}