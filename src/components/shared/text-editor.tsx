"use client";

import React from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { en } from "@blocknote/core/locales";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { PartialBlock } from "@blocknote/core";

interface TextEditorProps {
  onChange: (value: string) => void;
  content?: string;
  editable?: boolean;
}

function TextEditor({ onChange, content, editable }: TextEditorProps) {
  const locale = en;

  const { resolvedTheme } = useTheme();
  const editor = useCreateBlockNote({
    initialContent: content
      ? (JSON.parse(content) as PartialBlock[])
      : undefined,
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        emptyDocument: "Add the product description here...",
      },
    },
  });
  return (
    <div className="flex w-full min-h-[60vh] border rounded-lg py-8 px-0">
      <BlockNoteView
        editor={editor}
        className="w-full"
        onChange={(editor) =>
          onChange(JSON.stringify(editor.document, null, 2))
        }
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default TextEditor;
