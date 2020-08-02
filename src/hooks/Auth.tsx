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
  signed: boolean;
}

interface AuthData {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@News:token');
    const user = localStorage.getItem('@News:user');

    if (token && user) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    console.log('SignIn');
    const response = await api.post('auth', { email, password });

    const { token, user } = response.data;

    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
    localStorage.setItem('@News:token', token);
    localStorage.setItem('@News:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    localStorage.removeItem('@News:token');
    localStorage.removeItem('@News:user');

    api.defaults.headers['Authorization'] = '';
    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: !!data.user, user: data.user, signIn, signOut }}
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
