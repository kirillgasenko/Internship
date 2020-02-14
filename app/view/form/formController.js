Ext.define('form.view.login.LoginController', {              //ЛОГИКА ОКНА
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    

    onLoginClick: function(button) {                                      //по сути проверка на правильность входа 
        var some = null;
        Ext.Array.each(button.lookupViewModel().get('user').data.items, function(name, index, countriesItSelf) {
            login = button.lookupViewModel().get('login')
            password = button.lookupViewModel().get('pas');
            if(name && name.data.login === login && name.data.password === password){
                some = {
                    log: login,
                    pas: password
                }

            } 
             
        });
        if(some){

        
        userJ = JSON.stringify(some)
        localStorage.setItem('user', userJ);


        button.up().up().up().destroy() 

        Ext.widget('app-main');             //переадрисация на нужную страни
        }
        else {
            button.up().up().down('label').setHidden(false)
        }

    }
});