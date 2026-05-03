// src/hooks/useAuth.js
import { useState, useEffect, useCallback, useRef } from "react";
import tokenStore from "../shared/store/tokenStore";
import authService from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const silentRefresh = useCallback(async () => {
    try {
      // axiosClient đã unwrap res.data của axios
      // nên res ở đây = { type, status, code, message, data: { accessToken, ... } }
      const res = await authService.refreshToken();

      const accessToken = res?.data?.accessToken;
      if (!accessToken) throw new Error("No access token");

      tokenStore.set(accessToken);

      if (isMounted.current) {
        // eslint-disable-next-line no-unused-vars
        const { accessToken: _a, refreshToken: _r, ...userData } = res.data;
        setUser(userData);
      }
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // Bình thường khi chưa login — không cần log
      tokenStore.clear();
      if (isMounted.current) setUser(null);
      return false;
    } finally {
      if (isMounted.current) setLoading(false);
    }
  }, []);

  // ✅ F5 / mở tab → silent refresh
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    silentRefresh();
  }, [silentRefresh]);

  // ✅ Focus lại tab → refresh nếu token RAM mất
  useEffect(() => {
    const onFocus = () => {
      if (!tokenStore.get()) silentRefresh();
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [silentRefresh]);

  const login = useCallback(async (credentials) => {
    const res = await authService.login(credentials);
    // res = { type, status, data: { accessToken, fullName, ... } }
    const accessToken = res?.data?.accessToken;
    if (!accessToken) throw new Error("No access token");

    tokenStore.set(accessToken);

    // eslint-disable-next-line no-unused-vars
    const { accessToken: _a, refreshToken: _r, ...userData } = res.data;
    setUser(userData);

    return res;
  }, []);

  const logout = useCallback(async () => {
    try {
      console.log("Calling logout API...");
      await authService.logout();
      console.log("Logout API called successfully");
    } catch (error) {
      console.error("Logout API failed:", error);
      // vẫn clear dù BE lỗi
    } finally {
      tokenStore.clear();
      if (isMounted.current) setUser(null);
    }
  }, []);

  return { user, loading, login, logout, silentRefresh };
}
