import Button from '@/components/Button';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import { colors } from '@/constants/theme';
import { useAuth } from '@/contexts/authContext';
import React from 'react';
import { StyleSheet } from 'react-native';

const Home = () => {
  // https://youtu.be/_Y9A7RVIpMQ?list=LL&t=6248
  const { user, signOut } = useAuth();
  // console.log('user: ', user);
  const handleLogout = async () => {
    await signOut();
  };
  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Home</Typo>

      <Button onPress={handleLogout}>
        <Typo> Logout</Typo>
      </Button>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
