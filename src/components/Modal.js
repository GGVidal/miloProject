import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';

const ModalBase = ({visible, children, onExitModal}) => {
  const onCloseModal = () => {
    onExitModal();
  };
  return (
    <Modal
      onBackButtonPress={() => onCloseModal()}
      onTouchOutside={() => onCloseModal()}
      isVisible={visible}
      onBackdropPress={() => onCloseModal()}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 350,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
export default ModalBase;
