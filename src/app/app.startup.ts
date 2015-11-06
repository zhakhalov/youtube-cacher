/// <reference path="app.ts" />

namespace app {
  export class Startup {
    public static $inject: string[] = [
      '$ionicPlatform'
    ];
    
    $ionicPlatform: ionic.platform.IonicPlatformService;
    
    constructor ($ionicPlatform: ionic.platform.IonicPlatformService) {
      this.$ionicPlatform = $ionicPlatform;
      this.$ionicPlatform.ready(this.configCordova);
    }
    
    /**
     * Define Cordova plugins configuration
     */
    private configCordova() {
      if (window.cordova && (window.cordova.plugins as any).Keyboard) {
        (window.cordova.plugins as any).Keyboard.hideKeyboardAccessoryBar(true);
        (window.cordova.plugins as any).Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleDefault();
      }
    }
  }
}

app.Application.context.run(app.Startup);