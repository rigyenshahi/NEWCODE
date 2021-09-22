const addQuestions = (data) => {
  return (dispatch, state) => {
    dispatch({ type: 'ADD_QUESTIONS', payload: data });
  };
};

const addCurrentQuestion = (data) => {
  return (dispatch, state) => {
    dispatch({ type: 'ADD_CURRENT_QUESTION', payload: { question: data.question, questionNumber: data.number } });
  };
};

const addQuestionNumber = (data) => {
  return (dispatch, state) => {
    dispatch({ type: 'ADD_QUESTION_NUMBER', payload: data });
  };
};

export { addQuestions, addCurrentQuestion, addQuestionNumber };
