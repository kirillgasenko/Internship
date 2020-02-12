Ext.define('form.view.profile.Profile', {                    //ОКНО ВХОДА
    extend: 'Ext.window.Window',
    xtype: 'profile',

    requires: [                                                  //указываем как классы должны подгрузиться
        'form.view.login.LoginController',           
        'Ext.form.Panel'
    ],
    
    bodyPadding: 10,
    title: 'Login Window',                        
    autoShow: true,  
    closable: true,

    items: {
        xtype: 'form',                                  //тип окна входа
        layout: { type: 'vbox' },
        reference: 'form',
        items: [
            {                               // создаем необходимые комоненты в форме
                xtype: 'label',
                reference: 'name',
            }, 
            {                               // создаем необходимые комоненты в форме
                xtype: 'label',
                reference: 'password',
            }
        ],
    }
});
