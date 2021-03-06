/*
 * File: app/view/MainScreen.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainScreen', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.MainScreen',

    config: {
        tabBarPosition: 'bottom',
        styleHtmlContent: true,
        ui: 'light',
        defaultType: 'optimized-tab',
        modal: false
    },

    initialize: function() {
        this.callParent(arguments);

        this.add([

        {xtype: 'quote'},
        {xtype: 'insurance'},    
        {xtype: 'customer'}


        ]);
    }

});