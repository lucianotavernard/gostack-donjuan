import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

export default function Input({ name, size, multiline, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container multiline={multiline} size={size}>
      <TextInput
        ref={inputRef}
        multiline={multiline}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  size: 100,
  multiline: false,
};
