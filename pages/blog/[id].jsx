import { client } from '../../libs/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/global.module.scss';

export default function BlogId({ blog }) {
	const router = useRouter();

	return (
		<main className={styles.main}>
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
			<button onClick={() => router.push('/')}>戻る</button>
		</main>
	);
}

export const getStaticPaths = async () => {
	const data = await client.get({ endpoint: 'techblog' });

	const paths = data.contents.map((content) => `/blog/${content.id}`);
	return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
	const data = await client.get({
		endpoint: 'techblog',
		contentId: context.params.id,
	});

	return {
		props: {
			blog: data,
		},
	};
};
