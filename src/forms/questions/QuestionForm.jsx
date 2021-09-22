import React from 'react';

import _ from 'lodash';
import { Radio, Space, Button, Row, Col } from 'antd';

import { RightCircleFilled, LeftCircleFilled } from '@ant-design/icons';

const QuestionForm = (props) => {
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Radio.Group onChange={props.onChange} value={props.initialValue}>
            <Space direction="vertical">
              {_.map(props.options, (option) => {
                return (
                  <Radio value={option.value} key={option.key}>
                    {option.displayText}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: '50px' }}>
        <Col span={4}>
          <Button type="primary" onClick={props.click} shape="round" icon={<LeftCircleFilled />}>
            Previous
          </Button>
        </Col>
        <Col span={4} offset={16}>
          <Button type="primary" onClick={props.click} shape="round" icon={<RightCircleFilled />}>
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default QuestionForm;
