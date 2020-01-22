import React from "react";
import { Form, Input, Select, Row, Col, Checkbox, Button } from "antd";
import {
  stripscript,
  validatepass,
  validateVcode,
  validatephone
} from "../utils/validate";
import Password from "antd/lib/input/Password";

const { Option } = Select;
interface IState {
  confirmDirty: boolean;
}
interface IProps {
  form: any;
}
class RegistrationForm extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }
  handleSubmit(event: any) {
    console.log(event);
    //阻止表单提交
    event.preventDefault();
    // validateFieldsAndScroll校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围
    this.props.form.validateFieldsAndScroll((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }
  handleConfirmBlur(event: any) {
    const { value } = event.target;
    console.log(!!value); //!value:false !!value:true
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }
  compareToFirstPassword(rule: any, value: any, callback: any) {
    console.log(rule);
    console.log(value);
    console.log(callback);
    const { form } = this.props;
    //getFieldValue获取一个控件的值
    if (value && value !== form.getFieldValue("password")) {
      callback("两次密码不匹配");
    } else {
      callback();
    }
  }
  validateToNextPassword(rule: any, value: any, callback: any) {
    this.props.form.setFieldsValue({
      password: stripscript(value)
    });
    //console.dir(Password);
    console.log(value);
    console.log(value === "");
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      //force对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验
      form.validateFields(["confirm"], { force: true });
    } else if (value !== "" && validatepass(value)) {
      callback("请输入字母开头,长度为6-16的密码");
    }
    callback();
    console.log(value);
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 17 },
        sm: { span: 10 }
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 3 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 15,
          offset: 1
        },
        sm: {
          span: 9,
          offset: 6
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit.bind(this)}>
          <Form.Item label="邮箱">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "请输入正确的邮箱"
                },
                {
                  required: true,
                  message: "请输入邮箱"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator("password", {
              //用于初始化值
              initialValue: "",
              rules: [
                {
                  required: true,
                  message: "请输入密码"
                },
                {
                  //效验
                  validator: this.validateToNextPassword.bind(this)
                }
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "请再次输入你的密码"
                },
                {
                  //效验
                  validator: this.compareToFirstPassword.bind(this)
                }
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur.bind(this)} />)}
          </Form.Item>
          <Form.Item label="手机">
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "请输入你的手机号" }]
            })(
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            )}
          </Form.Item>
          <Form.Item label="验证码">
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator("captcha", {
                  rules: [
                    {
                      required: true,
                      message: "请输入验证码"
                    }
                  ]
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                我同意<a href="www.pcclive.com">协议</a>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
