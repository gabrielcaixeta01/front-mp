"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type RoleType = "cliente" | "vendedor" | "administrador" | null;

interface RoleContextType {
    role: RoleType;
    setRole: (role: RoleType) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
    const [role, setRole] = useState<RoleType>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");
        if (storedRole) {
            setRole(storedRole as RoleType);
        }
    }, []);

    const updateRole = (newRole: RoleType) => {
        setRole(newRole);
        localStorage.setItem("userRole", newRole ?? "");
    };

    return (
        <RoleContext.Provider value={{ role, setRole: updateRole }}>
            {children}
        </RoleContext.Provider>
    );
}

export function useRole() {
    const context = useContext(RoleContext);
    if (!context) throw new Error("useRole deve ser usado dentro de RoleProvider");
    return context;
}