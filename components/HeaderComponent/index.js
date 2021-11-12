import { Button, Col, Image, PageHeader, Row, Space, Typography } from 'antd'
import Head from 'next/head'
import 'antd/dist/antd.css';
import {BiSearch} from "react-icons/bi"
import { useRouter } from 'next/router'

const { Title } = Typography

export default function HeaderNavbar() {

  const router = useRouter()

    return <PageHeader 
    className="navbar-content"
    ghost={false}
    onBack={() => window.history.back()}
    title={<Title className="cursor-pointer" onClick={() => router.push(`/`)} level={3}>Fix&Fork</Title>}
    backIcon={null}
    extra={[
      <div className="menu-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" /></svg>
      </div>,
      <Button>
        <Space><BiSearch /></Space>
        Search
      </Button>,
      <Button>About</Button>
    ]}
  />

}