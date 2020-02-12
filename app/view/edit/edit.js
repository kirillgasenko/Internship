    // Ext.create('Ext.window.Window', {
        Ext.define('form.view.edit.Edit', {                    //ОКНО ВХОДА
            extend: 'Ext.window.Window',
            xtype: 'edit',

            requires: [                                                  //указываем как классы должны подгрузиться    
                'Ext.form.Panel',  
                'form.view.edit.editController',  
                'form.view.edit.editModel',
            ],

            title: 'Edit',
            height: 400,
            width: 400,
            layout: {
                type: 'vbox',
                align: 'left'
            },
            margin: '30 0 0 30',
            closable: true,
            controller: 'edit',
            border: true,
            items: [ 
                {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{kirill.city}',
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{kirill.country}'
                }            
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{kirill.year}'
                }
            },
            {
                xtype: 'textfield',
                margin: '10',
                bind: {
                    value: '{kirill.date}'
                }
            },
            {
                xtype: 'button',
                text: 'edit',
                listeners: {
                    click: 'editor'
                }
            }
        ]
        
    });