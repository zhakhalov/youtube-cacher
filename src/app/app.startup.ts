/// <reference path="app.ts" />

namespace app {
  export class Startup {
    public static $inject: string[] = [
      '$ionicPlatform',
      'youtubePlaylistItems',
      'angularLoad',
    ];

    $ionicPlatform: ionic.platform.IonicPlatformService;
    youtubePlaylistItems: gapi.client.youtube.playlistItems;

    constructor (
      $ionicPlatform: ionic.platform.IonicPlatformService,
      youtubePlaylistItems: gapi.client.youtube.playlistItems,
      angularLoad: angularLoad.IAngularLoadService
    ) {
      this.$ionicPlatform = $ionicPlatform;
      this.$ionicPlatform.ready(this.configCordova);
      this.youtubePlaylistItems = youtubePlaylistItems;

      this.youtubePlaylistItems.list({
        part: '',
        playlistId: 'PLCRghUq8yiQtGv9HP5GPqnVj8CwRVPyBZ',
      })
      .then((result: any) => {
        console.log('success', result);
      }, (result: any) => {
        console.log('failure', result);
      });
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