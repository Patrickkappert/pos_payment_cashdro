/*
    POS Payment Cashdro module for Odoo
    Copyright (C) 2020 Acysos S.L. (www.acysos.com)
    Copyright (C) 2014-2016 Aurélien DUMAINE
    Copyright (C) 2014-2016 Akretion (www.akretion.com)
    @author: Ignacio Ibeas <ignacio@acysos.com>
    @author: Aurélien DUMAINE
    @author: Alexis de Lattre <alexis.delattre@akretion.com>
    License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).
*/

odoo.define('pos_payment_terminal.models', function (require) {
    "use strict";

    var models = require('point_of_sale.models');
    var _orderproto = models.Order.prototype;

    models.load_fields('account.journal', ['cashdro_payment_terminal']);

    models.Order = models.Order.extend({
        initialize: function(){
            _orderproto.initialize.apply(this, arguments);
            this.in_cashdro = false;
        },
        export_as_JSON: function() {
            var vals = _orderproto.export_as_JSON.apply(this, arguments);
            vals['transactions'] = this.transactions || {};
            return vals;
        }
    });

});
