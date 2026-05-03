// src/contexts/AuthContext.jsx
import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuth();

  // ✅ Không block app — dù loading hay refresh lỗi vẫn render bình thường
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);