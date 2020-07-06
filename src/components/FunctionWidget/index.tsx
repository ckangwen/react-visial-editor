import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';

export default function FunctionWidget() {
  // const [visible, setVisible] = useState(false)
  // const handleOk = () => {}
  // const handleCancel = () => {}

  useEffect(() => {
    const ele = document.getElementById("function-widget-container")
    if (ele) {
      monaco.editor.create(ele, {
        value: "console.log(123)",
        language: "javascript"
      });
    }
  }, [])
  return (
    <div id="function-widget-container" style={{ width: '100%', height: '200px' }}></div>
  )
}