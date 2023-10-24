import React from "react";
import { Col, Row } from "antd";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: {
      compare: (a, b) => a.title - b.title,
      multiple: 3,
    },
  },
  {
    title: "Pack",
    dataIndex: "pack",
    sorter: {
      compare: (a, b) => a.pack - b.pack,
      multiple: 2,
    },
  },
  {
    title: "Created At",
    dataIndex: "createdat",
    sorter: {
      compare: (a, b) => a.createdat - b.createdat,
      multiple: 1,
    },
  },
  {
    title: "Created By",
    dataIndex: "createdby",
    sorter: {
      compare: (a, b) => a.createdby - b.createdby,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    id: "1",
    title: "đánh giá",
    pack: 2,
    createdat: "20/06/2023",
    createdby: "Nguyễn Văn Triệu",
  },
  {
    key: "2",
    id: "2",
    title: "khảo sát",
    pack: 2,
    createdat: "20/06/2023",
    createdby: "Nguyễn Văn Triệu",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CreatedSurvey = () => {
  return (
    <Row>
      <Col span={3} className="col-3">
        
      </Col>
      <Col span={18} className="col-18">
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} className="table-created-survey"/>
        </div>
      </Col>
      <Col span={3} className="col-3">
        
      </Col>
    </Row>
  );
};

export default CreatedSurvey;
