import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getI18nInstance } from '../translate';
import theme from './AboutDialog.module.scss';
import { SkeletonParagraph } from '@talend/design-system';

const i18n = getI18nInstance();

export const getColumnHeaders = () => ({
	name: { key: 'name', label: i18n.t('tui-components:SERVICE', { defaultValue: 'Service' }) },
	build: { key: 'build', label: i18n.t('tui-components:BUILD_ID', { defaultValue: 'Build ID' }) },
	version: { key: 'version', label: i18n.t('tui-components:VERSION', { defaultValue: 'Version' }) },
});

export function Text({ text = '', loading = false }) {
	return loading ? <SkeletonParagraph /> : text;
}

export function AboutDialogTable({
	definition = Object.values(getColumnHeaders()),
	services = [],
	loading = false,
}) {
	if (!services || !services.length) {
		return null;
	}

	return (
		<table className={classNames(theme['about-versions'], 'about-versions', 'table table-striped')}>
			<thead>
				<tr>
					{definition.map(attribute => (
						<th key={attribute.key}>{attribute.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{(loading
					? [{ name: 'loading-first' }, { name: 'loading-second' }, { name: 'loading-third' }]
					: services
				).map(service => (
					<tr key={service.name}>
						{definition.map(attribute => (
							<td key={attribute.key}>
								<Text loading={loading} text={service[attribute.key]} />
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

Text.propTypes = {
	text: PropTypes.string,
	loading: PropTypes.bool,
};

AboutDialogTable.propTypes = {
	services: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			version: PropTypes.string,
			build: PropTypes.string,
		}),
	),
	definition: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string,
			label: PropTypes.string,
		}),
	),
	loading: PropTypes.bool,
};
