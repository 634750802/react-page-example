import Editor, { Value } from '@react-page/editor';
import slate from '@react-page/plugins-slate';

import '@react-page/editor/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import { useState } from 'react';

const cellPlugins = [
  slate(),
];

export default function Home () {
  const [value, setValue] = useState<Value | null>(null);
  return (
    <Editor cellPlugins={cellPlugins} value={value} onChange={setValue}>
    </Editor>
  );
}
