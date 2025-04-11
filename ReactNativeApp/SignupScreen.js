import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const SignupScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    Alert.alert('Subscribed!', `You have subscribed with ${email}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Form</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: '80%', marginBottom: 20, padding: 10 }}
      />
      <Button title="Subscribe" onPress={handleSubscribe} />
    </View>
  );
};

export default SignupScreen;
