import theme from '../UIForm.module.scss';

export default function TextModeFormTemplate({ widgetsRenderer, children }) {
	return [
		<dl key="definitions" className={theme['form-content']}>
			{widgetsRenderer()}
		</dl>,
		children,
	];
}
