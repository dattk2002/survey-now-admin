import React from 'react'
import { Space, Table, Tag } from "antd";
import { Col, Row } from "antd";

const TransactionHistory = () => {
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            render: (text) => <a>{text}</a>,
          },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Point Request",
          dataIndex: "pointrequest",
          key: "pointrequest",
        },
        {
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag
                if (tag === "declined") {
                  color = "volcano";
                }
                if (tag === "success") {
                    color = "green";
                  }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        // {
        //   title: "Action",
        //   key: "action",
        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
      ];
    
      const data = [
        {
          key: "1",
          id: "1",
          name: "John Brown",
          pointrequest: 1000,
          tags: ["success"],
        },
        {
          key: "2",
          id: "2",
          name: "Jim Green",
          pointrequest: 2000,
          tags: ["declined"],
        },
        {
          key: "3",
          id: "3",
          name: "Joe Black",
          pointrequest: 3000,
          tags: ["success"],
        },
      ];
  return (
    <Row>
      <Col span={3} className="col-3"></Col>
      <Col span={18} className="col-18">
        <div>
          <Table columns={columns} dataSource={data} className="table-history-exchange"/>;
        </div>
      </Col>
      <Col span={3} className="col-3"></Col>
    </Row>
  )
}

export default TransactionHistory