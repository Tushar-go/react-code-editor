import React from 'react';
import CodeEditor from './CodeEditor';

const App = () => {
    return (
        <div className="p-5 bg-slate-400 h-screen w-screen">
            <h1 className="text-3xl font-semibold text-center mb-4">Simple Code Editor</h1>
            <CodeEditor />
        </div>
    );
};

export default App;