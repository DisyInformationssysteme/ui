export const displayModeSchema = {
	jsonSchema: {
		type: 'object',
		title: 'Comment',
		properties: {
			arrayOfObjects: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						string: {
							type: 'string',
						},
						number: {
							type: 'number',
						},
					},
					required: ['string', 'number'],
				},
			},
			root: {
				type: 'object',
				properties: {
					string: {
						type: 'string',
					},
					number: {
						type: 'number',
					},
					textarea: {
						type: 'string',
					},
					checkbox: {
						type: 'boolean',
					},
					multicheckbox: {
						type: 'array',
						items: {
							type: 'string',
							enum: ['foo', 'bar', 'fuzz', 'qux'],
						},
					},
					code: {
						type: 'string',
					},
					datalist: {
						type: 'string',
						enum: ['Apple', 'Pine[apple]', 'Banana', 'Cher[ry', 'Lemo}n', 'Grapefruit'],
					},
					date: {
						type: 'string',
					},
					file: {
						type: 'string',
					},
					multiSelectTag: {
						type: 'array',
						items: {
							type: 'string',
							enum: ['Apple'],
						},
					},
					radios: {
						type: 'string',
						enum: ['foo', 'bar', 'fuzz', 'qux'],
					},
					toggle: {
						type: 'boolean',
					},
					select: {
						type: 'string',
						enum: ['foo', 'bar', 'fuzz', 'qux'],
					},
					selectmulti: {
						type: 'array',
						items: {
							type: 'string',
							enum: ['foo', 'bar', 'fuzz', 'qux'],
						},
						uniqueItems: true,
					},
				},
			},
		},
	},
	uiSchema: [
		{
			key: 'arrayOfObjects',
			title: 'Array of objects',
			itemTitle: 'Array element',
			items: [
				{
					key: 'arrayOfObjects[].string',
					title: 'string',
				},
				{
					key: 'arrayOfObjects[].number',
					title: 'number',
				},
			],
		},
		{
			key: 'root.string',
			title: 'string',
		},
		{
			key: 'root.number',
			title: 'number',
		},
		{
			key: 'root.textarea',
			widget: 'textarea',
			title: 'textarea',
			rows: 5,
		},
		{
			key: 'root.checkbox',
			title: 'checkbox',
		},
		{
			key: 'root.multicheckbox',
			title: 'multicheckbox',
		},
		{
			key: 'root.code',
			widget: 'code',
			title: 'code',
			options: {
				language: 'javascript',
				height: '100px',
			},
		},
		{
			key: 'root.datalist',
			restricted: true,
			title: 'datalist',
			widget: 'datalist',
		},
		{
			key: 'root.date',
			title: 'date',
			widget: 'date',
			options: {
				dateFormat: 'DD/MM/YYYY',
			},
		},
		{
			key: 'root.file',
			title: 'file',
			widget: 'file',
		},
		{
			key: 'root.multiSelectTag',
			title: 'multiSelectTag',
			widget: 'multiSelectTag',
			titleMap: [
				{
					name: 'Apple12',
					value: 'Apple',
				},
			],
		},
		{
			key: 'root.toggle',
			title: 'toggle',
			widget: 'toggle',
		},
		{
			key: 'root.radios',
			title: 'radios',
			widget: 'radios',
		},
		{
			key: 'root.select',
			title: 'select',
		},
		{
			key: 'root.selectmulti',
			title: 'Multiple choices list',
			widget: 'select',
		},
		{
			widget: 'button',
			bsStyle: 'primary',
			label: 'I am a button',
			type: 'button',
		},
	],
	properties: {
		arrayOfObjects: [{ string: 'string', number: 3 }],
		root: {
			string: 'I am a string',
			number: 2,
			textarea: `I am a multiline text.
            proof !`,
			checkbox: true,
			multicheckbox: ['foo', 'bar'],
			code: 'console.log("Hello World")',
			datalist: 'Apple',
			date: '02/06/2018',
			// file: ?
			multiSelectTag: ['Apple'],
			radios: 'foo',
			toggle: true,
			select: 'foo',
			selectmulti: ['foo', 'bar'],
		},
	},
};
