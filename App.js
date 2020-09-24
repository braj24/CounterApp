import React, {Component} from 'react';
import {View, Text, StatusBar, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './actions/index';

import {bindActionCreators} from 'redux';

class App extends Component {
  addCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }

  deleteCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }

  render() {
    const {count} = this.props;

    return (
      <>
        <StatusBar barStyle="dark-content" />

        <View style={styles.container}>
          <Text style={styles.countText}>{count}</Text>
          <View style={styles.buttonContainer}>
            <Button color="red" title="Add" onPress={() => this.addCount()} />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              color="red"
              title="Delete"
              onPress={() => this.deleteCount()}
            />
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.countValue.count,
});

const ActionCreators = Object.assign({}, {changeCount});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {fontSize: 28, fontWeight: 'bold', padding: 5},
  buttonContainer: {width: 100, height: 50, padding: 3},
});
