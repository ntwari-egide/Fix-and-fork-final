import { Col, Image, Row, Space, Typography } from 'antd'
import {ImEarth} from "react-icons/im"
import {FaReact} from "react-icons/fa"
import Link from 'next/link'
import { useRouter } from 'next/router'

const {Title, Text} = Typography

export default function PostsComponent({ posts }) {

  const router = useRouter()

    return <div className="bg-transparent posts-container">
      {

        ((() => {

          let rowscontainer = []

          for(let i=0; i < Math.ceil(posts.length / 3); i++ ) rowscontainer.push({num: i})

            return rowscontainer.map(row => {

              let currentPosts = []
            
              for(let k = row.num; k < row.num + 3 ; k ++ ) {

                currentPosts.push(posts[k])
              
              }

              return <Space gutter={32} style={{marginBottom: '40px !important'}}>

                {
                  currentPosts.map( 
                    // 1,6,7,12,13,18,19,20,25
                    post => posts.indexOf(post) + 1  ===  7 || posts.indexOf(post) + 1  ===  6
                    || posts.indexOf(post) + 1  ===  1 || posts.indexOf(post) + 1  ===  12 
                    || posts.indexOf(post) + 1  ===  13 || posts.indexOf(post) + 1  ===  18 
                    || posts.indexOf(post) + 1  ===  20 || posts.indexOf(post) + 1  ===  25 ? 
      
                    
                      <Col span={11} onClick={() => router.push(`/blog/${post.contentMdFileUrl}`)}>
                        <Space direction="horizontal" className="post-container-1">
                            <Image preview={false} className="cover-bg" src={post.coverImageUrl} />
                            <Space direction="vertical"> 
                              <Title level={2}>{post.postTitle}</Title>
                              <div className="post-contents">
                                <Text className="post-description">{post.postDescription}</Text>
                              </div>
          
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
                      </Col>:
                    
                      <Col span={6}  onClick={() => router.push(`/blog/${post.contentMdFileUrl}`)}>
                        <Space direction="vertical" className="post-container-1  post-container-2 margin_left_10">
                            <Image preview={false} className="cover-bg-2" src={post.coverImageUrl} />
                            <Space direction="vertical">
                              <Title level={2}>{post.postTitle}</Title>
                              
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
                    )   
                }

              </Space>

            })   

        })())

      }
 </div>

}


