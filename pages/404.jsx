import Link from 'next/link';
export default function Custom404() {
	return (
		<main className="main">
			<p>ページが見つかりませんでした</p>
			<Link href="/">
				<a>ホームに戻る</a>
			</Link>
		</main>
	);
}
