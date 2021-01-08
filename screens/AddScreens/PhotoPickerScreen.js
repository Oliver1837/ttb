import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';




export default class PhotoPickerScreen extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
  
  }

  async componentDidMount() {
    this.getPermissionAsync()
  
  }
 
  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
        console.log(photo);
        this.goToLoadPost(photo);
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality : 1
    });
  }
  goToLoadPost=(uri)=>{
    this.props.navigation.navigate({
        routeName: 'CheckPhoto',
        params:{
            uri : uri
        }
    });
  }
    

  render(){
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <Text>No access to camera</Text>;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                 <Ionicons name="camera-reverse-outline" size={40} color="#fff" />
                </TouchableOpacity>
              
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                    <View style={{ 
                          height:60,

                          width:60,
                          borderRadius:30,
                          alignItems:'center',
                          borderColor:"#fff",
                          borderWidth:2,
                          justifyContent:"center"
                        }}>                 
                    <View style={{ 
                          height:50,
                        
                          backgroundColor:"#fff",
                          width:50,
                          borderRadius:25
                        }}>

                  </View>
                  </View>

                </TouchableOpacity>
                <View  style={{ 
                          height:60,

                          width:60,
                          borderRadius:30,
                          alignItems:'center',
                        
                          justifyContent:"center"
                        }}></View>

              </View>
            </Camera>
        </View>
      );
    }
  }
  
}
