/*
 * File: app/model/Customer.js
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

Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',
    alias: 'model.Customer',

    uses: [
        'MyApp.model.ContactInformation'
    ],

    config: {
        fields: [
            {
                name: 'addressComplex',
                type: 'auto'
            },
            {
                name: 'customerID',
                type: 'string'
            },
            {
                name: 'customerIndicator',
                dateFormat: '\'\'',
                type: 'string'
            },
            {
                name: 'approvalNumber',
                defaultValue: '',
                type: 'string'
            },
            {
                name: 'approvalRejectionIndicator',
                defaultValue: 'N',
                type: 'string'
            },
            {
                name: 'approvalComments',
                type: 'string'
            },
            {
                name: 'customerType',
                defaultValue: '',
                type: 'string'
            },
            {
                name: 'guarantorIndicator',
                defaultValue: '',
                type: 'string'
            },
            {
                name: 'mainIndicator',
                defaultValue: '',
                type: 'string'
            }
        ],
        hasOne: {
            name: 'contactInformation',
            model: 'MyApp.model.ContactInformation'
        }
    },

    initCustomer: function(arr,obj,i) {

    }

});