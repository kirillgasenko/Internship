Ext.define('form.view.login.LoginController', {              //ЛОГИКА ОКНА
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    

    onLoginClick: function(button) {                                      //по сути проверка на правильность входа 
        var some = null;
        Ext.Array.each(button.lookupViewModel().get('user').data.items, function(name, index, countriesItSelf) {
            login = button.lookupViewModel().get('login')
            console.log(name)
            password = button.lookupViewModel().getData().pas;
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
        console.log(this)
       

        Ext.widget('app-main');             //переадрисация на нужную страни
        }
        else {
            button.up().up().down('label').setHidden(false)
        }

        // for(var i = 0; i< button.lookupViewModel().get('user').data.items.length; i++){
        
        //     some = button.lookupViewModel().getData().user.data.items[i];
        //     console.log(some)
        //     login = button.lookupViewModel().getData().login
        //     password = button.lookupViewModel().getData().pas;
        //     console.log(login)
        //     console.log(password)

        //     if(some.data.login === login && some.data.password === password){
                
        //         user = {
        //             log: login,
        //             pas: password
        //         }

        //         userJ = JSON.stringify(user)
        //         localStorage.setItem('user', userJ);

        //     // Remove Login Window
        //         this.getView().destroy();

        //         // Add the main view to the viewport
        //         Ext.widget('app-main');             //переадрисация на нужную страницу
        //     } else {
        //         var red = this.lookupReference('red');
        //         red.setHidden(false)
        //     }
        // }
    }
});