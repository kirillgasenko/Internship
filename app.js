/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'form.Application',

    name: 'form',

    requires: [
        // This will automatically load all classes in the form namespace
        // so that application classes do not need to require each other.
        'form.*'
    ],

    // The name of the initial view to create.
   //mainView: 'form.view.main.Main'
});
