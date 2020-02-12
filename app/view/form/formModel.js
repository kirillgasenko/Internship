/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('form.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.login',


    stores: {
        user: {
            autoLoad: true,
            autoSync: true,
            fields: [
                {
                    name: 'login',
                    type: 'string',
                    useNull: true
                }, 'password'],
                validations: [{
                    type: 'int',
                    field: 'password',
                    min: 1
                }
            ],
            proxy: {
                type: 'rest',
                url: 'http://my-json-server.typicode.com/kirillgasenko/Internship/users',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json'
                }
            },
        },
    }

});
