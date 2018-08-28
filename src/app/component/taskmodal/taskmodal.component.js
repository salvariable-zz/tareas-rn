import React, {Component} from 'react';
import {Alert, AsyncStorage, Modal, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {Button} from 'native-base';
import styles from './taskmodal.style';

class TaskModal extends Component {
    state = {
        modalVisible: false,
        taskName: '',
        taskDescription: '',
        taskTime: '00:00'
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _createTask = async (taskName, taskObject) => {
        try {
            await AsyncStorage.setItem(taskName, JSON.stringify(taskObject));
        } catch (error) {
            console.log(error);
        }
    }

    _readTask = async (taskName) => {
        try {
            const value = await AsyncStorage.getItem(taskName);
            if (value !== null) {
                console.log(value);
            }
        } catch (error) {
        }
    }

    _updateTask = async (taskName, taskObject) => {
        try {
            await AsyncStorage.mergeItem(taskName, taskObject);
        } catch (error) {
            console.log(error);
        }
    }

    _deleteTask = async (taskName) => {
        try {
            await AsyncStorage.removeItem(taskName);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={styles.frame}>
                        <View style={styles.window}>

                            <Text>¡Productividad activada!</Text>

                            <Text>¿Cómo se llama esta tarea?</Text>
                            <TextInput style={{borderWidth: 1}}
                                       onChangeText={(taskName) => this.setState({taskName})}
                                       value={this.state.taskName}
                            />

                            <Text>Describe brevemente la tarea a realizar:</Text>
                            <TextInput style={{borderWidth: 1}}
                                       onChangeText={(taskDescription) => this.setState({taskDescription}) }
                                       value={this.state.taskDescription}
                            />

                            <Text>Por favor indica la duración de la misma:</Text>
                            <View style={styles.buttonDrawer}>
                                <Button onPress={() => this.setState({time: 30})}><Text>Corta</Text></Button>
                                <Button onPress={() => this.setState({time: 60})}><Text>Media</Text></Button>
                                <Button onPress={() => this.setState({time: 90})}><Text>Larga</Text></Button>
                                <TextInput style={{borderWidth: 1}}
                                           onChangeText={(taskTime) => this.setState({taskTime}) }
                                           value={this.state.taskTime}
                                           keyboardType={"number-pad"}
                                />
                            </View>

                            <View style={styles.buttonDrawer}>

                                <Button danger onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                    <Text>Cancelar</Text>
                                </Button>

                                <Button success onPress={() => {
                                        let taskDetails = {
                                            description: `${this.state.taskDescription}`,
                                            time: `${this.state.taskTime}`
                                        };
                                        this._createTask(this.state.taskName, taskDetails).then(() => {
                                            Alert.alert('¡Gracias!', 'Tu tarea se ha guardado exitosamente', [{
                                                text: 'OK',
                                                onPress: () => this.setModalVisible(!this.state.modalVisible)
                                            }], { cancelable: false });
                                        })}
                                    }>
                                    <Text>Guardar</Text>
                                </Button>
                            </View>

                        </View>
                    </View>
                </Modal>

                /*Always-visible part*/

                <Button block success onPress={() => this.setModalVisible(true)}>
                    <Text>Crear Tarea</Text>
                </Button>

            </View>
        );
    }
}

export default TaskModal;