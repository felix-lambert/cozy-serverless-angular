var appConfig, routeObject;

appConfig = function($httpProvider, $routeProvider) {
  var path;
  for (path in routeObject) {
    console.log(path);
    $routeProvider.when(path, routeObject[path]);
  }
  $routeProvider.otherwise({
    redirectTo: '/'
  });
  console.log('app config');
};

angular.module('browserapp', ['ngResource', 'ngRoute']).config(appConfig);

routeObject = {
  '/': {
    templateUrl: 'partials/home.html',
    controller: 'HomeAngCtrl',
    controllerAs: 'home'
  }
};

appConfig.$inject = ['$httpProvider', '$routeProvider'];
;var HomeAngCtrl;

HomeAngCtrl = function($scope) {
  var add, define, destroy, destroyRequest, exist, find, update, vm;
  vm = this;
  add = function(user) {
    console.log('create contact');
    cozydb.create('Contact', user, function(err, res) {
      if (err) {
        return alert(err);
      } else {
        return $scope.$apply(function() {
          return vm.contacts = res;
        });
      }
    });
  };
  find = function(id) {
    cozydb.find(id, function(err, res) {
      if (err) {
        alert(err);
      }
      return $scope.$apply(function() {
        console.log(res);
        return vm.contacts = res;
      });
    });
  };
  exist = function(id) {
    cozydb.exists(id, function(err, res) {
      if (err) {
        alert(err);
      }
      return $scope.$apply(function() {
        console.log(res);
        return vm.contacts = res;
      });
    });
  };
  update = function(id, user) {
    cozydb.updateAttributes('Contact', id, user, function(err, res) {
      if (err) {
        alert(err);
      }
      return $scope.$apply(function() {
        return vm.contacts = res;
      });
    });
  };
  destroy = function(id) {
    cozydb.destroy(id, function(err, res) {
      if (err) {
        alert(err);
      }
      return $scope.$apply(function() {
        return vm.contacts = res;
      });
    });
  };
  define = function() {
    cozydb.defineRequest('Contact', 'all', 'function(doc) { emit(doc.n, null); }', function(err, res) {
      if (err) {
        alert(err);
      }
      return cozydb.run('Contact', 'all', {}, function(err, res) {
        return $scope.$apply(function() {
          return vm.contacts = res;
        });
      });
    });
  };
  destroyRequest = function() {
    cozydb.requestDestroy('Contact', 'all', {
      startkey: 'z',
      endkey: 'z'
    }, function(err, res) {
      if (err) {
        alert(err);
      }
      return cozydb.run('Contact', 'all', {}, function(err, res) {
        return $scope.$apply(function() {
          return vm.contacts = res;
        });
      });
    });
  };
  vm.add = add;
  vm.find = find;
  vm.exist = exist;
  vm.update = update;
  vm.destroy = destroy;
  vm.define = define;
  vm.destroyRequest = destroyRequest;
};

angular.module('browserapp').controller('HomeAngCtrl', HomeAngCtrl);

HomeAngCtrl.$inject = ['$scope'];
;
//# sourceMappingURL=app.js.map