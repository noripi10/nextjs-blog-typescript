import { client } from '../../libs/client';
import Image from 'next/image';

export default function BlogId({ blog }) {
	return (
		<main>
			<Image
				src={blog.mainVisual.url}
				alt="main blog image"
				objectFit="cover"
				width={650}
				height={450}
			/>
			<h1>{blog.title}</h1>
			<p>{blog.category.name}</p>
			<p>{blog.publishedAt}</p>
			<div
				dangerouslySetInnerHTML={{
					__html: `${blog.body}`,
				}}
			/>
		</main>
	);
}

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: 'techblog' });

	const paths = data.contents.map((content) => `/blog/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({ endpoint: 'techblog', contentId: id });

	return {
		props: {
			blog: data,
		},
	};
};
