
import { Col, Divider, Image, Row, Space, Tooltip, Typography } from 'antd'
import 'antd/dist/antd.css';
import HeaderComponent from '../../components/HeaderComponent';
import {GrView, GrGithub} from "react-icons/gr"
import {BiHeart} from "react-icons/bi"
import {MdOutlineEdit} from "react-icons/md"
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

const {Title, Text} = Typography

const Home = ({
    frontmatter,
    content,
  }) => {

    
    return (
        <div className="container">
            
            <head>
                <title>Fix and fork - BLOG content </title>
                <link rel="icon" href="/favicon.ico" />
                <link href="/styles/style.css" rel="stylesheet" />`
                <link href="/styles/project-theme.css" rel="stylesheet" />`
            </head>

            <main>
                <HeaderComponent />

                {/* action container */}

                <Row className="pad64 blog-container">
                    <Col span={4}  className="action-container">
                        <Tooltip placement="right" title={"Fork solution"}>
                            <div className="action">
                                <svg id="git-pull-request-line" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <path id="Path_28" data-name="Path 28" d="M0,0H29V29H0Z" fill="none"/>
                                    <path id="Path_29" data-name="Path 29" d="M18.333,5.789h2.555a2.541,2.541,0,0,1,2.555,2.526v10.32a3.828,3.828,0,1,1-2.555,0V8.316H18.333v3.789l-5.75-5.053L18.333,2ZM5.556,10.627a3.8,3.8,0,1,1,5.057-4.215,3.786,3.786,0,0,1-2.5,4.215v8.008a3.8,3.8,0,1,1-5.057,4.215,3.786,3.786,0,0,1,2.5-4.215ZM6.834,8.316A1.263,1.263,0,1,0,5.556,7.053,1.271,1.271,0,0,0,6.834,8.316Zm0,15.158A1.263,1.263,0,1,0,5.556,22.21,1.271,1.271,0,0,0,6.834,23.474Zm15.333,0a1.263,1.263,0,1,0-1.278-1.263A1.271,1.271,0,0,0,22.166,23.474Z" transform="translate(0 0)"/>
                                </svg>
                                </div>
                            </Tooltip>
                            <Tooltip placement="right" title={"Total views"}>    
                                <div className="action">
                                <GrView color="#3A3E3E" />
                                </div>
                            </Tooltip>

                        <Tooltip placement="right" title={"Like solution"}>
                            <div className="action">
                                <BiHeart color="#3A3E3E" />
                            </div>
                        </Tooltip>

                        <Tooltip  placement="right" title={"Total comments"}>
                            <div className="action">
                                <svg id="chat-1-line" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <path id="Path_32" data-name="Path 32" d="M0,0H29V29H0Z" fill="none"/>
                                    <path id="Path_33" data-name="Path 33" d="M12,3h5a10.051,10.051,0,0,1,0,20.1v4.4C10.75,24.987,2,21.218,2,13.051A10.026,10.026,0,0,1,12,3Zm2.5,17.59H17A7.539,7.539,0,0,0,17,5.513H12a7.519,7.519,0,0,0-7.5,7.538c0,4.536,3.077,7.5,10,10.654Z" transform="translate(0 0)"/>
                                </svg>

                            </div>
                        </Tooltip>

                        <Tooltip placement="right" title={"Github Link"}>
                            <div className="action">
                                <GrGithub color="#3A3E3E" />
                            </div>
                        </Tooltip>
                    </Col>
                    <Col span={16} className="main-post-content">


                        {/* MAIN POST CONTAINER */}
                        
                        <div className='card card-page'>
                            <Image src={'https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-cover-bg" alt='' />
                            <Title level={1} className="post-title">Tips to master while studying typing master and their importance</Title>
                            <div className='post-body'>
                                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                            </div>
                        </div>

                        {/* comment section */}

                        <Divider className="post-divider" />

                        <Space className="comment-section" direction="vertical">
                            <Title level={3}>Comments (3)</Title>

                            <Space direction="horizontal">
                                <Image src={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} className="post-profile-pic" />

                                <Space className="comments-container" direction="vertical">
                                    <Title level={4} className="contributor">Anonymous Contributor</Title>
                                    <Title level={5} className="time">3 hours ago</Title>
                                    <Text className="content">It will benefit you in your future career as well. It might take a lot of practice to see improvement, but don’t give up.</Text>

                                    <Divider />
                                </Space>
                            </Space>
                        </Space>

                    </Col>
                    
                    <Col span={4}  className="action-container right-actions">

                        <Tooltip placement="left" title={"Present Solution"}>
                            <div className="action">
                                <svg id="slideshow-2-line" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                    <path id="Path_34" data-name="Path 34" d="M0,0H29V29H0Z" fill="none"/>
                                    <path id="Path_35" data-name="Path 35" d="M15.75,20.75V24.5H22V27H7V24.5h6.25V20.75H4.5A1.25,1.25,0,0,1,3.25,19.5V4.5H2V2H27V4.5H25.75v15a1.25,1.25,0,0,1-1.25,1.25Zm-10-2.5h17.5V4.5H5.75ZM12,7l6.25,4.375L12,15.75Z" fill="#535353"/>
                                </svg>

                            </div>
                        </Tooltip>

                        <Tooltip placement="left" title={"Edit Solution"}>
                            <div className="action">
                                <MdOutlineEdit color="#3A3E3E" />
                            </div>
                        </Tooltip>
                    </Col>
                </Row>

            </main>
        </div>
    )
}



export async function getStaticProps() {
    const markdownWithMeta = fs.readFileSync('C:/Users/ntwari/Documents/ntwari egide docs/Fixand fork/fixandfork/pages/blog/content/test.md', 'utf-8'
    )
  
    const { data: frontmatter, content } = matter(markdownWithMeta)
  
    return {
      props: {
        frontmatter,
        content
      },
    }
  }

export default Home