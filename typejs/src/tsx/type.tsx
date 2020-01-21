import React from "react";

//props 传入的类型
interface IProps {
  //如果声明变量赋值则为必选项
  color: string;
  //？表示为可选项
  size?: string;
  add?: () => void; //表示函数类型
  //表示任意的数值类型只能是string,和arr.every类似
  [propsName: string]: any;
  //只读类型,你将不能再对此属性赋值
  readonly id: number;
  [index: number]: number;
}
//class 中state的类型
interface IState {
  count: number;
}
function sum() {
  let args: {
    //当索引的类型是数字时,值的类型必须是数字
    [idnex: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}
//把props和state的类型接口传入组件
class Type extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1
  };
  public render() {
    return <div>Type</div>;
  }
}
//表示这个数组中只能有number类型
let arr: number[] = [1, 2, 2, 4, 5];
//表示数组可以出现任意的数字类型
let list: any[] = ["wzq", 22, { website: "www.pcclive.com" }];
//函数表达式
//=>与箭头函数不同,左边表示输入类型,右边表示输出类型
let mySum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
//函数的可选参数,可选参数必须在必须参数的后面
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName("tom", "cat");
let tom = buildName("tom");
//es6可选参数
function buildName2(firstName: string = "tom", lastName: string) {
  return firstName + "" + lastName;
}
let tomcat2 = buildName2("tom", "cat");
let tom2 = buildName2(undefined, "cat");
//剩余参数
function push(array: any[], ...item: any[]) {
  item.forEach(function(item) {
    array.push(item);
  });
}
let a: any[] = [];
push(a, 1, 2, 3);
//重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string) {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}
console.log(reverse(456));
//断言语法 制定一个值为一种类型的时候
function getLength(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length;
  } else {
    return something.toString.length;
  }
}
console.log(getLength("123"));
//类型别名
type Name = string; //声明string的别名为Name
type NameResolver = () => string; //声明函数的别名为NameResolver
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
export default Type;
