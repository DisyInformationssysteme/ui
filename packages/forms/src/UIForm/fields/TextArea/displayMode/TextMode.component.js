import PropTypes from 'prop-types';
import { TextMode as FieldTemplate } from '../../FieldTemplate';

export default function TextMode({ id, schema, value }) {
	const { rows = 5, title, labelProps } = schema;

	return (
		<FieldTemplate id={id} label={title} labelProps={labelProps}>
			<pre style={{ height: `${rows * 2}rem`, fontSize: 'inherit' }}>{value}</pre>
		</FieldTemplate>
	);
}

if (process.env.NODE_ENV !== 'production') {
	TextMode.propTypes = {
		id: PropTypes.string,
		schema: PropTypes.shape({
			rows: PropTypes.number,
			title: PropTypes.string,
			labelProps: PropTypes.object,
		}),
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};
}

TextMode.defaultProps = {
	schema: {},
	value: '',
};
