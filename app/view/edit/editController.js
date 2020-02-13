Ext.define('form.view.edit.editController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.edit',


    
    editor(button){
        const vm = this.getViewModel();
        const buttonVm = button.lookupViewModel();
        var storage = button.lookupViewModel().get('kirill');

        var city = button.up().down('textfield').value;
        var country = button.up().down('textfield').nextSibling().value;
        var year = button.up().down('textfield').nextSibling().nextSibling().value;
        var date = button.up().down('textfield').nextSibling().nextSibling().nextSibling().value;


        storage.set({
            'city': city,
            'country': city,
            'year': year,
            'date': date
        })
        button.up().close();

    }
});