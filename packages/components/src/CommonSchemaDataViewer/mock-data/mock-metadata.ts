import { FieldMetadata } from '../CommonDataViewer.types';

export const mockMetadata: FieldMetadata[] = [
	{
		path: 'employees.name.firstName',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fbb142b02a698752eedd',
				name: 'FIRST_NAME',
				score: 100.0,
			},
			{
				id: '5836fbb942b02a6987534b81',
				name: 'LAST_NAME',
				score: 66.67,
			},
		],
	},
	{
		path: 'vehicles.type',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fb7642b02a69874f77e3',
				name: 'AIRPORT_CODE',
				score: 50.0,
			},
		],
	},
	{
		path: 'vehicles.insurance.company',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [],
	},
	{
		path: 'vehicles.maintenance.date',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'DATE',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [],
	},
	{
		path: 'country.code',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fbb042b02a698752e895',
				name: 'COUNTRY_CODE_ISO2',
				score: 100.0,
			},
			{
				id: '5836fc0042b02a698756d903',
				name: 'LANGUAGE_CODE_ISO2',
				score: 100.0,
			},
			{
				id: '5836fbb042b02a698752e66b',
				name: 'CIVILITY',
				score: 50.0,
			},
			{
				id: '4e508870c04b091057ad70a7',
				name: 'CHRISTIAN_RELIGIOUS_TITLE',
				score: 50.0,
			},
			{
				id: '583edc44ec06957a34fa6474',
				name: 'US_STATE_CODE',
				score: 50.0,
			},
			{
				id: '591191f640161c655fd8b682',
				name: 'NA_STATE_CODE',
				score: 50.0,
			},
			{
				id: '4e508870c04b091057ad70aa',
				name: 'RELIGIOUS_TITLE',
				score: 50.0,
			},
			{
				id: '4e508870c04b091057ad70ab',
				name: 'TITLE',
				score: 50.0,
			},
		],
	},
	{
		path: 'employees.name.lastName',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fbb942b02a6987534b81',
				name: 'LAST_NAME',
				score: 100.0,
			},
			{
				id: '5836fbc542b02a698753d671',
				name: 'US_COUNTY',
				score: 66.67,
			},
			{
				id: '5836fb7042b02a69874f3b0b',
				name: 'AIRPORT',
				score: 33.33,
			},
			{
				id: '5836fb7642b02a69874f77e3',
				name: 'AIRPORT_CODE',
				score: 33.33,
			},
		],
	},
	{
		path: 'employees.country',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '5836fbb042b02a698752e6a1',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fbb042b02a698752e6a1',
				name: 'COUNTRY',
				score: 66.67,
			},
			{
				id: '5836fbb042b02a698752e895',
				name: 'COUNTRY_CODE_ISO2',
				score: 33.33,
			},
			{
				id: '5836fbb142b02a698752eedd',
				name: 'FIRST_NAME',
				score: 33.33,
			},
			{
				id: '5836fbb942b02a6987534b81',
				name: 'LAST_NAME',
				score: 33.33,
			},
			{
				id: '5836fc0042b02a698756d903',
				name: 'LANGUAGE_CODE_ISO2',
				score: 33.33,
			},
		],
	},
	{
		path: 'vehicles.model',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [],
	},
	{
		path: 'vehicles.insurance.policy_num',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'INTEGER',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '583edc44ec06957a34fa643c',
				name: 'FR_POSTAL_CODE',
				score: 100.0,
			},
			{
				id: '583edc44ec06957a34fa645e',
				name: 'FR_CODE_COMMUNE_INSEE',
				score: 100.0,
			},
			{
				id: '583edc44ec06957a34fa6488',
				name: 'US_POSTAL_CODE',
				score: 100.0,
			},
			{
				id: '583edc44ec06957a34fa647c',
				name: 'DE_POSTAL_CODE',
				score: 100.0,
			},
		],
	},
	{
		path: 'vehicles.maintenance.desc',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [],
	},
	{
		path: 'country.label',
		description: '',
		type: {
			originalType: 'string',
			status: 'NOT_FORCED',
			primitiveType: 'STRING',
			semanticType: '5836fbb042b02a698752e6a1',
		},
		dqRules: [],
		qualities: {
			aggregated: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			type: {
				valid: 0,
				invalid: 0,
				empty: 0,
				total: 0,
			},
			dqRules: [],
		},
		matchings: [
			{
				id: '5836fbb042b02a698752e6a1',
				name: 'COUNTRY',
				score: 100.0,
			},
			{
				id: '5836fbb942b02a6987534b81',
				name: 'LAST_NAME',
				score: 100.0,
			},
			{
				id: '5836fbb142b02a698752eedd',
				name: 'FIRST_NAME',
				score: 50.0,
			},
		],
	},
];
