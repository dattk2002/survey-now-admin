import React, { useState }from "react";
import { Col, Row } from "antd";
import Background from "./Background";
import { DownloadOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AboutUs = () => {
  const [size, setSize] = useState("large");
  return (
    <div>
      <Background />
      <div className="about-us-container">
        <Row>
          <Col span={3}></Col>
          <Col span={18}>
            <div className="about-us-content">
              <h3>Chúng tôi là ai ?</h3>
              <p>
                Chúng tôi là một start-up được sáng lập để thay đổi cách mà khảo
                sát đang được thực hiện. Với đội ngũ trẻ và tận tâm, chúng tôi
                mong muốn phát triển một nền tảng đầy sáng tạo và đột phá, giúp
                kết nối những người tạo khảo sát với những người điền phù hợp.
              </p>
              <h3>Survey Now là gì ?</h3>
              <p>
                SurveyNow là một nền tảng cho phép bạn tạo và đăng các khảo sát
                để tìm kiếm, thu thập thông tin từ các tệp khách hàng. Đồng
                thời, SurveyNow cũng cung cấp điểm thưởng giá trị cho những
                người điền khảo sát. Với SurveyNow, không chỉ những người tạo
                khảo sát sẽ thu thập được thông tin cần thiết, mà người điền
                cũng sẽ nhận lợi ích từ việc tham gia khảo sát.
              </p>
              <h3>Sứ mệnh của chúng tôi</h3>
              <p>
                Tại SurveyNow, chúng tôi tin rằng mỗi ý kiến, quan điểm của bất
                kỳ ai đều có giá trị và đáng quan tâm. Vì thế, sứ mệnh của chúng
                tôi là giúp những người tạo khảo sát tiếp cận với nhiều ý kiến
                khác nhau cũng như mang đến cho mọi người cơ hội để chia sẻ ý
                kiến và nhận tiền thưởng từ việc điền khảo sát.
              </p>
            </div>
            <div className="btn-join-us">
              <Button
                type="primary"
                shape="round"
                icon={<ArrowRightOutlined />}
                size={size}
              >
                Tham gia ngay
              </Button>
            </div>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
