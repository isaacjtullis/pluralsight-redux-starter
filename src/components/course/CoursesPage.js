import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // state.courses is the name we set in our reducer file
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // since we didn't define a second variable connect automatically defines a dispatch
/*
<h2>Add Course</h2>
<input
  type="text"
  onChange={this.onTitleChange}
  value={this.state.course.title} />
<input
  type="submit"
  value="Save"
  onClick={this.onClickSave} />


    onClickSave() {
      this.props.actions.createCourse(this.state.course);
    }
    onTitleChange(event) {
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course});
    }

*/
