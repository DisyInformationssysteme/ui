import { screen, render } from '@testing-library/react';

import Slider, {
	getCaptionsValue,
	getSelectedIconPosition,
	renderActions,
} from './Slider.component';

const onChange = jest.fn();

describe('Slider', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	describe('component', () => {
		it('should render Slider', () => {
			// given
			const props = {
				id: 'selectable',
				emptyValueLabel: 'no label',
				onChange,
			};
			// when
			const { container } = render(<Slider {...props} />);
			// then
			expect(container.firstChild).toMatchSnapshot();
		});

		it('should render a range', () => {
			// given
			const props = {
				id: 'selectable',
				value: [10, 25],
				onChange,
			};
			// when
			render(<Slider {...props} />);
			// then
			expect(screen.getAllByRole('slider')).toHaveLength(2);
		});

		it('should render Slider with icons on status', () => {
			// given
			const props = {
				id: 'selectable',
				value: 45,
				label: 'Heeey',
				onChange,
				captionIcons: [
					'talend-smiley-rating',
					'talend-most-trusted',
					'talend-network',
					'talend-streams',
					'talend-tdc-negative',
				],
			};
			// when
			render(<Slider {...props} />);
			// then
			const captions = document.querySelectorAll('.tc-slider-captions-element .CoralIcon');
			expect(captions).toHaveLength(5);
			expect(captions[0]).toHaveAttribute('name', 'talend-smiley-rating');
			expect(captions[1]).toHaveAttribute('name', 'talend-most-trusted');
			expect(captions[2]).toHaveAttribute('name', 'talend-network');
			expect(captions[3]).toHaveAttribute('name', 'talend-streams');
			expect(captions[4]).toHaveAttribute('name', 'talend-tdc-negative');
		});

		it('should render Slider with captionTextStepNumber', () => {
			// given
			const captionsFormat = value => `${value}%`;
			const props = {
				id: 'selectable',
				onChange,
				value: 45,
				label: 'Heeey',
				captionTextStepNumber: 5,
				captionsFormat,
			};
			// when
			render(<Slider {...props} />);

			// then
			const captions = document.querySelectorAll('.tc-slider-captions-element');

			expect(captions).toHaveLength(5);
			expect(captions[0]).toHaveTextContent('0%');
			expect(captions[1]).toHaveTextContent('25%');
			expect(captions[2]).toHaveTextContent('50%');
			expect(captions[3]).toHaveTextContent('75%');
			expect(captions[4]).toHaveTextContent('100%');
		});
		it('should render Slider with captionActions', () => {
			// given
			const actions = [
				{
					id: 'icon1',
					label: 'angry',
					icon: 'talend-smiley-angry',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
				{
					id: 'icon2',
					label: 'neutral',
					icon: 'talend-smiley-neutral',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
				{
					id: 'icon3',
					label: 'satified',
					icon: 'talend-smiley-satisfied',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
			];
			// when
			render(<Slider captionActions={actions} value={76} onChange={onChange} />);
			// then
			const captions = screen.getAllByRole('link');
			expect(captions).toHaveLength(3);
			expect(captions[0]).toHaveAttribute('aria-label', 'angry');
			expect(captions[0]).toHaveClass('tc-slider-captions-element');
			expect(captions[1]).toHaveAttribute('aria-label', 'neutral');
			expect(captions[1]).toHaveClass('tc-slider-captions-element');
			expect(captions[2]).toHaveAttribute('aria-label', 'satified');
			expect(captions[2]).toHaveClass('tc-slider-captions-element');
		});
		it('should render Slider disabled', () => {
			// given
			const actions = [
				{
					id: 'icon1',
					label: 'Click Me',
					icon: 'talend-smiley-angry',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
				{
					id: 'icon2',
					label: 'Click Me',
					icon: 'talend-smiley-neutral',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
				{
					id: 'icon3',
					label: 'Click Me',
					icon: 'talend-smiley-satisfied',
					'data-feature': 'action',
					link: true,
					hideLabel: true,
				},
			];
			// when
			render(<Slider captionActions={actions} value={76} disabled onChange={onChange} />);
			// then
			const captions = screen.getAllByRole('link');
			expect(captions).toHaveLength(3);
			expect(captions[0]).toBeDisabled();
			expect(captions[1]).toBeDisabled();
			expect(captions[2]).toBeDisabled();
		});
	});
	describe('getSelectedIconPosition()', () => {
		it('should return the selected position', () => {
			// given
			const icons = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5'];
			// when
			const result = getSelectedIconPosition(icons, 46, 0, 100);
			// then
			expect(result).toBe(2);
		});

		it('should return -1 when value is null', () => {
			// given
			const icons = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5'];
			// when
			const result = getSelectedIconPosition(icons, null, 0, 100);
			// then
			expect(result).toBe(-1);
		});

		it('should return -1 when value is undefined', () => {
			// given
			const icons = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5'];
			// when
			const result = getSelectedIconPosition(icons, undefined, 0, 100);
			// then
			expect(result).toBe(-1);
		});
	});
});

describe('getActions', () => {
	it('should render some action', () => {
		// Given
		const actions = [
			{
				id: 'icon1',
				label: 'angry',
				icon: 'talend-smiley-angry',
				'data-feature': 'action',
				link: true,
				hideLabel: true,
			},
			{
				id: 'icon2',
				label: 'neutral',
				icon: 'talend-smiley-neutral',
				'data-feature': 'action',
				link: true,
				hideLabel: true,
			},
			{
				id: 'icon3',
				label: 'satisfied',
				icon: 'talend-smiley-satisfied',
				'data-feature': 'action',
				link: true,
				hideLabel: true,
			},
		];
		// When
		render(renderActions(actions, 76, 0, 100, false));
		// Then
		expect(screen.getAllByRole('link')).toHaveLength(3);
		expect(screen.getByLabelText('angry')).toBeVisible();
		expect(screen.getByLabelText('neutral')).toBeVisible();
		expect(screen.getByLabelText('satisfied')).toBeVisible();
	});
});

describe('getCaptionsValue', () => {
	it('should return the values based on the length of the captions', () => {
		expect(getCaptionsValue(5, 0, 100)).toEqual([0, 25, 50, 75, 100]);
	});
});
