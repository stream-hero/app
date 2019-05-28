import React from "react";
import { AsyncStorage, Button, StatusBar, View } from "react-native";

class OtherScreen extends React.Component {
	static navigationOptions = {
		title: "Lots of features here"
	};

	render() {
		return (
			<View>
				<Button
					title="I'm done, sign me out"
					onPress={this._signOutAsync}
				/>
				<StatusBar barStyle="default" />
			</View>
		);
	}

	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate("Auth");
	};
}

export default OtherScreen;
