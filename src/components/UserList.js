import React from 'react'
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
        compare: (a, b) => a.age - b.age,
        multiple: 2,
      },
    },
    {
        title: "Reported",
        dataIndex: "reported",
        sorter: {
          compare: (a, b) => a.reported - b.reported,
          multiple: 1,
        },
      },
    {
      title: "Reported At",
      dataIndex: "reportedat",
      sorter: {
        compare: (a, b) => a.createdat - b.createdat,
        multiple: 1,
      },
    },
    {
      title: "Banned",
      dataIndex: "banned",
      sorter: {
        compare: (a, b) => a.createdby - b.createdby,
        multiple: 1,
      },
    },
    {
        title: "Banned Reason",
        dataIndex: "bannedreason",
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
      reported: "yes",
      reportedat: "24/06/2023",
      banned: "yes",
      bannedreason: "spam",
    },
    {
        key: "2",
        id: "2",
        name: "Trần Văn B",
        age: 20,
        reported: "yes",
        reportedat: "25/06/2023",
        banned: "yes",
        bannedreason: "điền nội dung ko hợp lý",
      },
      {
        key: "3",
        id: "3",
        name: "Nguyễn Văn Em",
        age: 20,
        reported: "no",
        reportedat: "24/06/2023",
        banned: "no",
        bannedreason: "",
      },
      {
        key: "4",
        id: "4",
        name: "Trần Văn Anh",
        age: 20,
        reported: "yes",
        reportedat: "25/06/2023",
        banned: "yes",
        bannedreason: "spam",
      },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  

const UserList = () => {
  return (
    <Row>
      <Col span={3} className="col-3">
        
      </Col>
      <Col span={18} className="col-18">
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} className="table-user-list"/>
        </div>
      </Col>
      <Col span={3} className="col-3">
        
      </Col>
    </Row>
  )
}

export default UserList