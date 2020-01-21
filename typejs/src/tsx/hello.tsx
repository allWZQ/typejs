import React from "react";

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
//声明接口Props接收的类型
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
//函数声明
const Hello1 = ({ name, enthusiasmLevel = 2 }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("enthusiasmLevel需要大于0");
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello{name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};
//类声明
class Hello2 extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error("enthusiasmLevel需要大于0");
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello{name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
export default Hello2;
