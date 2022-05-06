/* eslint-disable no-console */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import DataGrid from '.';
import DynamicDataGrid from '../../stories/DynamicDataGrid.component';
import FasterDatagridComponent from '../../stories/FasterDatagrid.component';
import sample from '../../stories/sample.json';
import sample2 from '../../stories/sample2.json';
import sample3 from '../../stories/sample3.json';
import sampleWithoutQuality from '../../stories/sampleWithoutQuality.json';

// eslint-disable-next-line no-irregular-whitespace
sample.data[0].value.field0.value = `﻿﻿﻿﻿﻿﻿﻿  loreum lo
psum	 	 `;

sample.data[1].value.field0.value = `loreum lo
very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value`;

sample.data[2].value.field0.value =
	'very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong value';

sample.data[3].value.field0.value = 'multiple       spaces';

export default {
	title: 'Datagrid/Component',
	decorators: [
		story => <div style={{ height: '90vh', backgroundColor: 'lightGrey' }}>{story()}</div>,
	],
};

export const Default = () => (
	<DataGrid
		data={sample}
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
		enableColResize={false}
	/>
);
Default.parameters = {
	chromatic: { disableSnapshot: false },
};

export const CustomRenderer = () => (
	<DataGrid
		data={sample}
		cellRenderer={props => <div>{`${props.value.value}`}&#128570;</div>}
		headerRenderer={props => <div>{props.displayName} &#128126;</div>}
		pinHeaderRenderer={() => <div>&#129302;</div>}
	/>
);

export const OnlyColumnName = () => (
	<DataGrid
		headerHeight={45}
		columnsConf={{ hideSubType: true }}
		data={sampleWithoutQuality}
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
		enableColResize={false}
	/>
);

export const NoQuality = () => (
	<DataGrid
		headerHeight={55}
		data={sampleWithoutQuality}
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
		enableColResize={false}
	/>
);

export const ColumnsResizables = () => (
	<DataGrid
		data={sample}
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
	/>
);

export const StartIndexTo1 = () => (
	<DataGrid
		data={sample}
		startIndex={1}
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
	/>
);

export const NoRowSpecificMessage = () => (
	<DataGrid
		data={[]}
		overlayNoRowsTemplate="Custom message"
		onFocusedCell={action('onFocusedCell')}
		onFocusedColumn={action('onFocusedColumn')}
		onVerticalScroll={event => console.log(event)}
		rowSelection="multiple"
	/>
);

export const LoadingDatagrid = () => <DataGrid data={sample} loading />;

export const LoadingCells = () => <DataGrid data={sample3} />;

export const DynamicChangeSchema = () => {
	class WithLayout extends React.Component {
		constructor() {
			super();
			this.changeState = this.changeState.bind(this);
			this.state = { firstSample: true };
		}

		changeState() {
			this.setState(prevState => ({
				firstSample: !prevState.firstSample,
			}));
		}

		render() {
			const currentSample = this.state.firstSample ? sample : sample2;
			return (
				<div>
					<input type="button" value="changestatus" onClick={this.changeState} />
					Number of fields : {currentSample.schema.fields.length}
					<div style={{ height: '200px' }}>
						<DataGrid
							data={currentSample}
							onFocusedCell={action('onFocusedCell')}
							onFocusedColumn={action('onFocusedColumn')}
							onVerticalScroll={event => console.log(event)}
							rowSelection="multiple"
						/>
					</div>
				</div>
			);
		}
	}
	return <WithLayout />;
};

export const DynamicChangeData = () => <DynamicDataGrid />;

export const FasterDatagrid = () => <FasterDatagridComponent />;

export const ControlledFocusedColumn = () => {
	const [focusedColumnId, setFocusedColumnId] = useState('data.field2');
	const [locked, setLocked] = useState(false);
	return (
		<div style={{ height: 200, width: 800 }}>
			<input
				type="button"
				value="Select 3rd column"
				onClick={() => setFocusedColumnId('data.field2')}
			/>
			<input
				type="button"
				value="Select last column"
				onClick={() => setFocusedColumnId('data.field9')}
			/>
			<input type="button" value="Unselect" onClick={() => setFocusedColumnId(null)} />
			<input type="button" value={locked ? 'Unlock' : 'Lock'} onClick={() => setLocked(!locked)} />
			<DataGrid
				data={sample}
				focusedColumnId={focusedColumnId}
				onFocusedCell={cell => {
					if (!locked) {
						setFocusedColumnId(cell.column.colId);
					}

					action('onFocusedCell')(cell);
				}}
				onFocusedColumn={col => {
					if (!locked) {
						setFocusedColumnId(col.colId);
					}
					action('onFocusedColumn')(col);
				}}
				onVerticalScroll={event => console.log(event)}
				rowSelection="multiple"
			/>
		</div>
	);
};
