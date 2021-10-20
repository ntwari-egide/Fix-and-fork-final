import { Button, Col, Image, PageHeader, Row, Space, Typography } from 'antd'
import Head from 'next/head'
import 'antd/dist/antd.css';
import {BiSearch} from "react-icons/bi"

const {Title} = Typography

export default function HeaderNavbar (){

    return <PageHeader 
    className="navbar-content"
    ghost={false}
    onBack={() => window.history.back()}
    title={<Title level={3}>Fix&Fork</Title>}
    backIcon={null}
    extra={[
        <Button>
          <Space><BiSearch /></Space>
          Search
        </Button>,
        <Button>About</Button>
    ]}
  />

}