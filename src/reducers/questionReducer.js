import _ from 'lodash';

const initState = {
  questions: [],
  currentQuestion: null,
  prevQuestion: null,
  nextQuestion: null,
  questionNumber: null
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_QUESTIONS':
      return {
        ...state,
        questions: action.payload
      };
    case 'ADD_CURRENT_QUESTION':
      let currentQuestionNumber = action.payload.questionNumber;
      const question = _.find(state.questions, { position: currentQuestionNumber });
      console.log(question);
      return {
        ...state,
        currentQuestion: action.payload.question,
        questionNumber: action.payload.questionNumber
      };
    case 'ADD_PREV_QUESTION':
      const prevQuestion = _.find(state.questions, { position: action.payload.questionNumber - 1 });
      return {
        ...state,
        prevQuestion: prevQuestion,
        questionNumber: action.payload.questionNumber
      };
    case 'NEXT_PREV_QUESTION':
      const nextQuestion = _.find(state.questions, { position: action.payload.questionNumber + 1 });
      return {
        ...state,
        prevQuestion: nextQuestion,
        questionNumber: action.payload.questionNumber
      };
    case 'ADD_QUESTION_NUMBER':
      return {
        ...state,
        questionNumber: action.payload
      };
    default:
      break;
  }
  return state;
};

export default questionReducer;
