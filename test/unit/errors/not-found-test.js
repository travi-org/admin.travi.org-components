import React from 'react';
import cheerio from 'cheerio';
import reactDom from 'react-dom/server';
import {assert} from 'chai';
import skinDeep from 'skin-deep';
import {NotFound} from '../../../src/main';

suite('not found', () => {
  test('that the proper content is displayed', () => {
    const $ = cheerio.load(reactDom.renderToStaticMarkup(<NotFound />));

    assert.equal($('h2').text(), '404');
    assert.equal($('p').text(), 'Page Not Found');
  });

  test('that the page title is set', () => {
    const tree = skinDeep.shallowRender(<NotFound />);

    assert.isObject(tree.subTree('HelmetWrapper', {title: 'Page Not Found'}));
  });
});