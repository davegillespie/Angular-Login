"use strict";

function signInController(SignInService) {
    
  const ctrl = this;

  ctrl.SignInService = SignInService;

  ctrl.name = "";
  ctrl.password = "";


    ctrl.loginform = function(info) {
      console.log("working");
      ctrl.logform.uname.$setValidity("username", true);
      ctrl.logform.pwd.$setValidity("pwd", true);
      if (info) {
          if (response.success) {
        SignInService.SetCredentials(ctrl.username, ctrl.password);
        console.log("test");
      } else {
          ctrl.error = response.message;
          ctrl.dataLoading = false;
          console.log("trying");
      }
    }
  };
}

// };
  
  
  angular
    .module('LoginApp')
    .component('signIn', {
        template: `
           
    <form ng-submit="loginform(logform.$valid)" name="logform" novalidate role="form">
      <div>
        <input type="text" placeholder="Username" ng-model="$ctrl.name" ></input>
        
      </div>
      <div>
        <input type="text" placeholder="Password" ng-model="$ctrl.password" ></input>
        
      </div>
      <div>
        <button type="submit" ng-click="$ctrl.SignInService.setInfo({name: $ctrl.name, password: $ctrl.password})">Submit</button>
      </div>
    </form>

        `,
        controller: signInController
});
