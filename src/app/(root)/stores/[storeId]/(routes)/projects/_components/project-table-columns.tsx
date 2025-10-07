"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Project = {
  id: string;
  title: string;
  slug: string;
  isPublished: boolean;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "isPublished",
    header: "Published",
  },
];
