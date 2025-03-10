import { forwardRef } from 'react';
import type { Ref } from 'react';
import StackPrimitive, { StackPrimitiveProps } from './Primitive/StackPrimitive';

export type StackVerticalProps = Omit<StackPrimitiveProps, 'direction' | 'isFullWidth'>;

export const StackVertical = forwardRef((props: StackVerticalProps, ref: Ref<any>) => {
	return (
		<StackPrimitive {...props} direction="column" ref={ref}>
			{props.children}
		</StackPrimitive>
	);
});

StackVertical.displayName = 'StackVertical';
