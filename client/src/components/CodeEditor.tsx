import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import { updateCodeValue } from "@/redux/slices/compilerSlice";

export default function CodeEditor() {
  const CurrentLanguage = useSelector(
    (state: Rootstate) => state.compilerSlice.CurrentLanguage
  );

  const fullCode = useSelector(
    (state: Rootstate) => state.compilerSlice.fullcode
  );

  const dispatch = useDispatch();

  const onChange = React.useCallback((value: string) => {
    // console.log("val:", typeof val);
    // setValue(val);
    dispatch(updateCodeValue(value));
  }, []);
  return (
    <CodeMirror
      value={fullCode[CurrentLanguage]}
      height="calc(100vh )"
      className="code-editor"
      extensions={[loadLanguage(CurrentLanguage)!]}
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
