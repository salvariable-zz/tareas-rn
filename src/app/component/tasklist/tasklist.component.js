import React from 'react';
import {AsyncStorage, FlatList, Text, View} from 'react-native';
import {ListItem} from 'native-base';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.userTasks = [];
    }

    componentDidMount() {
        this._getAllTasks();
    }

    _readTask = async (taskName) => {
        try {
            const value = await AsyncStorage.getItem(taskName).then(value => {
                const otherValue = JSON.parse(value);
                return otherValue;
            });
            if (value !== null) {
                // const result = JSON.parse(taskName);
                console.log(taskName);
                // console.log(typeof taskName);
                // return result;
            }
        } catch (error) {
        }
    }

    _getAllTasks = async () => {
        try {
            const tasks = await AsyncStorage.getAllKeys();
            if (tasks !== null) {
                tasks.forEach(taskName => {
                    let current = this._readTask(taskName);
                    console.log('getAllTasks', current.description);
                } );
            }
        } catch (error) {
            console.log(error);
        }
    }

    // const taskData = this.userTaskNames.map((item) => {return item.description});

    _renderItem(item) {
        return(
            <ListItem>
                <Text>{item}</Text>
            </ListItem>
        );
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: this.props.color}}>
                <FlatList
                    data={this.userTasks}
                    renderItem={ ({item}) => this._renderItem(item)}
                    keyExtractor={item => item}
                />
            </View>
        );
    }
}

export default TaskList;