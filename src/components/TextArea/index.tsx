import React, { useEffect, useRef, TextareaHTMLAttributes } from 'react';
import { useField } from '@unform/core';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default TextArea;
