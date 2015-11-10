namespace app.config {
  export class MaterialDesignConfig {
    public static $inject: string[] = [
      '$mdThemingProvider'
    ];
    
    constructor($mdThemingProvider: ng.material.IThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue-grey');
    }
  }
}

app.Application.context.config(app.config.MaterialDesignConfig);