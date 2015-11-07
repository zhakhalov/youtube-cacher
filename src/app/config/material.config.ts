namespace app.config {
  export class MaterialDesignConfig {
    public static $inject: string[] = [
      '$mdThemingProvider'
    ];
    
    constructor($mdThemingProvider: ng.material.IThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
    }
  }
}

// app.Application.context.config(app.config.MaterialDesignConfig);