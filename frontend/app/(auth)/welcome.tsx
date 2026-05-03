import ScreenWrapper from '@/components/ScreenWrapper';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Welcome = () => {
  return (
    <ScreenWrapper showPattern={true}>
      <Text>Welcome</Text>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
