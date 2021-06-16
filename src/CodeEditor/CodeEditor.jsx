import React, { useEffect, useState } from 'react';
import './CodeEditor.css';
import Split from 'react-split';
import CodeMirror from 'react-codemirror';

function CodeEditor() {
  const [html, setHTML] = useState('<!--- html here --->');
  const [css, setCss] = useState('/* css here */ ');
  const [js, setJs] = useState(' // js here ');

  useEffect(() => {
    setHTML(window.localStorage.getItem('html'));
    setCss(window.localStorage.getItem('css'));
    setJs(window.localStorage.getItem('js'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('html', html);
    window.localStorage.setItem('css', css);
    window.localStorage.setItem('js', js);
    document.body.onkeyup = function () {
      var code = document.getElementById('code').contentWindow.document;
      code.open();
      code.writeln(html + '<style>' + css + '</style>' + '<script>' + js + '</script>');
      code.close();
    };
  }, [html, css, js]);

  return (
    <>
      <div className="row">
        <Split className="split">
          <div className="html">
            <nav>HTML</nav>
            <textarea
              id="html"
              placeholder="HTML"
              value={html}
              onChange={(e) => setHTML(e.target.value)}
            />
          </div>
          <div className="css">
            <nav>CSS</nav>
            <textarea
              id="css"
              placeholder="CSS"
              value={css}
              onChange={(e) => setCss(e.target.value)}
            />
          </div>

          <div className="js">
            <nav>JS</nav>
            <textarea
              id="js"
              placeholder="JavaScript"
              value={js}
              onChange={(e) => setJs(e.target.value)}
            />
          </div>
        </Split>
      </div>

      <div className="frame">
        <iframe id="code"></iframe>
      </div>
    </>
  );
}

export default CodeEditor;
