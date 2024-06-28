import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    return (
        <div className="relative flex flex-col">
            <textarea
                value={code}
                onChange={(event) => setCode(event.target.value)}
                spellCheck="false"
                className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-black z-10 border-none resize-none font-mono text-sm leading-6 p-2.5 focus:outline-none"
            />
            <Highlight
                theme={themes.github}
                Prism={Prism}
                code={code}
                language="javascript"
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`${className} m-0 p-2.5 overflow-auto`} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })} key={i}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} key={key} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
};

export default CodeEditor;
