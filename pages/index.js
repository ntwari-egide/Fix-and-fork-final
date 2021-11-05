import { Button, Col, Image, PageHeader, Row, Space, Typography } from 'antd'
import Head from 'next/head'
import 'antd/dist/antd.css';
import {RiUserFollowLine} from "react-icons/ri"
import { Anchor } from 'antd';
import {FiGithub} from "react-icons/fi"
import {ImEarth} from "react-icons/im"
import {FaReact} from "react-icons/fa"
import {FaVuejs} from "react-icons/fa"
import {SiSpringboot} from "react-icons/si"
import {SiJava} from "react-icons/si"
import {DiPhp} from "react-icons/di"
import {FaProjectDiagram} from "react-icons/fa"
import HeaderNavbar from '../components/HeaderComponent';
import PostsComponent from '../components/PostsComponent';
import 'tailwindcss/tailwind.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios'

const { Link } = Anchor;

const {Title, Text} = Typography

export default function Home({posts = []}) {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Fix and fork - Home </title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles/style.css" rel="stylesheet" />`
        <link href="../assets/fonts/stylesheet.css" rel="stylesheet" />`
        <link href="/styles/project-theme.css" rel="stylesheet" />`
      </Head>

      <main>
        <HeaderNavbar />


        {/* mobile welcome content */}

        <Space direction="vertical" className="welcome-content mobile-welcome-content">
          <Col className="right-content">

          <div className="demostrate-actions action-1">
            <Row>
              <Col span={6}>
                <Image preview={false} src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              </Col>
              <Col span={16}>
                <Title level={5}>Started following you</Title>
                <Title level={5} className="time">Today 09. July</Title>
              </Col>
              <Col span={2}>
                  <RiUserFollowLine fontSize={10} color="#5C82F2" />
              </Col>
            </Row>
          </div>


          <div className="demostrate-actions action-2">
            <Row>
              <Col span={6}>
                <Image preview={false} src={'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                      </Col>
                      <Col span={16}>
                        <Title level={5}>Liked your solution</Title>
                        <Title level={5} className="time">Today 09. July</Title>
                      </Col>
                      <Col span={2}>
                          <FiGithub fontSize={10} color="#0420BF" />
                      </Col>
                    </Row>
                  </div>

                  <div className="demostrate-actions action-3">
                    <Row>
                      <Col span={6}>
                        <Image preview={false} src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                      </Col>
                      <Col span={16}>
                        <Title level={5}>Forked your solution</Title>
                        <Title level={5} className="time">Today 09. July</Title>
                      </Col>
                      <Col span={2}>
                        <svg id="heart-add-fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path id="Path_9" data-name="Path 9" d="M0,0H24V24H0Z" fill="none"/>
                          <path id="Path_10" data-name="Path 10" d="M19,14v3h3v2H19v3H17V19H14V17h3V14Zm1.243-9.243a6,6,0,0,1,.507,7.91,6,6,0,0,0-8.061,8.127l-.69.691L3.521,12.993A6,6,0,0,1,12,4.529a6,6,0,0,1,8.242.228Z" fill="#f26a4b"/>
                        </svg>

                      </Col>
                    </Row>
                  </div>
                  </Col>
          <Col>
            <Title level={1}>
              Never allow the same bug to bite you twice, Find here best effective solution
            </Title>
            <Title level={3}>
              Aliquam cursus libero a metus ornare, eget mollis diam mollis. Nunc mi lectus, iaculis eget tortor non, pellentesque consequat mauris.
            </Title>
            <Button>GET STARTED</Button>
          </Col>
        </Space>

        {/* welcome content  */}

        <Row className="welcome-content web-welcome-content">
          <Col span={9}>
            <Title level={1}>
              Never allow the same bug to bite you twice, Find here best effective solution
            </Title>
            <Title level={3}>
              Aliquam cursus libero a metus ornare, eget mollis diam mollis. Nunc mi lectus, iaculis eget tortor non, pellentesque consequat mauris.
            </Title>
            <Button>GET STARTED</Button>
          </Col>
          <Col span={15} className="right-content">

              <div className="demostrate-actions action-1">
                <Row>
                  <Col span={6}>
                    <Image preview={false} src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
                  </Col>
                  <Col span={16}>
                    <Title level={5}>Started following you</Title>
                    <Title level={5} className="time">Today 09. July</Title>
                  </Col>
                  <Col span={2}>
                      <RiUserFollowLine fontSize={10} color="#5C82F2" />
                  </Col>
                </Row>
              </div>


              <div className="demostrate-actions action-2">
                <Row>
                  <Col span={6}>
                    <Image preview={false} src={'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                  </Col>
                  <Col span={16}>
                    <Title level={5}>Liked your solution</Title>
                    <Title level={5} className="time">Today 09. July</Title>
                  </Col>
                  <Col span={2}>
                      <FiGithub fontSize={10} color="#0420BF" />
                  </Col>
                </Row>
              </div>

              <div className="demostrate-actions action-3">
                <Row>
                  <Col span={6}>
                    <Image preview={false} src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                  </Col>
                  <Col span={16}>
                    <Title level={5}>Forked your solution</Title>
                    <Title level={5} className="time">Today 09. July</Title>
                  </Col>
                  <Col span={2}>
                    <svg id="heart-add-fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path id="Path_9" data-name="Path 9" d="M0,0H24V24H0Z" fill="none"/>
                      <path id="Path_10" data-name="Path 10" d="M19,14v3h3v2H19v3H17V19H14V17h3V14Zm1.243-9.243a6,6,0,0,1,.507,7.91,6,6,0,0,0-8.061,8.127l-.69.691L3.521,12.993A6,6,0,0,1,12,4.529a6,6,0,0,1,8.242.228Z" fill="#f26a4b"/>
                    </svg>

                  </Col>
                </Row>
              </div>
          </Col>
        </Row>

        <div className="mobile-post-types">
          <Carousel responsive={responsive}>

              <div>
                <Space direction="horizontal">
                  <Space direction="post-types">
                      <ImEarth fontSize={16} color={"#535353"} />
                      <Title level={4}>Global</Title>
                      <Title level={4}>150</Title>
                  </Space>
                </Space>
              </div>
              <div>
                <Space direction="horizontal">
                  <Space direction="post-types">
                      <FaReact fontSize={16} color={"#535353"} />
                      <Title level={4}>React</Title>
                      <Title level={4}>15</Title>
                  </Space>
                </Space>
              </div>

              <Space direction="horizontal">
                <Space direction="post-types">
                    <FaVuejs fontSize={16} color={"#535353"} />
                    <Title level={4}>Vue Js</Title>
                    <Title level={4}>4</Title>
                </Space>
              </Space>

              <Space direction="horizontal">
                <Space direction="post-types">
                    <SiSpringboot fontSize={16} color={"#535353"} />
                    <Title level={4}>Spring</Title>
                    <Title level={4}>7</Title>
                </Space>
              </Space>

              <Space direction="horizontal">
                <Space direction="post-types">
                    <SiJava fontSize={16} color={"#535353"} />
                    <Title level={4}>Java</Title>
                    <Title level={4}>3</Title>
                </Space>
              </Space>

              <Space direction="horizontal">
                <Space direction="post-types">
                    <DiPhp fontSize={16} color={"#535353"} />
                    <Title level={4}>Php</Title>
                    <Title level={4}>6</Title>
                </Space>
              </Space>
          </Carousel>
        </div>

        <PageHeader 
          className="navbar-content navbar-2"
          ghost={false}
          title={null}
          backIcon={null}
         >
           <Space size="small" direction="horizontal">
              <div className="post-types-container">
                <Space className="post-types">
                  <Space>
                    <Col><ImEarth fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Global</Title></Col>
                    <Col><Title level={4}>150</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><FaReact fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>React Js</Title></Col>
                    <Col><Title level={4}>8</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><FaVuejs fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Vue Js</Title></Col>
                    <Col><Title level={4}>7</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><SiSpringboot fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Spring</Title></Col>
                    <Col><Title level={4}>2</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><SiJava fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Java</Title></Col>
                    <Col><Title level={4}>9</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><DiPhp fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Php</Title></Col>
                    <Col><Title level={4}>50+</Title></Col>
                  </Space>              
                </Space>

                <Space className="post-types">
                  <Space>
                    <Col><FaProjectDiagram fontSize={16} color={"#535353"} /></Col>
                    <Col><Title level={4}>Open Source</Title></Col>
                    <Col><Title level={4}>4</Title></Col>
                  </Space>              
                </Space>
                
              </div>

              <Space className="post-types last-type">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.891" height="15.75" viewBox="0 0 3.891 15.75">
                  <g id="Icon_ionic-ios-menu" data-name="Icon ionic-ios-menu" transform="translate(-4.5 -10.125)">
                    <path id="Path_1" data-name="Path 1" d="M8.228,12.375H4.662c-.089,0-.162-.506-.162-1.125h0c0-.619.073-1.125.162-1.125H8.228c.089,0,.162.506.162,1.125h0C8.391,11.869,8.318,12.375,8.228,12.375Z" transform="translate(0)"/>
                    <path id="Path_2" data-name="Path 2" d="M8.228,19.125H4.662c-.089,0-.162-.506-.162-1.125h0c0-.619.073-1.125.162-1.125H8.228c.089,0,.162.506.162,1.125h0C8.391,18.619,8.318,19.125,8.228,19.125Z" transform="translate(0)"/>
                    <path id="Path_3" data-name="Path 3" d="M8.228,25.875H4.662c-.089,0-.162-.506-.162-1.125h0c0-.619.073-1.125.162-1.125H8.228c.089,0,.162.506.162,1.125h0C8.391,25.369,8.318,25.875,8.228,25.875Z" transform="translate(0)"/>
                  </g>
                </svg>
              </Space>
            
           </Space>

          </PageHeader>

         <div className="bg-transparent">
          {
            posts !== [] ?
            <PostsComponent posts={posts} /> : 'No posts found'
          }
          {/* <PostsComponent />
          <PostsComponent /> */}
          <br /><br /><br />
         </div>

      </main>
    </div>
  )
}


export async function getStaticProps() {

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
        _id: "618011a7f17cf9fdd12979a5",
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
        PostedBy: "617fafcb6733b8d38cd22aa6",
        createdAt: "2021-11-01T13:39:48.221Z",
        updatedAt: "2021-11-01T13:39:48.221Z",
        __v: 0
        },
        {
          _id: "618011a7f17cf9fdd129b4a5",
          postTypes: [
          "617fb0d46733b8d38cd92ab0",
          "617fb13c6733b8d38cd92ab4"
          ],
          coverImageUrl: "https://images.pexels.com/photos/34627/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          postTitle: "5 Awesome Boodfadfks to Learn Spring Boot, Microservices, and Spring Cloud for Java developers",
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

    // const res = await fetch('https://fixandfork.herokuapp.com/api/v1/posts')
    // const posts = await res.json()


    return {
      props: {
        posts,
      },
    }

}