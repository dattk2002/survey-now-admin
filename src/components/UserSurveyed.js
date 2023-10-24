import React from "react";
import { Col, Row } from "antd";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.title - b.title,
      multiple: 3,
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: {
      compare: (a, b) => a.pack - b.pack,
      multiple: 2,
    },
  },
  {
    title: "Surveyed At",
    dataIndex: "surveyedat",
    sorter: {
      compare: (a, b) => a.createdat - b.createdat,
      multiple: 1,
    },
  },
  {
    title: "Surveyed In",
    dataIndex: "surveyedin",
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
    name: "Nguyễn Văn A",
    age: 17,
    surveyedat: "24/06/2023",
    surveyedin: "Xem",
  },
  {
    key: "2",
    id: "2",
    name: "Trần Văn B",
    age: 20,
    surveyedat: "25/06/2023",
    surveyedin: "Xem",
  },
  {
    key: "3",
    id: "3",
    name: "Nguyễn Văn Em",
    age: 17,
    surveyedat: "24/06/2023",
    surveyedin: "Xem",
  },
  {
    key: "4",
    id: "4",
    name: "Trần Văn Anh",
    age: 20,
    surveyedat: "25/06/2023",
    surveyedin: "Xem",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const UserSurveyed = () => {
  return (
    <Row>
      <Col span={3} className="col-3">
        
      </Col>
      <Col span={18} className="col-18">
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} className="table-user-surveyed"/>
        </div>
      </Col>
      <Col span={3} className="col-3">
        
      </Col>
    </Row>
  );
};

export default UserSurveyed;
