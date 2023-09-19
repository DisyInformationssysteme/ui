import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';

import { ButtonIcon, StackHorizontal, StackVertical, Tag } from '@talend/design-system';

import I18N_DOMAIN_COMPONENTS from '../../constants';
import { SampleArray } from '../CommonDataViewer.types';
import { DataModelDivider } from '../DataModel/DataModelDivider.component';
import { TreeManagerContext } from '../TreeManagerContext';
import { RecordRow } from './RecordRow.component';

import theme from './Records.module.scss';

export type RecordArrayProps = {
	array: SampleArray;
	path: string[];
};

export function RecordArray({ array, path }: RecordArrayProps) {
	const { t } = useTranslation(I18N_DOMAIN_COMPONENTS);
	const { toggleRecordPath, isRecordPathOpened } = useContext(TreeManagerContext);
	const fieldPath = [...path, array.name];
	const isCurrentPathExpanded = isRecordPathOpened(fieldPath);

	return (
		<div className={classNames(theme['record-item'])}>
			<StackVertical gap={0} noGrow>
				<StackHorizontal noGrow gap="XS" align="center">
					<DataModelDivider path={path} />
					<ButtonIcon
						size="XS"
						icon={isCurrentPathExpanded ? 'chevron-down' : 'chevron-right'}
						onClick={() => toggleRecordPath(fieldPath)}
					>
						{isCurrentPathExpanded
							? t('MODEL_VIEWER_COLLAPSE_NODE', 'Collapse')
							: t('MODEL_VIEWER_EXPAND_NODE', 'Expand')}
					</ButtonIcon>
					{array.name}
					<Tag>{array.items.length}</Tag>
				</StackHorizontal>
				{isCurrentPathExpanded &&
					array.items.map((item, index) => (
						<RecordRow key={index} row={item} index={index} path={fieldPath} />
					))}
			</StackVertical>
		</div>
	);
}
