import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appliedOptions, setAppliedOptions] = useState(defaultArticleState);
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appliedOptions.fontFamilyOption.value,
					'--font-size': appliedOptions.fontSizeOption.value,
					'--font-color': appliedOptions.fontColor.value,
					'--container-width': appliedOptions.contentWidth.value,
					'--bg-color': appliedOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={setAppliedOptions} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
