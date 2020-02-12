// /**
//  * The main application class. An instance of this class is created by app.js when it
//  * calls Ext.application(). This is the ideal place to handle application launch and
//  * initialization details.
//  */
// Ext.define('form.Application', {
//     extend: 'Ext.app.Application',

//     name: 'form',

//     quickTips: false,
//     platformConfig: {
//         desktop: {
//             quickTips: true
//         }
//     },

//     onAppUpdate: function () {
//         Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
//             function (choice) {
//                 if (choice === 'yes') {
//                     window.location.reload();
//                 }
//             }
//         );
//     }
// });




/**
 * The main application class. An instance of this class is created by `app.js` when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('form.Application', {
    extend: 'Ext.app.Application',

    name: 'form',

    stores: [
        // TODO: add global / shared stores here
    ],
    views: [
        'form.view.login.Login',
        'form.view.main.Main'
    ],
    launch: function (some) {

        var loggedIn = localStorage.getItem('user');
        Ext.widget(loggedIn ? 'app-main' : 'login');
        // console.log(document.getElementById(textfield-1011-inputEl.value))
    }
});


