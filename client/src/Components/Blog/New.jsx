import { useRef } from "react";
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Row,
    Col,
    DatePicker,
    Form,
    Input,
    Card,
    Upload,
    Space,
} from 'antd';
import ReactPlayer from 'react-player'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const New = () => {
    const head = useRef();
    const body = useRef();

    const HandlePost = (e) => {
        e.preventDefault();
        fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({
                head: head.current.value,
                body: body.current.value
            }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }

    return (
        <>
            {/* <ReactPlayer url='https://www.twitch.tv/videos/1909175634' playing={true} /> */}
            <Row justify='center' style={{ height: '100vh', marginTop: '2rem' }}>
                <Col md={12} span={22}>
                    <Card
                        title="New Post"
                    >
                        <Form>
                            <Form.Item label="Title">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Body">
                                <TextArea rows={20} />
                            </Form.Item>
                            <Form.Item wrapperCol={{
                                offset: 2,
                                span: 16,

                            }}>
                                <Space>
                                    <Button type="primary">POST</Button>
                                    <Upload>
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
                                </Space>
                            </Form.Item>

                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default New