import React, { useEffect } from "react";
import fs from 'fs'; // File system 
import path from 'path';
import matter from 'gray-matter'; // YML parser
import Head from 'next/head';
import marked from 'marked'; // Markdown to html
import Style from '../../../styles/Knowledge.module.css'
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import vim from 'highlight.js/lib/languages/vim';
import python from 'highlight.js/lib/languages/python';
import cmake from 'highlight.js/lib/languages/cmake';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import arduino from 'highlight.js/lib/languages/arduino';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import yaml from 'highlight.js/lib/languages/yaml';
import latex from 'highlight.js/lib/languages/latex';
import markdown from 'highlight.js/lib/languages/markdown';
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('vim', vim);
hljs.registerLanguage('python', python);
hljs.registerLanguage('cmake', cmake);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('arduino', arduino);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('latex', latex);
hljs.registerLanguage('markdown', markdown);

const ProgrammingPost = ({htmlString, data}) => {
	useEffect(() => {
		hljs.initHighlighting();
	}, []);
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.3.2/build/styles/default.min.css"></link>
			</Head>
			<div className={Style.page}>
				<div dangerouslySetInnerHTML={{__html: htmlString}}/>
			</div>	
		</div>
	)
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync("knowledge/programming");
	const markdownFiles = files.filter(file => path.extname(file) === ".md");
	const paths = markdownFiles.map(fileName => ({
		params: {
			programming: fileName.replace(".md", "")
		}
	}));

	return {
		paths,
		fallback: false // Render at build time
	};
};

export const getStaticProps = async ({params: {programming}}) => {
	const markdown = fs.readFileSync(path.join('knowledge/programming', programming + ".md"), 'utf8');
	const parsedMarkdown = matter(markdown);
	const htmlString = marked(parsedMarkdown.content);
	return {
		props: {
			htmlString,
			data: parsedMarkdown.data
		}
	};
};

export default ProgrammingPost;

