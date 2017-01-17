const babelPolyfill = require('babel-polyfill');
const _ = require('lodash');
const $ = require('jquery');
const constants = require('./constants');
const router = require('./core/router');
const devices = require('./core/devices');
const creds = require('../../credentials/freshdesk.json');
const ticketListTpl = require('../templates/ticket-list.hbs');
const contactListTpl = require('../templates/contact-list.hbs');
const agentListTpl = require('../templates/agent-list.hbs');

const freshdesk = {
    get: (endpoint, payload) => new Promise((resolve, reject)=> {
        const settings = {
            'async': true,
            'crossDomain': true,
            'url': `https://${creds.companyName}.freshdesk.com/api/v2/${endpoint}`,
            'type': 'GET',
            format:'json',
            'headers': { 'Authorization': creds.basicAuth, 'Content-Type': 'application/json' },
            //'data': '{\r\n "helpdesk_ticket":{\r\n "description":"Some details on the issue ...",\r\n "subject":"Support needed..",\r\n "email":"tom@outerspace.com",\r\n "priority":1,\r\n "status":2\r\n },\r\n "cc_emails":"youremail@gmail.com"\r\n}'
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
            resolve(response);
        });
    })
}

$(document).ready(() => {
    freshdesk.get('/tickets').then(response =>  $('#tickets').html(ticketListTpl({tickets: response})));
    freshdesk.get('/contacts').then(response =>  $('#contacts').html(contactListTpl({contacts: response})));
    freshdesk.get('/agents').then(response =>  $('#agents').html(agentListTpl({agents: response})));
})
