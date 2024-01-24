import React from "react";
import "./markdown.css";
import "../../App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText: defaultText,
      fullscrEditor: false,
      fullscrPreview: false,
    };
    this.setMarkdownText = this.setMarkdownText.bind(this);
    this.fullscreenEditor = this.fullscreenEditor.bind(this);
    this.fullscreenPreview = this.fullscreenPreview.bind(this);
  }
  setMarkdownText(e) {
    this.setState({
      markdownText: e.target.value,
    });
  }
  fullscreenEditor() {
    if (!this.state.fullscrEditor) {
      this.setState({
        fullscrEditor: true,
      });
    } else if (this.state.fullscrEditor) {
      this.setState({
        fullscrEditor: false,
      });
    }
  }
  fullscreenPreview() {
    if (!this.state.fullscrPreview) {
      this.setState({
        fullscrPreview: true,
      });
    } else if (this.state.fullscrPreview) {
      this.setState({
        fullscrPreview: false,
      });
    }
  }
  render() {
    return (
      <div className="markdown-previewer w-full min-h-screen bg-blue-200 flex flex-col items-center overflow-x-hidden">
        <div
          className="editor mt-4 md:w-[570px] sm:w-[400px] w-[300px]"
          style={{ display: this.state.fullscrPreview ? "none" : "block" }}
        >
          <div className="shadow-xl flex align-center justify-between text-white px-2 pt-1 font-fira editor-title bg-[#581c87] h-8 border-black border-solid border-[1px]">
            Editor
            <FontAwesomeIcon
              className="pt-1  hover:text-purple-600"
              icon={this.state.fullscrEditor ? faMinimize : faMaximize}
              onClick={this.fullscreenEditor}
            />
          </div>
          <div className="textarea">
            <textarea
              className="shadow-xl font-mono w-full px-1 mt-[1px] border-black border-solid border-[1px]"
              style={{
                minHeight: this.state.fullscrEditor ? "700px" : "300px",
              }}
              name="text-editor"
              id="editor"
              value={this.state.markdownText}
              onChange={this.setMarkdownText}
            ></textarea>
          </div>
        </div>
        <div
          className="previewer my-4 md:w-[750px] sm:w-[600px] w-[350px]"
          style={{ display: this.state.fullscrEditor ? "none" : "block" }}
        >
          <div className="shadow-xl flex align-center justify-between text-white px-2 pt-1 mb-[1px] font-fira previewer-title bg-[#581c87] h-8 border-black border-solid border-[1px]">
            Previewer
            <FontAwesomeIcon
              className="pt-1 hover:text-purple-600"
              icon={this.state.fullscrPreview ? faMinimize : faMaximize}
              onClick={this.fullscreenPreview}
            />
          </div>
          <div
            className="shadow-xl markdown prose prose-purple font-fira p-3 bg-white border-black border-solid border-[1px]"
            style={{
              maxWidth: "800px",
              margin: "auto",
              minHeight: this.state.fullscrPreview ? "700px" : "200px",
            }}
            id="preview"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {this.state.markdownText}
            </ReactMarkdown>
          </div>
        </div>
        <a
          href="https://github.com/rvif"
          target="_blank"
          className="footer pt-2"
        >
          created by rvif
        </a>
      </div>
    );
  }
}
export default Markdown;
