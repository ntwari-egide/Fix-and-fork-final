import { Col, Image, Row, Space, Typography } from 'antd'
import {ImEarth} from "react-icons/im"
import {FaReact} from "react-icons/fa"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

const {Title, Text} = Typography

export default function PostsComponent() {

    let posts = [{
      _id: "617ff283060056c27374468c",
      postTypes: [
      "617fb0a16733b8d38cd92aac"
      ],
      coverImageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--iXdS49-U--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mm5uqgq9eej1l4x8wchd.png",
      postTitle: "Don't Optimize Your React App, Use Preact Instead",
      postDescription: "Preact is designed for high school sophomores, the PreACT is a multiple choice exam that familiarizes students with the ACT",
      contentMdFileUrl: "string",
      githubLinkUrl: null,
      totalForks: 0,
      totalLikes: 0,
      totalViews: 0,
      PostedBy: "617faf006733b8d38cd92aa3",
      createdAt: "2021-11-01T13:39:48.221Z",
      updatedAt: "2021-11-01T13:39:48.221Z",
      __v: 0
      },
      {
      _id: "618011a7f17cf9fdd129b9a5",
      postTypes: [
      "617fb0d46733b8d38cd92ab0",
      "617fb13c6733b8d38cd92ab4"
      ],
      coverImageUrl: "https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      postTitle: "5 Awesome Books to Learn Spring Boot, Microservices, and Spring Cloud for Java developers",
      postDescription: "Unfortunately, there are not many good books available on these frameworks, so we don't have many choices. At the same time, some of the available books are really awesome",
      contentMdFileUrl: "5-Awesome-Books-to-Learn-Spring-Boot",
      githubLinkUrl: "https://github.com/ntwari-egide/Spring-boot-RESTFULL-API-crud",
      totalForks: 10,
      totalLikes: 0,
      totalViews: 0,
      PostedBy: "617fafcb6733b8d38cd92aa6",
      createdAt: "2021-11-01T13:39:48.221Z",
      updatedAt: "2021-11-01T13:39:48.221Z",
      __v: 0
      },
      {
        _id: "618011a7f17cf9fdd129b9a5",
        postTypes: [
        "617fb0d46733b8d38cd92ab0",
        "617fb13c6733b8d38cd92ab4"
        ],
        coverImageUrl: "https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        postTitle: "5 Awesome Books to Learn Spring Boot, Microservices, and Spring Cloud for Java developers",
        postDescription: "Unfortunately, there are not many good books available on these frameworks, so we don't have many choices. At the same time, some of the available books are really awesome",
        contentMdFileUrl: "5-Awesome-Books-to-Learn-Spring-Boot",
        githubLinkUrl: "https://github.com/ntwari-egide/Spring-boot-RESTFULL-API-crud",
        totalForks: 10,
        totalLikes: 0,
        totalViews: 0,
        PostedBy: "617fafcb6733b8d38cd92aa6",
        createdAt: "2021-11-01T13:39:48.221Z",
        updatedAt: "2021-11-01T13:39:48.221Z",
        __v: 0
        },
        {
          _id: "618011a7f17cf9fdd129b9a5",
          postTypes: [
          "617fb0d46733b8d38cd92ab0",
          "617fb13c6733b8d38cd92ab4"
          ],
          coverImageUrl: "https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          postTitle: "5 Awesome Books to Learn Spring Boot, Microservices, and Spring Cloud for Java developers",
          postDescription: "Unfortunately, there are not many good books available on these frameworks, so we don't have many choices. At the same time, some of the available books are really awesome",
          contentMdFileUrl: "5-Awesome-Books-to-Learn-Spring-Boot",
          githubLinkUrl: "https://github.com/ntwari-egide/Spring-boot-RESTFULL-API-crud",
          totalForks: 10,
          totalLikes: 0,
          totalViews: 0,
          PostedBy: "617fafcb6733b8d38cd92aa6",
          createdAt: "2021-11-01T13:39:48.221Z",
          updatedAt: "2021-11-01T13:39:48.221Z",
          __v: 0
          },
          {
            _id: "618011a7f17cf9fdd129b9a5",
            postTypes: [
            "617fb0d46733b8d38cd92ab0",
            "617fb13c6733b8d38cd92ab4"
            ],
            coverImageUrl: "https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            postTitle: "5 Awesome Books to Learn Spring Boot, Microservices, and Spring Cloud for Java developers",
            postDescription: "Unfortunately, there are not many good books available on these frameworks, so we don't have many choices. At the same time, some of the available books are really awesome",
            contentMdFileUrl: "5-Awesome-Books-to-Learn-Spring-Boot",
            githubLinkUrl: "https://github.com/ntwari-egide/Spring-boot-RESTFULL-API-crud",
            totalForks: 10,
            totalLikes: 0,
            totalViews: 0,
            PostedBy: "617fafcb6733b8d38cd92aa6",
            createdAt: "2021-11-01T13:39:48.221Z",
            updatedAt: "2021-11-01T13:39:48.221Z",
            __v: 0
            }
      ]

    // useEffect(() => {

    //   axios.get('/posts')
    //   .then(res => {

    //     console.log("Posts: ",res.data)

    //     setposts(res.data)

    //   })

    // },[posts])


    return <div className="bg-transparent posts-container">

    <Space  gutter={20}>
      {

        ((() => {

          for(let i=0; i < Math.ceil(posts.length / 3); i++ ) {

            let currentPosts = []
            
            for(let k = i; k < i+3 ; k ++ ) {

              currentPosts.push(posts[k])
            
            }

            return currentPosts.map( 
            // 1,6,7,12,13,18,19,20,25
            post => posts.indexOf(post) + 1  ===  1 || posts.indexOf(post) + 1  ===  6
            || posts.indexOf(post) + 1  ===  7 || posts.indexOf(post) + 1  ===  12 
            || posts.indexOf(post) + 1  ===  13 || posts.indexOf(post) + 1  ===  18 
            || posts.indexOf(post) + 1  ===  20 || posts.indexOf(post) + 1  ===  25 ? 

            <Link href={`/blog/${post.contentMdFileUrl}`}>
              <Col span={11}>
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
              </Col>
            </Link> :
            
            <Link href={`/blog/${post.contentMdFileUrl}`}>
              <Col span={6}>
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
            </Link>   
            )

          }          

        })())

      }


      {/* <Link href="/blog">
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
      </Link> */}
    </Space>
 </div>

}