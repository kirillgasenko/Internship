Ext.define('form.view.table.table',{
    extend: 'Ext.grid.Panel',
    xtype: 'table',

    width: 700,
    height: 330,
    frame: true,
    title: 'label',

    
    columns: [
    {
        text: 'id',
        width: 100,
        sortable: true,
        dataIndex: 'id',
    },
    {
        text: 'city',
        width: 100,
        sortable: true,
        dataIndex: 'city',
    }, {
        text: 'country',
        flex: 1,
        sortable: true,
        dataIndex: 'country',
        field: {
            xtype: 'textfield',
        },
    }, {
        header: 'year',
        width: 120,
        sortable: true,
        dataIndex: 'year',
        field: {
            xtype: 'textfield'
        },
    }, {
        text: 'date',
        width: 120,
        sortable: true,
        dataIndex: 'date',
        field: {
            xtype: 'textfield'
        },
    },
    {
        xtype: 'widgetcolumn',
        text: 'edit',
        width: 120,
        widget: {
            xtype: 'button',
            text: 'edit',
            listeners: {
                click: 'edit'
            }
        }
    },
    {
        xtype: 'widgetcolumn',
        text: 'delete',
        width: 120,
        widget: {
            xtype: 'button',
            text: 'delete',
            listeners: {
                click: 'delete'
            }
        }
    }
],
});