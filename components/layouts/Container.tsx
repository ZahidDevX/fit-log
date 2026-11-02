import React from "react";

interface ComponentProps {
    children: React.ReactNode;
}

const Container = ({ children }: ComponentProps) => {
    return (
        <div className="px-6">{children}</div>
    );
};

export default Container;