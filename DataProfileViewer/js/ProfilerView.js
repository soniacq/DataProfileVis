import React, { Component } from "react";
import PropTypes from 'prop-types';
import {DatasetSample} from './DatasetSample';
export class ProfilerView extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render(){
    const {data} = this.props;

    return <div ref={ref=>{this.ref = ref}}>
      <div  className="d-flex flex-row">
          <DatasetSample hit={data} />
      </div>
    </div>
  }
}

ProfilerView.propTypes = {
  data: PropTypes.object.isRequired,
};
