import { useState, CSSProperties } from 'react';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import { Article } from 'src/components/article/Article';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from './App.module.scss';

export const App = () => {
	const [appliedOptions, setAppliedOptions] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': appliedOptions.fontFamilyOption.value,
					'--font-size': appliedOptions.fontSizeOption.value,
					'--font-color': appliedOptions.fontColor.value,
					'--container-width': appliedOptions.contentWidth.value,
					'--bg-color': appliedOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm applyOptions={setAppliedOptions} />
			<Article />
		</main>
	);
};
