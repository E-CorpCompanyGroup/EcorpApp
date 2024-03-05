ENVIRONMENT('TEST');

APPMODE('','','teal')
// Import the module and start the app
import("./Connection/connection.js").then((module) => {
    const { CONNECTION } = module;
    CONNECTION();
})