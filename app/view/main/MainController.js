/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('form.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    hello(button){
        name = 
        q = JSON.parse(localStorage.getItem('user'))
        console.log(q.log)
    },
    info(record, element, rowIndex, e, eOpts){
        var t = element.getData()
        var newField = Ext.create({
            xtype: 'info',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            },
          });

    newField.show();
        
    },
    edit(record, element, rowIndex, e, eOpts){
        var myData = record.getWidgetRecord();
        var newField = Ext.create({
            xtype: 'edit',
            viewModel: {
              parent: this.getViewModel(), // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
              data: {
                kirill: myData,
            },
            },
          });

    newField.show();
        
    },

    profile(record, element, rowIndex, e, eOpts){
        var newField = Ext.create({
            xtype: 'profile',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            },
          });
          var name = this.lookupReference('name');
          var pas = this.lookupReference('password');
          var some = record.lookupViewModel().data.qwe
          name.setText(some.log)
          pas.setText(some.pas)
    newField.show();
    },

    delete(button){

        const vm = this.getViewModel();       
        var somethingNew = vm.get('posts')
        var t = button.getWidgetRecord();
        somethingNew.remove(t)
    },
    logout(){
        this.getView().destroy();
        localStorage.clear();
        Ext.widget('login'); 
    }
});
