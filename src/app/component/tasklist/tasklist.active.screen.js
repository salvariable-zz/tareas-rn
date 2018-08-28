import React from 'react';
import {AsyncStorage, Text, TouchableOpacity, View} from "react-native";
import {Header} from 'native-base';
import TaskList from "./tasklist.component";
import TaskModal from "../taskmodal/taskmodal.component";

class TaskListActive extends React.Component{

    render() {
        return(
            <View style={{flex: 1}}>
                <Header/>
                <TaskList color={'silver'}/>
                <TaskModal/>
            </View>
        );
    }
}

export default TaskListActive;