import React from 'react';
import ReactDOM from 'react-dom';
import { select } from "d3-selection";
import {ProfilerView} from './ProfilerView';
import {EditProfilerView} from './EditProfilerView/EditProfilerView';
import "regenerator-runtime/runtime";

export function renderProfilerViewBundle(divName, data){
	ReactDOM.render(
		<ProfilerView data={data}/>
		, select(divName).node());
}

export function renderEditProfilerViewBundle(divName, data){
	ReactDOM.render(
		<EditProfilerView hit={data}/>
		, select(divName).node());
}