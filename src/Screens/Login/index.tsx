import React, { useCallback, useRef, useState } from 'react';
import {
  Button,
  Center,
  Heading,
  Input,
  KeyboardAvoidingView,
  VStack,
  AlertDialog,
  useToast,
} from 'native-base';

import Container from '../../Components/Container';
import HorizontalLogo from '../../Components/HorizontalLogo';
import api from '../../Helpers/Api';

export default function LoginScreen(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErrored, setIsErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dismissErrorRef = useRef();

  const toast = useToast();

  const handleError = useCallback((message: string) => {
    setErrorMessage(message);
    setIsErrored(true);
  }, []);

  const handleErrorClose = useCallback(() => {
    setIsErrored(false);
  }, []);

  const handleLoginSubmit = useCallback(async () => {
    setLoading(true);
    try {
      if (!email || !password) {
        throw new Error('Please enter valid credentials');
      }

      await api.post('/users/sessions', {
        email,
        password,
      });

      toast.show({
        title: 'Successful signed in',
        status: 'success',
      });
    } catch (error) {
      handleError(
        error.response?.data.validation?.body?.message ||
          error.response?.data.message ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  }, [email, handleError, password, toast]);

  return (
    <Container>
      <Center>
        <AlertDialog
          isOpen={isErrored}
          leastDestructiveRef={dismissErrorRef}
          onClose={handleErrorClose}
        >
          <AlertDialog.Content>
            <AlertDialog.Header>
              <Heading fontSize="lg">Error</Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>{errorMessage}</AlertDialog.Body>
            <AlertDialog.Footer paddingBottom={6}>
              <Button
                colorScheme="red"
                marginRight={4}
                flex={1}
                ref={dismissErrorRef}
                onPress={handleErrorClose}
              >
                Ok
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
      <KeyboardAvoidingView behavior="position" paddingBottom={20}>
        <Center paddingY={5}>
          <HorizontalLogo />
        </Center>
        <Heading fontSize={24}>Sign in</Heading>
        <VStack marginTop={4} space={4}>
          <Input type="text" placeholder="Email" onChangeText={setEmail} />
          <Input
            type="password"
            placeholder="Password"
            onChangeText={setPassword}
          />
          <Button isLoading={loading} onPress={handleLoginSubmit}>
            Sign in
          </Button>
          <Button variant="outline">Sign up</Button>
        </VStack>
      </KeyboardAvoidingView>
    </Container>
  );
}
