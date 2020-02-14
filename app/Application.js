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

    }
});


