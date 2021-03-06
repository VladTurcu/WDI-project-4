import React from 'react';
import Axios from 'axios';
import Auth from '../../../lib/Auth';



class  AddAchievement extends React.Component {
  state = {
    achievements: {
      course: this.props.score.course.id,
      score: this.props.score.correctAnswers
    },
    errors: {}
  };

  componentWillMount() {
    if(this.state.achievements){
      Axios.post('/api/achievements', this.state.achievements, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
        .then(() => console.log('Achievement posted'))
        .catch((err) => this.setState({ errors: err.response.data.errors }));
    }
  }

  render() {
    if(this.state.achievements.score) console.log('Achievement score', this.state.achievements.score);
    return (
      <div>
      </div>
    );
  }
}

export default AddAchievement;
