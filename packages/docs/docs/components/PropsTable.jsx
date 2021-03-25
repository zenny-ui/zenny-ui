import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Table for React props generated by react-docgen
 */
const PropsTable = ({ className, propMetaData, ...restProps }) => {
  console.log('the props', propMetaData);
  // icon: {
  //   defaultValue: null,
  //   description: '',
  //   name: 'icon',
  //   parent: {
  //     fileName: '../alert/src/alert.tsx',
  //     name: 'AlertProps',
  //   },
  //   declarations: [
  //     {
  //       fileName: '../alert/src/alert.tsx',
  //       name: 'AlertProps',
  //     },
  //   ],
  //   required: false,
  //   type: {
  //     name: 'any',
  //   },
  // },
  if (className) className += ' component-props-table';
  return (
    <table className={className} {...restProps}>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Is Required</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(propMetaData).map((key) => {
          const prop = propMetaData[key];
          console.log('the prop', prop);
          return (
            <tr key={key}>
              <td style={{ color: 'rgb(17, 147, 154)' }}>{prop.name}</td>
              <td>{prop.type ? prop.type.name : ''}</td>
              {prop.required ? (
                <td style={{ color: 'rgb(255, 76, 34)' }}>required</td>
              ) : (
                <td style={{ color: '#c6c6c6' }}>optional</td>
              )}
              {prop.defaultValue ? (
                <td style={{ color: 'rgb(236, 171, 32)' }}>
                  {prop.defaultValue.value}
                </td>
              ) : (
                <td style={{ color: '#c6c6c6' }}>none</td>
              )}
              {prop.description ? <td>{prop.description}</td> : <td />}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.object,
};
PropsTable.defaultProps = {
  propMetaData: {},
};

export default PropsTable;
