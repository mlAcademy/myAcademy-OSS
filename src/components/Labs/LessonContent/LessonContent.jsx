import React from 'react';
import Markdown from 'markdown-to-jsx';

LessonContent.defaultProps = {
  lesson: {
    name: 'Name',
    content: '# Title'
  }
};

function LessonContent(props) {
  const { lesson } = props;

  return (
    <div style={{ margin: '0.5rem' }}>
      <p className="is-size-3 is-family-secondary">{lesson.name}</p>
      <Markdown>{lesson.content}</Markdown>
    </div>
  );
}
export default LessonContent;
