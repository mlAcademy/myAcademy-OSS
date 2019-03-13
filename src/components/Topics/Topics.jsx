import React from 'react';
import PropTypes from 'prop-types';

import { withAuthorization, AuthUserContext } from '../Session/Session';
import { getTopics, getCompletedTopics } from '../../helpers/apiLink';

import loading from '../../assets/img/loading.svg';
import Topic from './Topic/Topic';
import './Topics.scss';

function Topics() {
  return (
    <AuthUserContext.Consumer>
      {authUser => authUser && <TopicsViewer authUser={authUser} />}
    </AuthUserContext.Consumer>
  );
}

const propTypes = {
  authUser: PropTypes.object,
};
const defaultProps = {
  authUser: null,
};

class TopicsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      completedTopics: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    getTopics().then(res =>
      this.setState({
        topics: res.data.topics,
      })
    );

    getCompletedTopics(this.props.authUser.uid).then(res =>
      this.setState({
        completedTopics: res,
        isLoading: false,
      })
    );
  }

  isTopicDisabled(topic) {
    if (topic.prerequisites.length === 0) {
      return false;
    } else {
      for (let i = 0; i < topic.prerequisites.length; i += 1) {
        const prerequisite = topic.prerequisites[i];
        if (this.state.completedTopics.indexOf(prerequisite.id) === -1) return true;
      }
      return false;
    }
  }

  isTopicComplete(topic) {
    const { id } = topic;
    return this.state.completedTopics.indexOf(id) !== -1;
  }

  render() {
    const { topics, isLoading } = this.state;

    return isLoading ? (
      <img src={loading} alt="..." style={{ position: 'absolute', top: '30vh', left: '48vw' }} />
    ) : (
      <div className="full-height-bg primary-grad">
        <div className="topics-wrapper">
          {topics.map(topic => (
            <Topic
              title={topic.name}
              description={topic.description}
              imageUrl={topic.image_url}
              key={topic.id}
              id={topic.id}
              prerequisites={topic.prerequisites}
              disabled={this.isTopicDisabled(topic)}
              complete={this.isTopicComplete(topic)}
            />
          ))}
        </div>
      </div>
    );
  }
}

TopicsViewer.propTypes = propTypes;
TopicsViewer.defaultProps = defaultProps;

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Topics);
