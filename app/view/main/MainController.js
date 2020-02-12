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
        debugger
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
          debugger

    newField.show();
        
    },
    edit(record, element, rowIndex, e, eOpts){
        debugger
        var newRecord = record.lookupViewModel().get('post').data
        console.log(newRecord)
        var newField = Ext.create({
            xtype: 'edit',
            viewModel: {
              parent: this.getViewModel(), // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
              data: {
                kirill: newRecord,
            },
            },
          });
          debugger

    newField.show();
        
    },

    profile(record, element, rowIndex, e, eOpts){
        // var l = btn.up().down('label');
        // l.setHidden(false)
        // var p = btn.up().down('label').nextSibling();
        // p.setHidden(false)
       // var t = element.getData()
        var newField = Ext.create({
            xtype: 'profile',
            viewModel: {
              parent: this.getViewModel() // привязка в нужному окну груббо гоовря  // не перезаписывает обьект а добавляет
            },
          });
          debugger
          var name = this.lookupReference('name');
          var pas = this.lookupReference('password');
          var some = record.lookupViewModel().data.qwe
          name.setText(some.log)
          pas.setText(some.pas)
    newField.show();
    },

    delete(button){
        // debugger
        // const vm = this.getViewModel();
        // var storage = vm.get('post');        
       
        // var somethingNew = vm.get('posts')
        // somethingNew.remove(storage)
        



        debugger
        const vm = this.getViewModel();
        var storage = vm.get('post');        
    
        console.log(storage)
        console.log(button.up().selection)
        var somethingNew = vm.get('posts')
        console.log(somethingNew)
        somethingNew.remove(button.up().selection) // с стора удаляется запись


    },
    logout(){
        this.getView().destroy();
        localStorage.clear();
        Ext.widget('login'); 
    }
});
