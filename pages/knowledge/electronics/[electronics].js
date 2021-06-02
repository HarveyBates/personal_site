import React from "react";
import fs from 'fs'; // File system 
import path from 'path';
import matter from 'gray-matter'; // YML parser
import Head from 'next/head';
import marked from 'marked'; // Markdown to html

const ElectronicsPost = ({htmlString, data}) => {
	return (
		<div>
			<Head>
				<title>{data.title}</title>
			</Head>
			<div>
				<div dangerouslySetInnerHTML={{__html: htmlString}}/>
			</div>	
		</div>
	)
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync("knowledge/electronics");
	const markdownFiles = files.filter(file => path.extname(file) === ".md");
	const paths = markdownFiles.map(fileName => ({
		params: {
			electronics: fileName.replace(".md", "")
		}
	}));

	return {
		paths,
		fallback: false // Render at build time
	};
};

export const getStaticProps = async ({params: {electronics}}) => {
	const markdown = fs.readFileSync(path.join('knowledge/electronics', knowledge + ".md"), 'utf8');
	const parsedMarkdown = matter(markdown);
	const htmlString = marked(parsedMarkdown.content);
	return {
		props: {
			htmlString,
			data: parsedMarkdown.data
		}
	};
};

export default ElectronicsPost;

