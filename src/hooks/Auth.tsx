import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInData): Promise<void>;
  signOut(): void;
  token: string;
}

interface AuthData {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>({} as AuthData);

  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    console.log('SignIn');
    const response = await api.post('auth', { email, password });

    const { token, user } = response.data;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    console.log('signOut');
    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
};

export { useAuth, AuthProvider };
