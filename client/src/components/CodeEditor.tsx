import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";

export default function CodeEditor() {
  const CurrentLanguage = useSelector(
    (state: Rootstate) => state.compilerSlice.CurrentLanguage
  );
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="100vh"
      extensions={[loadLanguage(CurrentLanguage)]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
