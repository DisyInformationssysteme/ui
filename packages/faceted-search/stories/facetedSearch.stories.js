import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import cloneDeep from 'lodash/cloneDeep';
import set from 'lodash/set';
import times from 'lodash/times';

import { Badge } from '@talend/react-components';

import FacetedSearch from '../src';
import { BadgesGenerator } from '../src/components/BadgesGenerator';
import { BadgeFacetedProvider } from '../src/components/context/badgeFaceted.context';
import { createBadgesDict, getBadgesFromDict } from '../src/dictionary/badge.dictionary';
import {
	badgeAll,
	badgeAuthor,
	badgeConnectionName,
	badgeConnectionType,
	badgeConnectionTypeAllSelector,
	badgeCreationDate,
	badgeEmpty,
	badgeEmptyLabel,
	badgeEnumsAsCustomAttribute,
	badgeEnumWithLotOfValues,
	badgeInvalid,
	badgeMenu,
	badgeName,
	badgePeriod,
	badgePrice,
	badgePriceAsCustomAttribute,
	badgeTags,
	badgeTextAsCategory,
	badgeTextAsCustomAttribute,
	badgeValid,
	badgeWithVeryLongName,
} from './badgesDefinitions';

const badgesDefinitions = [
	badgeMenu,
	badgeAll,
	badgeName,
	badgeConnectionName,
	badgeAuthor,
	badgeConnectionType,
	badgeTags,
	badgePrice,
	badgeValid,
	badgeEmpty,
	badgeInvalid,
	badgeCreationDate,
	badgePeriod,
];

const callbacks = {
	getTags: () =>
		new Promise(resolve =>
			setTimeout(resolve, 2000, [
				'clean',
				'production',
				'last chunk',
				'salesforce',
				'outdated',
				'extracted',
				'security',
				'in processing',
				'deep learning',
				'sql',
				'cluster',
				'visualization',
				'analytics',
				'users',
				'warehouse',
				'api',
			]),
		),
};

const badgesFaceted = {
	badges: [
		{
			properties: {
				attribute: 'connection.type',
				initialOperatorOpened: false,
				initialValueOpened: false,
				label: 'Connection Type',
				operator: {
					label: 'In',
					name: 'in',
				},
				operators: [
					{
						label: 'In',
						name: 'in',
					},
				],
				type: 'checkbox',
				value: [
					{
						id: 'amazon_s3',
						label: 'Amazon S3',
						checked: true,
					},
					{
						id: 'hdfs',
						label: 'HDFS',
						checked: true,
					},
					{
						id: 'localcon',
						label: 'Local connection',
						checked: true,
					},
				],
			},
			metadata: {
				badgePerFacet: '1',
				entitiesPerBadge: 'N',
				values: [
					{ id: 'amazon_s3', label: 'Amazon S3' },
					{ id: 'hdfs', label: 'HDFS' },
					{ id: 'kafka', label: 'Kafka' },
					{ id: 'localcon', label: 'Local connection' },
					{ id: 'salesforce', label: 'Salesforce' },
					{ id: 'aws_kinesis', label: 'AWS kinesis' },
				],
				operators: ['in'],
				badgeId: 'connection.type-9f0e5bc7-c687-4198-9635-d0fc7724dfd1',
				isInCreation: false,
			},
		},
	],
};

const badgesWithAll = {
	badges: [
		{
			properties: {
				attribute: 'all',
				initialOperatorOpened: false,
				initialValueOpened: false,
				label: 'All',
				operator: { label: 'Contains', name: 'containsIgnoreCase', iconName: 'contains' },
				operators: [],
				type: 'text',
				value: 'test',
			},
			metadata: {
				isAvailableForFacetList: false,
				badgePerFacet: 'N',
				entitiesPerBadge: '1',
				operators: ['containsIgnoreCase'],
				badgeId: 'all-b6c04e3d-1d72-4aca-9565-09d206f76d88',
				isInCreation: false,
			},
		},
	],
};

export default {
	title: 'Faceted search/Main',
	component: FacetedSearch.Faceted,
	parameters: {
		docs: {
			description: {
				component:
					'Faceted search is a technique that involves augmenting traditional search techniques with a faceted navigation system, allowing users to narrow down search results by applying multiple filters based on faceted classification of the items. The user can look for any value, even if the field is not currently visible.',
			},
		},
	},
	decorators: [
		(Story, context) => (
			<div>
				<Story {...context} />
			</div>
		),
	],
};

export const Default = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		{currentFacetedMode =>
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.ADVANCED && (
				<FacetedSearch.AdvancedSearch onSubmit={action('onSubmit')} />
			)) ||
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.BASIC && (
				<FacetedSearch.BasicSearch
					badgesDefinitions={badgesDefinitions}
					callbacks={callbacks}
					onSubmit={action('onSubmit')}
					quickSearchInputProps={{
						'data-feature': 'faceted-badge-name',
					}}
				/>
			))
		}
	</FacetedSearch.Faceted>
);

export const Initialized = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		{currentFacetedMode =>
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.ADVANCED && (
				<FacetedSearch.AdvancedSearch onSubmit={action('onSubmit')} />
			)) ||
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.BASIC && (
				<FacetedSearch.BasicSearch
					badgesDefinitions={badgesDefinitions}
					badgesFaceted={badgesFaceted}
					onSubmit={action('onSubmit')}
					callbacks={callbacks}
				/>
			))
		}
	</FacetedSearch.Faceted>
);

export const InitializedWithABadgeWhichIsNotVisibleInTheList = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		{currentFacetedMode =>
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.ADVANCED && (
				<FacetedSearch.AdvancedSearch onSubmit={action('onSubmit')} />
			)) ||
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.BASIC && (
				<FacetedSearch.BasicSearch
					badgesDefinitions={badgesDefinitions}
					badgesFaceted={badgesWithAll}
					callbacks={callbacks}
					onSubmit={action('onSubmit')}
				/>
			))
		}
	</FacetedSearch.Faceted>
);

export const Colored = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		{currentFacetedMode =>
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.ADVANCED && (
				<FacetedSearch.AdvancedSearch onSubmit={action('onSubmit')} />
			)) ||
			(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.BASIC && (
				<FacetedSearch.BasicSearch
					badgesDefinitions={badgesDefinitions}
					badgesFaceted={set(
						cloneDeep(badgesFaceted),
						'badges[0].properties.displayType',
						Badge.TYPES.VALUE,
					)}
					onSubmit={action('onSubmit')}
					callbacks={callbacks}
				/>
			))
		}
	</FacetedSearch.Faceted>
);

export const WithSpecialChars = () => {
	const { t } = useTranslation();
	const badgesDictionary = createBadgesDict();
	const badge = cloneDeep(badgesFaceted.badges[0]);
	Object.assign(badge.properties, {
		value: '  text  ',
		type: 'text',
		displayType: Badge.TYPES.PATTERN,
	});
	return (
		<BadgeFacetedProvider value={{}}>
			<BadgesGenerator
				badges={[badge]}
				badgesDictionary={badgesDictionary}
				getBadgeFromDict={getBadgesFromDict}
				t={t}
			/>
		</BadgeFacetedProvider>
	);
};

export const DatePicker = () => {
	const { t } = useTranslation();
	const badgesDictionary = createBadgesDict();
	const badge = cloneDeep(badgesFaceted.badges[0]);
	Object.assign(badge.properties, {
		value: Date.now(),
		type: 'date',
	});
	return (
		<BadgeFacetedProvider value={{}}>
			<BadgesGenerator
				badges={[badge]}
				badgesDictionary={badgesDictionary}
				getBadgeFromDict={getBadgesFromDict}
				t={t}
			/>
		</BadgeFacetedProvider>
	);
};

export const ReadOnly = () => {
	const { t } = useTranslation();
	const badgesDictionary = createBadgesDict();
	return (
		<BadgeFacetedProvider value={{}}>
			<BadgesGenerator
				badges={[
					set(cloneDeep(badgesFaceted.badges[0]), 'properties.readOnly', true),
					set(cloneDeep(badgesFaceted.badges[0]), 'properties.removable', false),
				]}
				badgesDictionary={badgesDictionary}
				getBadgeFromDict={getBadgesFromDict}
				t={t}
			/>
		</BadgeFacetedProvider>
	);
};

export const WithExternalState = () => {
	const [state, setState] = useState(badgesFaceted);
	const onSubmit = useCallback(
		(_, badges) => setState(previousState => ({ ...previousState, badges })),
		[setState],
	);

	return (
		<div>
			<button onClick={() => setState(badgesFaceted)}>Reset state</button>
			<FacetedSearch.Faceted id="my-faceted-search">
				{currentFacetedMode =>
					(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.ADVANCED && (
						<FacetedSearch.AdvancedSearch onSubmit={action('onSubmit')} />
					)) ||
					(currentFacetedMode === FacetedSearch.constants.FACETED_MODE.BASIC && (
						<FacetedSearch.BasicSearch
							badgesDefinitions={badgesDefinitions}
							badgesFaceted={state}
							onSubmit={onSubmit}
							callbacks={callbacks}
						/>
					))
				}
			</FacetedSearch.Faceted>
		</div>
	);
};

export const WithoutLabelOrOperatorButton = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<FacetedSearch.BasicSearch
			badgesDefinitions={badgesDefinitions}
			badgesFaceted={set(cloneDeep(badgesFaceted), 'badges[0].properties.label', '')}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

const lotsOfBadgesDefinitions = Array(50).fill(badgeName);
export const BasicSearchWithLotOfBadgeDefinitions = {
	render: () => (
		<FacetedSearch.Faceted id="my-faceted-search">
			<FacetedSearch.BasicSearch
				badgesDefinitions={lotsOfBadgesDefinitions}
				onSubmit={action('onSubmit')}
				callbacks={callbacks}
			/>
		</FacetedSearch.Faceted>
	),
	play: async ({ canvasElement }) => {
		await userEvent.type(within(canvasElement).getByRole('searchbox'), 'lorem ipsum');
	},
};

export const BasicSearchWithBadgeWithVeryLongName = {
	render: () => (
		<FacetedSearch.Faceted id="my-faceted-search">
			<FacetedSearch.BasicSearch
				badgesDefinitions={[badgeWithVeryLongName, badgeConnectionType, badgeName, badgePrice]}
				onSubmit={action('onSubmit')}
				callbacks={callbacks}
			/>
		</FacetedSearch.Faceted>
	),
	play: async ({ canvasElement }) => {
		await userEvent.type(within(canvasElement).getByRole('searchbox'), 'lorem ipsum');
	},
};

export const BasicSearchWithBadgeWithAllSelector = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<FacetedSearch.BasicSearch
			badgesDefinitions={[badgeConnectionTypeAllSelector]}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

export const BasicSearchInABadgeWithALotOfValues = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<FacetedSearch.BasicSearch
			badgesDefinitions={[badgeEnumWithLotOfValues]}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

export const BasicSearchWithBadgesCategories = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<FacetedSearch.BasicSearch
			badgesDefinitions={[
				badgeConnectionType,
				badgeName,
				badgePrice,
				badgeTags,
				badgeTextAsCustomAttribute,
				badgePriceAsCustomAttribute,
				badgeEnumsAsCustomAttribute,
				...times(2, () => badgeTextAsCategory),
			]}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

export const BasicSearchWithAnEmptyLabelBadge = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<FacetedSearch.BasicSearch
			badgesDefinitions={[badgeName, badgeEmptyLabel]}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

export const BasicSearchWithSliderPopin = {
	render: ({ decimal, withIcon }) => {
		const step = decimal ? 0.01 : 1;
		const icon = withIcon ? badgeValid.properties.icon : undefined;

		const overritenProperties = {
			initialOperatorOpened: false,
			initialValueOpened: true,
			step,
			decimal: true,
			operator: {
				label: 'Less than',
				name: 'LessThan',
				iconName: 'less-than',
			},
			icon,
			operators: [
				{
					label: 'Less than',
					name: 'LessThan',
					iconName: 'less-than',
				},
				{
					label: 'Less than or equal',
					name: 'LessThanOrEquals',
					iconName: 'less-than-equal',
				},
			],
		};

		const badgeFacetedCustom = {
			badges: [
				{
					...badgeValid,
					properties: {
						...badgeValid.properties,
						...overritenProperties,
					},
				},
			],
		};

		return (
			<FacetedSearch.Faceted id="my-faceted-search">
				<FacetedSearch.BasicSearch
					badgesDefinitions={badgesDefinitions}
					badgesFaceted={badgeFacetedCustom}
					callbacks={callbacks}
					onSubmit={action('onSubmit')}
				/>
			</FacetedSearch.Faceted>
		);
	},
	args: {
		decimal: true,
		withIcon: true,
	},
};

export const WithQuickSearchFilter = () => (
	<FacetedSearch.Faceted id="my-faceted-search">
		<p>Quick search will only suggest facets matching input (Connection name, Author)</p>
		<br />
		<FacetedSearch.BasicSearch
			quickSearchFacetsFilter={(term, facets) =>
				facets.filter(facet => facet.properties.label.includes(term))
			}
			badgesDefinitions={[badgeAuthor, badgeName, badgeConnectionName]}
			onSubmit={action('onSubmit')}
			callbacks={callbacks}
		/>
	</FacetedSearch.Faceted>
);

export const WithQuickSearchFilterCustomizableInputTriggerLength = () => {
	const badgeNameWithLength = {
		properties: {
			attribute: 'name',
			initialOperatorOpened: true,
			initialValueOpened: false,
			label: 'Name',
			operator: {},
			operators: [],
			type: 'text',
			placeholder: 'Enter a dataset name',
		},
		metadata: {
			isAvailableForQuickSearch: true,
			isAvailableForFacetList: true,
			badgePerFacet: 'N',
			entitiesPerBadge: '1',
			operators: [
				'containsIgnoreCase',
				'notContainsIgnoreCase',
				'equals',
				'notEquals',
				'match a regexp',
			],
			'data-feature': 'faceted-badge-name',
			minLength: 5,
		},
	};
	return (
		<FacetedSearch.Faceted id="my-faceted-search">
			<p>
				Quick search will trigger after a minimum input length that can be customized based on badge
				definition
			</p>
			<br />
			<FacetedSearch.BasicSearch
				badgesDefinitions={[badgeNameWithLength]}
				callbacks={callbacks}
				onSubmit={action('onSubmit')}
			/>
		</FacetedSearch.Faceted>
	);
};
