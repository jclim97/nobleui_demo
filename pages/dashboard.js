import { Layout, Typography,Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function Dashboard () {
    return ( 
        <div>
            <Title className="content-title" level={1}>My Dashboard</Title>
            <div className="site-statistic-demo-card" style={{ padding: 20}}>
            <Row gutter={24}>
            <Col span={8}>
                <Card>
                <Statistic
                    title="NEW CUSTOMERS"
                    value={3897}
                    valueStyle={{ color: '#000000' }}
                />
                <Statistic
                    value={3.3}
                    precision={1}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                <Statistic
                    title="NEW ORDERS"
                    value={35084}
                    valueStyle={{ color: '#000000' }}
                />
                <Statistic
                    value={-2.8}
                    precision={1}
                    valueStyle={{ color: '#FF0000' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                <Statistic
                    title="GROWTH"
                    value={89.87}
                    precision={2}
                    valueStyle={{ color: '#000000' }}
                    suffix="%"
                />
                <Statistic
                    value={2.8}
                    precision={1}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                </Card>
            </Col>
            </Row>
            </div>
            <div style={{ padding: 20}}>
            <Row>
                <Col span={24}>
                <Card>
                <Statistic
                    title="GROWTH"
                    value={89.87}
                    precision={2}
                    valueStyle={{ color: '#000000' }}
                    suffix="%"
                />
                </Card>
                </Col>
            </Row>
            </div>
        </div>
     );
}
 
export default Dashboard;