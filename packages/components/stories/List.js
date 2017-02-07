import React from 'react';
import { storiesOf, action } from '@kadira/storybook';  // eslint-disable-line import/no-extraneous-dependencies
import Immutable from 'immutable';  // eslint-disable-line import/no-extraneous-dependencies
import talendIcons from 'talend-icons/dist/react';

import { List, IconsProvider } from '../src/index';

const icons = {
	'talend-badge': talendIcons['talend-badge'],
	'talend-caret-down': talendIcons['talend-caret-down'],
	'talend-cross': talendIcons['talend-cross'],
	'talend-expanded': talendIcons['talend-expanded'],
	'talend-file': talendIcons['talend-file'],
	'talend-file-json-o': talendIcons['talend-file-json-o'],
	'talend-file-xls-o': talendIcons['talend-file-xls-o'],
	'talend-folder': talendIcons['talend-folder'],
	'talend-icons': talendIcons['talend-icons'],
	'talend-pencil': talendIcons['talend-pencil'],
	'talend-plus': talendIcons['talend-plus'],
	'talend-plus-circle': talendIcons['talend-plus-circle'],
	'talend-search': talendIcons['talend-search'],
	'talend-star': talendIcons['talend-star'],
	'talend-table': talendIcons['talend-table'],
	'talend-tiles': talendIcons['talend-tiles'],
	'talend-trash': talendIcons['talend-trash'],
};

const selected = [
	{
		id: 2,
		name: 'Foo',
		created: '2016-09-22',
		modified: '2016-09-22',
		author: 'Jean-Pierre DUPONT',
		icon: 'talend-file-json-o',
	}];
const props = {
	id: 'talend',
	displayMode: 'table',
	list: {
		columns: [
			{ key: 'id', label: 'Id' },
			{ key: 'name', label: 'Name' },
			{ key: 'author', label: 'Author' },
			{ key: 'created', label: 'Created' },
			{ key: 'modified', label: 'Modified' },
		],
		items: [
			{
				id: 1,
				name: 'Title with actions',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				actions: [
					{
						label: 'edit',
						icon: 'talend-pencil',
						onClick: action('onEdit'),
					},
					{
						label: 'delete',
						icon: 'talend-trash',
						onClick: action('onDelete'),
					},
					{
						displayMode: 'dropdown',
						label: 'related items',
						icon: 'talend-folder',
						items: [
							{
								label: 'document 1',
								onClick: action('document 1 click'),
							},
							{
								label: 'document 2',
								onClick: action('document 2 click'),
							},
						],
					},
				],
				icon: 'talend-file-xls-o',
				display: 'text',
				className: 'item-0-class',
			},
			{
				id: 2,
				name: 'Title in input mode',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				icon: 'talend-file-json-o',
				display: 'input',
				className: 'item-1-class',
			},
			{
				id: 3,
				name: 'Super long title to trigger overflow on tile rendering',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT with super long name',
				className: 'item-2-class',
			},
			{
				id: 4,
				name: 'Title with long long long long long long long long long long long text',
				created: '2016-09-22',
				modified: '2016-09-22',
				author: 'Jean-Pierre DUPONT',
				actions: [
					{
						label: 'edit',
						icon: 'talend-pencil',
						onClick: action('onEdit'),
					},
					{
						label: 'delete',
						icon: 'talend-trash',
						onClick: action('onDelete'),
					},
					{
						displayMode: 'dropdown',
						label: 'related items',
						icon: 'talend-folder',
						items: [
							{
								label: 'document 1',
								onClick: action('document 1 click'),
							},
							{
								label: 'document 2',
								onClick: action('document 2 click'),
							},
						],
					},
				],
				icon: 'talend-file-xls-o',
				display: 'text',
				className: 'item-3-class',
			},
		],
		titleProps: {
			key: 'name',
			iconKey: 'icon',
			displayModeKey: 'display',
			onClick: action('onClick'),
			onEditCancel: action('onEditCancel'),
			onEditSubmit: action('onEditSubmit'),
		},
		itemProps: {
			classNameKey: 'className',
			onSelect: action('onSelect'),
			onToggle: action('onToggle'),
			onToggleAll: action('onToggleAll'),
		},
	},
	toolbar: {
		actionBar: {
			actions: {
				left: [
					{
						id: 'add',
						label: 'Add Folder',
						bsStyle: 'primary',
						icon: 'talend-plus-circle',
						onClick: action('add.onClick'),
					},
					{
						displayMode: 'splitDropdown',
						label: 'Add File',
						icon: 'talend-folder',
						onClick: action('onAdd'),
						items: [
							{
								label: 'From Local',
								onClick: action('From Local click'),
							},
							{
								label: 'From Remote',
								onClick: action('From Remote click'),
							},
						],
						emptyDropdownLabel: 'No option',
					},
				],
			},
		},
		display: {
			onChange: action('display.onChange'),
		},
		sort: {
			field: 'name',
			onChange: action('sort.onChange'),
			options: [
				{ id: 'id', name: 'Id' },
				{ id: 'name', name: 'Name' },
			],
		},
		pagination: {
			itemsPerPage: 5,
			totalResults: 10,
			onChange: action('pagination.onChange'),
		},
	},
};
const columnsForItems = [
	{ key: 'icon', label: '', type: 'icon' },
	{ key: 'name', label: 'Name', type: 'title' },
	{ key: 'favorite', label: 'Favorite', type: 'action' },
	{ key: 'certify', label: 'Certify', type: 'action' },
	{ key: 'id', label: 'ID' },
	{ key: 'author', label: 'Author' },
	{ key: 'created', label: 'Created' },
	{ key: 'modified', label: 'Modified' },
];
const actionsForItems = [
	{
		key: 'favorite',
		label: 'Favorite',
		icon: 'talend-star',
		className: 'favorite',
		onClick: action('onFavoriteActionClick'),
	}, {
		key: 'certify',
		label: 'Certify',
		icon: 'talend-badge',
		className: 'certify',
		onClick: action('onCertifyActionClick'),
	}, {
		key: 'edit',
		label: 'Edit',
		icon: 'talend-pencil',
		onClick: action('onEdit'),
	}, {
		key: 'delete',
		label: 'Delete',
		icon: 'talend-trash',
		onClick: action('onDelete'),
	},
];
const itemsForItems = [
	{
		id: 1,
		name: 'Title with actions',
		author: 'Jean-Pierre DUPONT',
		created: '2016-09-22',
		modified: '2016-09-22',
		icon: 'talend-file-xls-o',
		display: 'button',
		className: 'item-0-class',
	},
	{
		id: 2,
		name: 'Title in input mode',
		author: 'Jean-Pierre DUPONT',
		created: '2016-09-22',
		modified: '2016-09-22',
		icon: 'talend-file-json-o',
		favorite: false,
		certify: true,
		display: 'input',
		className: 'item-1-class',
	},
	{
		id: 3,
		name: 'Super long title to trigger overflow on tile rendering',
		author: 'Jean-Pierre DUPONT with super long name',
		created: '2016-09-22',
		modified: '2016-09-22',
		favorite: true,
		certify: false,
	},
];
const itemPropsForItems = {
	classNameKey: 'className',
	onSelect: action('onItemSelect'),
	onOpen: action('onItemOpen'),
	onToggleAll: action('onToggleAll'),
	isSelected: item => selected.find(next => next.id === item.id),
	onCancel: action('onTitleEditCancel'),
	onChange: action('onTitleChange'),
	onSubmit: action('onTitleEditSubmit'),
};
const sort = {
	field: 'name',
	isDescending: false,
	onChange: action('sort.onChange'),
};
const getPropsFor = displayMode => ({
	id: props.id,
	displayMode,
	list: {
		columns: columnsForItems,
		actions: actionsForItems,
		items: itemsForItems,
		itemProps: itemPropsForItems,
	},
	toolbar: props.toolbar,
	useContent: true,
});

storiesOf('List', module)
	.add('table (default)', () => (
		<div className="display-table">
			<h1>List</h1>
			<p>Display a list by defining your.</p>
			<IconsProvider defaultIcons={icons} />
			<div className="list-container">
				<List {...props} />
			</div>
		</div>
	))
	.add('large', () => {
		const eprops = Object.assign({}, props);
		eprops.displayMode = 'large';
		return (
			<div>
				<h1>List</h1>
				<p>Display the list in large mode</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...eprops} />
				</div>
			</div>
		);
	})
	.add('tile', () => {
		const tprops = Object.assign({}, props);
		tprops.displayMode = 'tile';
		return (
			<div>
				<h1>List</h1>
				<p>Display the list in tile mode</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...tprops} />
				</div>
			</div>
		);
	})
	.add('table with column actions', () => {
		const columnActionsProps = Immutable.fromJS(props).toJS();
		columnActionsProps.list.columns.splice(2, 0, { key: 'columnActions', label: '' });// label should be empty as the cell will appear only when item is hovered
		columnActionsProps.list.items = columnActionsProps.list.items.map(item => ({
			columnActions: [
				{
					label: 'favorite',
					icon: 'talend-star',
					className: 'favorite',
					onClick: action('onFavorite'),
				}, {
					label: 'certify',
					icon: 'talend-badge',
					className: 'certify',
					onClick: action('onCertify'),
				},
			],
			...item,
		}));
		return (<div>
			<h1>List</h1>
			<p>Display a list with columns containing actions.</p>
			<IconsProvider defaultIcons={icons} />
			<div className="list-container">
				<List {...columnActionsProps} />
			</div>
		</div>);
	})
	.add('table with selected items', () => {
		const selectedItemsProps = Immutable.fromJS(props).toJS();
		selectedItemsProps.toolbar.actionBar.selected = 1;
		selectedItemsProps.toolbar.actionBar.multiSelectActions = {
			left: [
				{
					id: 'delete',
					label: 'Delete selection',
					icon: 'talend-trash',
					onClick: action('delete'),
				},
			],
		};
		selectedItemsProps.list.itemProps.isSelected = item => selected.find(next => next.id === item.id);
		return (
			<div>
				<h1>List</h1>
				<p>Display a list with selected items.</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...selectedItemsProps} />
				</div>
			</div>
		);
	})
	.add('table with custom selected class', () => {
		const selectedClassProps = Immutable.fromJS(props).toJS();
		selectedClassProps.list.itemProps.selectedClass = 'customStyle';
		selectedClassProps.list.itemProps.isSelected = item => selected.find(next => next.id === item.id);
		return (
			<div>
				<h1>List</h1>
				<p>Display a list with custom selected class.</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...selectedClassProps} />
				</div>
			</div>
		);
	})
	.add('table without toolbar', () => {
		const tprops = {
			...props,
			toolbar: undefined,
		};
		return (
			<div>
				<h1>List</h1>
				<p>Display a list without toolbar</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...tprops} />
				</div>
			</div>
		);
	})
	.add('Table with sort header click', () => {
		const tprops = Immutable.fromJS(props).toJS();
		tprops.toolbar = undefined;
		tprops.list.sort = sort;
		return (
			<div>
				<h1>List</h1>
				<p>Table with sort header click</p>
				<IconsProvider defaultIcons={icons} />
				<div className="list-container">
					<List {...tprops} />
				</div>
			</div>
		);
	})
	.add('table of Content', () => (
		<div>
			<h1>List</h1>
			<h2>Definition</h2>
			<p>Display a table from Items component.</p>
			<h2>Examples</h2>
			<IconsProvider defaultIcons={icons} />
			<div className="list-container">
				<List {...getPropsFor('table')} />
			</div>
		</div>
	))
	.add('large of Content', () => (
		<div>
			<h1>List</h1>
			<p>Display the list in large mode</p>
			<IconsProvider defaultIcons={icons} />
			<div className="list-container">
				<List {...getPropsFor('large')} />
			</div>
		</div>
	))
	.add('tile of Content', () => (
		<div>
			<h1>List</h1>
			<p>Display the list in tile mode</p>
			<IconsProvider defaultIcons={icons} />
			<div className="list-container">
				<List {...getPropsFor('tile')} />
			</div>
		</div>
	));
