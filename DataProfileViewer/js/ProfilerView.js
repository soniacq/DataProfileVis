import React, { Component } from "react";
import PropTypes from 'prop-types';
import {DatasetSample} from './DatasetSample';

export class ProfilerView extends Component {
  constructor(props){
    super(props);
    this.state = {
      // selectedMetadata: [],
      // exportedMetadataMessage: false,
    };

  }

  componentDidCatch(error, info) {
    console.log(error);
    // this.setState({selectedMetadata: []})
  }

  render(){
    const {data} = this.props;
    console.log('log');
    console.warn('data');
    console.warn(data);

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
