import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import type { OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';

import styles from './ArticleParamsForm.module.scss';
import { Separator } from 'src/ui/separator';

import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	onSubmit: (selected: typeof defaultArticleState) => void;
};

export const ArticleParamsForm = ({ onSubmit }: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedFont, setSelectedFont] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [selectedFontСolor, setSelectedFontСolor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [selectedСontentWidth, setSelectedСontentWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen((isOpen) => !isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={selectedFont}
						options={fontFamilyOptions}
						onChange={setSelectedFont}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size changing group'
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
					/>
					<Select
						title='цвет шрифта'
						selected={selectedFontСolor}
						options={fontColors}
						onChange={setSelectedFontСolor}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={selectedBackgroundColor}
						options={backgroundColors}
						onChange={setSelectedBackgroundColor}
					/>
					<Select
						title='ширина контента'
						selected={selectedСontentWidth}
						options={contentWidthArr}
						onChange={setSelectedСontentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={(e) => {
								e.preventDefault();
								setSelectedFont(defaultArticleState.fontFamilyOption);
								setSelectedFontSize(defaultArticleState.fontSizeOption);
								setSelectedFontСolor(defaultArticleState.fontColor);
								setSelectedBackgroundColor(defaultArticleState.backgroundColor);
								setSelectedСontentWidth(defaultArticleState.contentWidth);
								onSubmit(defaultArticleState);
							}}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={(e) => {
								e.preventDefault();
								onSubmit({
									fontFamilyOption: selectedFont,
									fontSizeOption: selectedFontSize,
									fontColor: selectedFontСolor,
									backgroundColor: selectedBackgroundColor,
									contentWidth: selectedСontentWidth,
								});
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
