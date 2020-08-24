import React from 'react';
import ReactDOM from 'react-dom';
import { select } from "d3-selection";
import {ProfilerView} from './ProfilerView';
import "regenerator-runtime/runtime";

export function renderProfilerViewBundle(divName, data){
	ReactDOM.render(
		<ProfilerView data={data}/>
		, select(divName).node());
}