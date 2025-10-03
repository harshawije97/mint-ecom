"use client";

import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Header;
