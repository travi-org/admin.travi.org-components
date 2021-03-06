import React from 'react';
import {shallow} from 'enzyme';
import CircularProgress from 'material-ui/CircularProgress';
import {assert} from 'chai';
import PageLoading from '../../../../src/atoms/loading-indicators/page';

suite('page loading indicator', () => {
  test('that it renders', () => {
    const wrapper = shallow(<PageLoading />);

    assert.isTrue(wrapper.contains((
      <CircularProgress color="#c80000" style={{margin: '10px auto', display: 'block'}} />
    )));
  });
});
