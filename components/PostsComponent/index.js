import { Col, Image, Row, Space, Typography } from 'antd'
import {ImEarth} from "react-icons/im"
import {FaReact} from "react-icons/fa"
import Link from 'next/link'

const {Title, Text} = Typography

export default function PostsComponent() {


    return <div className="bg-transparent posts-container">

    <Space  gutter={20}>
      <Link href="/blog">
        <Col span={11}>
          <Space direction="horizontal" className="post-container-1">
              <Image preview={false} className="cover-bg" src={'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                <Text className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor</Text>

                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal"  className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>


      <Link href="/blog">
        <Col span={6}>
          <Space direction="vertical" className="post-container-1  post-container-2 margin_left_10">
              <Image preview={false} className="cover-bg-2" src={'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                
                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal"  className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>

      <Link href="/blog">
        <Col span={6}>
          <Space direction="vertical" className="post-container-1 post-container-2 margin_left_10 margin_right_10">
              <Image preview={false} className="cover-bg-2" src={'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                
                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal" className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>
    </Space>

    <Space className="margin_top_10">
      <Link href="/blog">
        <Col span={6}>
          <Space direction="vertical" className="post-container-1  post-container-2 margin_left_10">
              <Image preview={false} className="cover-bg-2" src={'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                
                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal" className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>

      <Link href="/blog">
        <Col span={6}>
          <Space direction="vertical" className="post-container-1 post-container-2 margin_left_10 margin_right_10">
              <Image preview={false} className="cover-bg-2" src={'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                
                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal"  className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>

      <Link href="/blog">
        <Col span={11}>
          <Space direction="horizontal" className="post-container-1  margin_left_10 margin_right_10">
              <Image preview={false} className="cover-bg" src={'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              <Space direction="vertical">
                <Title level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Title>
                <Text className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor</Text>

                <Row className="post-more-details">
                  <Col span={16}>
                    <Space direction="horizontal"  className="profile-details">
                      <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" preview={false} />

                      <Space direction="vertical">
                        <Title className="profile-name" level={3}>Ntwari Egide</Title>
                        <Title className="posted-at" level={5}>15. June 2020</Title>
                      </Space>
                    </Space>
                  </Col>
                  <Col span={8}>
                    <Space direction="horizontal" className="post-languages">
                      <ImEarth fontSize={20}  color="#535353" />
                      <FaReact fontSize={20}  color="#535353" />
                    </Space>
                  </Col>
                </Row>
              </Space>
          </Space>
        </Col>
      </Link>
    </Space>
 </div>

}