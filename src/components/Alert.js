import React from 'react';
import Alert from 'react-native-awesome-alerts';

const AlertBase = ({show, title, message, hideAlert}) => {
  return (
    <Alert
      show={show}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showConfirmButton={true}
      confirmText="OK"
      confirmButtonColor="#00796B"
      onConfirmPressed={() => {
        hideAlert();
      }}
    />
  );
};

export default AlertBase;
