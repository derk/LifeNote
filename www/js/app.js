// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $ionicPopup, $location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.platform.android.tabs.position("bottom");
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.views.maxCache(0);
  $ionicConfigProvider.navBar.alignTitle("center");

  $stateProvider


  
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.budget', {
    url: "/budget",
    views: {
      'menuContent': {
        templateUrl: "templates/budget.html",
          controller: 'BudgetCtrl'
      }
    }
  })

  .state('app.homePage', {
    url: "/homePage",
    views: {
      'menuContent': {
        templateUrl: "templates/homePage.html"
      }
    }
  })
    .state('app.addRecord', {
      url: "/addRecord",
      views: {
        'menuContent': {
          templateUrl: "templates/addRecord.html",
          controller: 'addRecordCtrl'
        }
      }
    })

  .state('app.backdrop',{
  	url: "/backdrop",
  	views: {
  		'menuContent': {
  			templateUrl: "templates/backdrop.html",
  			controller: 'backdropCtrl'
  		}
  	}
  })

  .state('app.infinite',{
  	url: "/infinite",
  	views: {
  		'menuContent': {
  			templateUrl: "templates/infinite.html",
  			controller: 'infiniteCtrl'
  		}
  	}
  })

  
  .state('tabs', {
  	url: "/tabs",
  	abstract: true,
  	templateUrl: "templates/loginOrRegist.html",
  	controller: "tabsCtrl"
  })
  .state('tabs.login', {
  	url: "/login",
  	views: {
  		'login-tab': {
  			templateUrl: "templates/login.html",
  			controller: "loginCtrl"
  		}
  	}
  })
  .state('tabs.regist', {
  	url: "/regist",
  	views: {
  		'regist-tab': {
  			templateUrl: "templates/regist.html",
  			controller: "registCtrl"
  		}
  	}
  })

  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/login');
});
