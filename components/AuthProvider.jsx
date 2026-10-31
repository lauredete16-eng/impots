"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserService } from "@/lib/userService";

const Ctx = createContext(null);
export const useAuth = () => useContext(Ctx);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { setUser(UserService.getCurrentUser()); setReady(true); }, []);
  const login = (id, pw, type) => { const r = UserService.login(id, pw, type); if (r.ok) setUser(r.user); return r; };
  const logout = () => { UserService.logout(); setUser(null); };
  return <Ctx.Provider value={{ user, ready, login, logout }}>{children}</Ctx.Provider>;
}
