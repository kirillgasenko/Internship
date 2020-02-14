/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('form.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'form.view.main.MainController',
        'form.view.main.MainModel',
        'form.view.main.List',
        'form.view.login.Login',
        'form.view.show.show',
        'form.view.edit.Edit',
        'form.view.profile.Profile'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    frame: true,
    title: 'table',
    plugins: 'viewport',
    layout: {
        type: 'vbox',
    },
    items: [
        {
            xtype: 'panel',
            bind: {
                title: '{name}'
            },
            region: 'top',
            width: '100%',
            split: true,
        },
        {
            xtype: 'table',
            margin: '30 0 0 30',
            bind: {
                store: '{posts}',
                selection: '{post}'
            },
            listeners: {
                rowdblclick: 'info',
            }
        },
        {
            xtype: 'button',
            reference: 'name',
            bind:{
                text: '{qwe.log}'
            },
            listeners: {
                click: 'profile'
            },
        },
        {
            xtype: 'button',
            text: 'Log out',
            listeners: {
                click: 'logout'
            }
        }
    ],
});
