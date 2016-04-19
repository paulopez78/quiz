import React from 'react';
import Question from './Question';
import { Grid, Col, Row } from 'react-bootstrap';

const QuestionsList = ({ questions }) =>
    <Grid>
      <Row>
      {
        questions.map((question) =>
        <Col md={6} md={6}>
          <Question
            key={question.id}
            {...question}/>
        </Col>)
      }
    </Row>
    </Grid>

export default QuestionsList;
