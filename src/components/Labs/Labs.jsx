import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';

import { AuthUserContext } from '../Session/Session';
import { withAuthorization } from '../Session/Session';
import { getLessonsForTopic, addCompletedTopic } from '../../helpers/apiLink';

import loading from '../../assets/img/loading.svg';
import LessonContent from './LessonContent/LessonContent';
import Editor from './Editor/Editor';
import './Labs.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};
const defaultProps = {};

function Labs(props) {
  const { id, history } = props;
  const [lessons, setLessons] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [lessonNum, setLessonNum] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLessonsForTopic(id).then(res => {
      const response = res.data.lessons;
      setLessons(res.data.lessons);
      setCodeSnippets(response.map(response => response.code));
      setLoading(false);
    });
  }, []);

  function handleNext() {
    setLessonNum(lessonNum + 1);
  }

  function handlePrev() {
    setLessonNum(lessonNum - 1);
  }

  function handleFinish(uid) {
    notify.show('You have finished the class 🎉', 'success');
    addCompletedTopic(uid, id);
    history.push('/');
  }

  const BackButton = props =>
    typeof lessons[lessonNum - 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handlePrev()}>
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    ) : (
      <button className="button is-primary" onClick={() => handlePrev()} disabled>
        <i className="fas fa-arrow-left" style={{ marginRight: '0.4rem' }} />
        Prev
      </button>
    );

  const NextButton = props =>
    typeof lessons[lessonNum + 1] !== 'undefined' ? (
      <button className="button is-primary" onClick={() => handleNext()}>
        Next
        <br />
        <i className="fas fa-arrow-right" style={{ marginLeft: '0.4rem' }} />
      </button>
    ) : (
      <button className="button is-success" onClick={() => handleFinish(props.authUser.uid)}>
        Finish
        <i className="fas fa-check" style={{ marginLeft: '0.4rem' }} />
      </button>
    );

  return isLoading ? (
    <img src={loading} alt="..." style={{ position: 'absolute', top: '30vh', left: '48vw' }} />
  ) : (
    <AuthUserContext.Consumer>
      {authUser => (
        <div className="labs-wrapper">
          <div className="lab-content">
            <LessonContent lesson={lessons[lessonNum]} />
          </div>
          <div className="lab-editor">
            <Editor codeSnippet={codeSnippets[lessonNum]} lessonNum={lessonNum} />
          </div>

          <div className="navbar is-fixed-bottom has-background-grey-lighter level">
            <div className="level-item buttons">
              <BackButton />
              <NextButton authUser={authUser} />
            </div>
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}
const condition = authUser => !!authUser;

Labs.propTypes = propTypes;
Labs.defaultProps = defaultProps;

export default withAuthorization(condition)(withRouter(Labs));
