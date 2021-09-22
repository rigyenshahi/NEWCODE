import React from "react";
import Card from "../components/ui/Card";
import { Row, Col } from 'antd';
import "./Pages.css";
import { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../forms/questions/QuestionForm';

class Questions extends Component {
  state = {
    question: null,
    optionValues: null,
    optionType: null,
    questionNumber: 0,
    valueSelected: null,
    questionList: null,
    required: false,
    progess: false,
    previous: false,
    valueSelected: null,
    initialValue: null
  };

  componentDidMount() {
    const { userQuestion } = this.props.question;
    const { userFirstName } = this.props.response;
    let currentQuestion = userQuestion[this.state.questionNumber];
    this.setState({
    question : currentQuestion.question.replace('#', userFirstName),
    optionValues: currentQuestion.optionValues,
    initialValue: currentQuestion.optionValues[0].value,
    optionType: currentQuestion.optionType,
    questionList: userQuestion,
    userName: userFirstName,
    questionNumber: currentQuestion.position
    });
    this.props.addCurrentQuestion({ questionNumber: currentQuestion.position });
    this.props.addNextQuestion({ questionNumber: currentQuestion.position});
  }

 

  _onChange = (e) => {
    this.setState({ initialValue: e.target.value });
  };
  render() {
    return (
      <Row>
        <Col span={12} offset={4}>
          <Card title={this.state.question} size="default">
            <QuestionForm
              onChange={this._onChange}
              initialValue={this.state.initialValue}
              options={this.state.optionValues}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    question: state.questionStore,
    response: state.userResponseStore
  };
};

  const mapDispatchToProps = (dispatch) => {
    return {
      addUserResponse: (data) => dispatch(addUserResponse(data)),
      removeUserResponse: (data) => dispatch(removeUserResponse(data)),
      addCurrentQuestion: (data) => dispatch(addCurrentQuestion(data)),
      addUserType: (data) => dispatch(addUserType(data)),
      addPreviousQuestion: (data) => dispatch(addPreviousQuestion(data)),
      addNextQuestion: (data) => dispatch(addNextQuestion(data))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
  
 

