/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('form.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        post: null,
        qwe: JSON.parse(localStorage.getItem('user'))
    },
    formulas: {
        some: {
            bind: {
                text: 'post'
            },
            get: function(data){
                return data
            },
        },
    },
    stores: {
        posts: {
            autoLoad: true,
            autoSync: true,
            fields: [
                {
                    name: 'id',
                    type: 'string',
                    useNull: true
                }, 'city', 'country', 'year', 'date'],
                validations: [
                {
                    type: 'string',
                    field: 'city',
                    min: 1
                },
                {
                    type: 'string',
                    field: 'country',
                    min: 1
                },
                {
                    type: 'int',
                    field: 'year',
                    min: 1
                },
                {
                    type: 'int',
                    field: 'date',
                    min: 1
                },
                {
                    xtype: 'button',
                    text: 'date',
                },
                
            ],
            proxy: {
                type: 'rest',
                url: 'http://my-json-server.typicode.com/kirillgasenko/Internship/posts',
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
    //TODO - add data, formulas and/or methods to support your view
});
