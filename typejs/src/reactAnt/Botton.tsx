import React from "react";
//引入Aut
import { Button, ConfigProvider } from "antd";

interface IState {
  type: boolean;
}
interface IProps {}
class Button1 extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props);
    this.state = {
      type: true
    };
  }
  render() {
    let type = this.state.type;
    return (
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button type="danger" loading={type}>
          按钮
        </Button>
      </ConfigProvider>
    );
  }
}
export default Button1;
