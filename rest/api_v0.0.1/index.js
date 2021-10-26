const express = require('express');

const app = express();

const { loginApp } = require('./api/login');
const { employeeApp } = require("./api/employee");
const { verifyCode } = require("./api/veriryEmployeeSession");
const { requirements } = require("./api/requirements");
const { reportApp } = require("./api/reportInventory");
const { providersApp } = require("./api/providers");
const { requirementsEmployees } = require("./api/requirementsEmployees");
const { inventory } = require("./api/inventory");

app.use( "/login", loginApp);
app.use( "/employee", employeeApp);
app.use( "/verify", verifyCode);
app.use( "/requirements", requirements);
app.use( "/reportInventory", reportApp);
app.use( "/providers", providersApp);
app.use( "/requerimentsEmployees", requirementsEmployees);
app.use( "/inventory", inventory);


exports.appMysqlApiRest = app;