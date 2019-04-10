import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const propTypes = {
  lesson: PropTypes.object.isRequired,
};

const defaultProps = {};

const NewTabLink = ({ children, ...props }) => (
  <a target="_blank" {...props}>
    {children}
  </a>
);
NewTabLink.propTypes = { children: PropTypes.object.isRequired };

function LessonContent(props) {
  const { lesson } = props;

  return (
    <div style={{ margin: '0.5rem' }}>
      <p className="is-size-3 is-family-secondary">{lesson.name}</p>
      <Markdown
        options={{
          overrides: {
            a: {
              component: NewTabLink,
            },
          },
        }}
      >
        {lesson.content}
      </Markdown>
    </div>
  );
}

LessonContent.propTypes = propTypes;
LessonContent.defaultProps = defaultProps;

export default LessonContent;
