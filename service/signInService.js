// Create a service file named sign-in-service.js in the service folder. Declare a service named SignInService which has one method named setInfo. setInfo has one parameter and the parameter is assigned to a property of the service named info. setInfo simply logs the value to the console.

// Finally, create a component file in the components folder named signIn.js. Create a component named signIn that renders two inputs and a button.

// One input will take a name and the other will take a password. If the user enters information into the two inputs and clicks the button, the information from the inputs are passed to the service as a single object and logged to the console.



function SignInService() {

      const service = this;

      service.info = {};

      // service.signIn = () => {

      service.setInfo = (data) => {
            service.info =data;
            console.log(data);

        // let response = { success: service.username === 'Dave' && service.password === '123' };
        //     if (!response.success) {
        //           console.log("Username or password is incorrect");
        //       }
        //     if (response.success) {
        //         SignInService.SetCredentials(ctrl.username, ctrl.password);
        //       console.log("Welcome!");
        //     } 
        //     else {
        //         ctrl.error = response.message;
        //         ctrl.dataLoading = false;
        //         console.log("trying");
        //     }
      }
}

angular
      .module("LoginApp")
      .service("SignInService", SignInService);

