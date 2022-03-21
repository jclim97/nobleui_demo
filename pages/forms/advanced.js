import { Typography, Form, Input, Button, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Text, Title } = Typography;
const { TextArea } = Input;
const formItemLayout = {
    labelCol: { span: 8},
    wrapperCol: { span: 16},
  };
const { Option } = Select;

const advanced = () => {
    return ( 
        <div>
            <Title className="nav-title" level={2}>Forms / Advanced Elements</Title>
            <div className="horizontal_forms">
                <div className="form_validation">
                <Title level={3}>FORM VALIDATION</Title>
                <Text>Read the <a href="https://jqueryvalidation.org/">Official jQuery Validation Documentation</a> for a full list of instructions and other options.</Text>
                <Form
                    layout="vertical"
                >
                    <Form.Item
                        label="Name"
                        name="Name"
                        rules={[{ required: true, message: 'Please input a name' }]}
                        >
                        <Input type="user" placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        label="Email Address"
                        name="Email"
                        rules={[{ required: true, message: 'Please enter a valid email address' }]}
                        >
                        <Input type="email" placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="Password"
                        rules={[{ required: true, message: 'Please provide a password' }]}
                        >
                        <Input type="password" placeholder="Confirm password"/>
                    </Form.Item>
                    <Form.Item
                        label="Confirm password"
                        name="Confirm password"
                        rules={[{ required: true, message: 'Please provide a password again' }]}
                        >
                        <Input type="password" placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </div>
                <div className="form_bootstrap_maxlength">
                <Form {...formItemLayout}
                labelAlign='left'>
                    <Title level={3}>BOOTSTRAP MAXLENGTH</Title>
                    <Text>Read the <a href="https://github.com/mimo84/bootstrap-maxlength">Official Bootstrap MaxLength Documentation</a> for a full list of instructions and other options.</Text>
                    <Form.Item label="Default usage">
                        <Input placeholder="Type Something..." />
                    </Form.Item>
                    <Form.Item label="Few options" >
                        <Input placeholder="Type Something..." />
                    </Form.Item>
                    <Form.Item label="All the options">
                        <Input placeholder="Type Something..." />
                    </Form.Item>
                    <Form.Item label="Text Area" >
                        <TextArea rows={4} placeholder="This text area has a limit of 100 chars" />
                    </Form.Item>
                </Form>
                </div>
            </div>
            <div className='vertical_forms'>
                <Title level={3}>INPUT MASK</Title>
                <Text>Read the <a href="https://github.com/RobinHerbots/Inputmask">Official Inputmask Documentation</a> for a full list of instructions and other options.</Text>
                <div className='form_input_mask'>
                    <div className='left_input_mask'>
                        <Form labelAlign='left' layout='vertical'>
                            <Form.Item label="Date:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Date time:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Phone:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Currency:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Email:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className='right_input_mask'>
                        <Form labelAlign='left' layout='vertical'>
                            <Form.Item label="Time (12 hour):">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Date with custom placeholder:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Credit card:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Serial key:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                            <Form.Item label="Ip address:">
                                <Input placeholder="Type Something..." />
                            </Form.Item>
                        </Form>
                    </div>
                </div>          
            </div>
            <div className="horizontal_forms">
                <div className="form_select2">
                <Title level={3}>SELECT 2</Title>
                <Text>Read the <a href="https://select2.org/">Official Select2 Documentation</a> for a full list of instructions and other options.</Text>
                <Form
                    layout="vertical"
                >
                    <Form.Item
                        label="Single select box using select 2"
                        name="Location"
                        >
                         <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Search to Select"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                        >
                            <Option value="1">Texas</Option>
                            <Option value="2">New York</Option>
                            <Option value="3">Florida</Option>
                            <Option value="4">Kansas</Option>
                            <Option value="5">Hawaii</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Multiple select using select 2"
                        name="Locations"
                        >
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="select one country"
                            defaultValue={['china']}
                            // onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="china" label="China">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="China">
                                🇨🇳
                                </span>
                                China (中国)
                            </div>
                            </Option>
                            <Option value="usa" label="USA">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="USA">
                                🇺🇸
                                </span>
                                USA (美国)
                            </div>
                            </Option>
                            <Option value="japan" label="Japan">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="Japan">
                                🇯🇵
                                </span>
                                Japan (日本)
                            </div>
                            </Option>
                            <Option value="korea" label="Korea">
                            <div className="demo-option-label-item">
                                <span role="img" aria-label="Korea">
                                🇰🇷
                                </span>
                                Korea (韩国)
                            </div>
                            </Option>
                        </Select>
                    </Form.Item>
                </Form>
                </div>
                <div className="form_typehead">
                
                <Form {...formItemLayout} 
                labelAlign='left'>
                <Title level={3}>TYPEAHEAD</Title>
                <Text>Read the <a href="https://github.com/twitter/typeahead.js">Official Typeahead.js Documentation</a> for a full list of instructions and other options.</Text>
                    <Form.Item label="Basic">
                        <Input placeholder="States of USA" />
                    </Form.Item>
                    <Form.Item label="Bloodhound" >
                        <Input placeholder="States of USA" />
                    </Form.Item>
                </Form>
                </div>
            </div>
        </div>
        
     );
}
 
export default advanced;