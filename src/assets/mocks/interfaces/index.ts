import { ReactNode } from "react";

interface INav {
  name: string;
  path: string;
  children?: ReactNode;
}

interface ICardProps {
  title: string;
  sub_title: string;
  path: string;
}

export type { INav, ICardProps };
