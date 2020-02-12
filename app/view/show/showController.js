Ext.define('form.view.show.showController', {              //ЛОГИКА ОКНА
    extend: 'Ext.app.ViewController',
    alias: 'controller.show',
    

    qwe(a){
        city = a.up().down('label');
        country = a.up().down('label').nextSibling();
        year = a.up().down('label').nextSibling().nextSibling()
        date = a.up().down('label').nextSibling().nextSibling().nextSibling()
        city.setText('qwe')
        
    }
});