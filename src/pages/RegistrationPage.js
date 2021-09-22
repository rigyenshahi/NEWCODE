import Card from "../components/ui/Card";
import { AddUser } from "../features/users/AddUser";
import React, { Component } from 'react';
import _ from 'lodash';
import ContentfulClient from '../client';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import RegistrationForm from '../forms/registration/Registration';

import { addQuestions, addQuestionNumber } from '../actions/questionAction';


class RegistrationPage extends Component {
  state = {
    questions: []
  };

componentDidMount = async () => {
  const contentful = await new ContentfulClient().getClientInstance();
  const content = await contentful.getEntries();
  let dataItems = _.map(content.items, (item) => {
    return{
      question: item.fields.question,
      video : item.fields.Video,
      optionType: item.fields.json.optionType,
      optionValues: item.fields.json.optionValues,
      position: item.fields.json.position,
      required: item.fields.json.required,
      userType: item.fields.json.userType,
      level: item.fields.json.level
    };
  });
  let sortedQuestionList = _.sortBy(dataItems, ['position']);
  this.props.addQuestionNumber(1);
  this.setState({questions: sortedQuestionList}, this.props.addQuestions(sortedQuestionList));

  };



  render() {
    return (
      <Row>
        <Col xs={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
          <Card size="default">
            <RegistrationForm />
          </Card>
        </Col>
      </Row>
    );
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    addQuestions: (data) => dispatch(addQuestions(data)),
    addQuestionNumber: (data) => dispatch(addQuestionNumber(data))
  };
};
export default connect(null, mapDispatchToProps)(RegistrationPage);
