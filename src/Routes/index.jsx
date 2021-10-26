import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Home from './../views/Home'
import Administrator from './../widgets/Administrator';
import RequirementViewTable from './../widgets/RequirementViewTable';
import PlanillaPayroll from './../widgets/Payroll';
import PlanillaTributary from './../widgets/Tributary/';
import PlanillaPatronal from './../widgets/Patronal/';
import Generate from './../widgets/GenerateReport/';
import ReportsInventory from './../widgets/ReportInventory/';
import RegistrationEmployees from './../widgets/RegistrationEmployees/';
import RegistrationMaterial from './../widgets/RegistrationMaterial/';
import RegistrationIE from './../widgets/RegistrationIE/';
import EmployeesHab from './../widgets/EmployeesHab/';
import Buy from './../widgets/Buy/';
import EnableRegistration from './../widgets/EnableRegistration/';
import Disenable from './../widgets/DisenableHis/';
import NewRequi from './../widgets/NewRequirementM/';
import NewRequiPersonal from './../widgets/NewRequiremPer/';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={Home} />

		<Route
			exact path="/administrator/:options" render={(data) => {
				const isSession = localStorage.session !== undefined ? true : false;
				return isSession &&
					JSON.parse(localStorage.session)
						.optionsAccess.trim()
						.split(",")
						.some((x) => x === data.match.params.options) ? (
					<Administrator />
				) : (
					<Redirect to="/" />
				);
			}}
		/>

		<Route
			exact path="/requirements/:key" render={() => {
				const isSession = localStorage.session !== undefined ? true : false;
				return isSession ? <RequirementViewTable /> : <Redirect to="/" />;
			}}
		/>

		<Route
			exact path="/payroll" render={() => {
				const isSession = localStorage.session !== undefined ? true : false;
				return isSession ? <PlanillaPayroll /> : <Redirect to="/" />;
			}}
		/>

		<Route
			exact path="/tributary" render={() => {
				const isSession = localStorage.session !== undefined ? true : false;
				return isSession ? <PlanillaTributary /> : <Redirect to="/" />;
			}}
		/>


		<Route exact path="/generateReport" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<Generate/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/reportsInventory" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<ReportsInventory/>):(<Redirect to="/"/>)
		}}/>

		<Route
			exact path="/patronal" render={() => {
				const isSession = localStorage.session !== undefined ? true : false;
				return isSession ? <PlanillaPatronal /> : <Redirect to="/" />;
			}}
		/>

		<Route exact path="/registrationEmployees" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<RegistrationEmployees/>):(<Redirect to="/"/>)
		}}/>
		
		<Route exact path="/registrationMaterial" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<RegistrationMaterial/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/incomeEgress" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<RegistrationIE/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/employeesRegistration" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<EmployeesHab/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/buy" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<Buy/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/enableRegistration" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<EnableRegistration/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/disenable" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<Disenable/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/newRequirementM" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<NewRequi/>):(<Redirect to="/"/>)
		}}/>

		<Route exact path="/newRequirementP" render={()=>{
			const isSession=localStorage.session!==undefined?true:false;
			return isSession?(<NewRequiPersonal/>):(<Redirect to="/"/>)
		}}/>
	</Switch>
);

export default Routers;
