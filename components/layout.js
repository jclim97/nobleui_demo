import AppHeader from '../components/header'
import AppFooter from '../components/footer'
import NavBar from '../components/navbar'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const layout = ({ children }) => {
    return ( 
        <div>
            <Layout >
                <Sider width="10vw">
                    <NavBar />
                </Sider>
                <Layout >
                    <Header>
                       <AppHeader />
                    </Header>
                    <Content>
                    { children }
                    </Content>
                    <Footer>
                        <AppFooter />
                    </Footer>
                </Layout>
            </Layout>
        </div>
     );
}
 
export default layout;