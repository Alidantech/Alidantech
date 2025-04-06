'use client';
import React from 'react';
import Reveal from '@/components/common/reveal';

const TextReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0.01
}) => {
  const processChildren = (child: React.ReactNode): React.ReactNode => {
    if (typeof child === 'string') {
      return child.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          <Reveal transition={{ duration: 0.5, delay: delay * index }}>
            {word}
          </Reveal>
          {index !== child.split(' ').length - 1 && ' '}
        </React.Fragment>
      ));
    } else if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{ children?: React.ReactNode }>;
      return React.cloneElement(
        element,
        {},
        processChildren(element.props.children)
      );
    } else if (Array.isArray(child)) {
      return child.map((nestedChild, index) => (
        <React.Fragment key={index}>
          {processChildren(nestedChild)}
        </React.Fragment>
      ));
    }
    return child;
  };

  return <>{processChildren(children)}</>;
};

export default TextReveal;
