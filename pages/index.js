import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Layout, Form, Input, Button, Checkbox, Typography } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

export default function Login() {
  return (
    <div>
      <Head>
        <title>NobleUI | Login</title>
      </Head>
      <Layout style={{ height:"100vh"}}>
      <Sider width="25vw">
        <div><Image src="/login.png" layout="fill"/></div>
      </Sider>
      <Layout>
        <Header style={{ height:"30vh", paddingTop:150, background:"white"}}>
          <Title level={3}>NobleUI</Title>
          <Title level={4}>Welcome back! Log in to your account.</Title>
        </Header>
        <Content style={{ padding:50}}>
          <Form
            layout="vertical"
          >
            <Form.Item
              label="Email Address"
              name="Email"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="Password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input type="password" placeholder="Password"/>
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Link href="/dashboard">
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Link>
              <Button htmlType="button" className="login-twitter-button">
                <img width={25} src="/twitter.png"/>
                Login with twitter
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="">Not a user? Sign up</a>
            </Form.Item>
          </Form>
        </Content>
        <Footer>
          Footer
        </Footer>
      </Layout>
    </Layout>
    </div>
  )
}
