import React from 'react';
import {createBottomTabNavigator} from "react-navigation";
import TaskListActive from "./src/app/component/tasklist/tasklist.active.screen";
import TaskListDone from "./src/app/component/tasklist/tasklist.done.screen";

const TaskNavigator = createBottomTabNavigator({
    Activas: {screen: TaskListActive },
    Completadas: {screen: TaskListDone }
});

export default class App extends React.Component {
  render() {
    return (
      <TaskNavigator/>
    );
  }
}
