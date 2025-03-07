import {
	forwardRef,
	InputHTMLAttributes,
	Ref,
	useImperativeHandle,
	useRef,
	FocusEvent,
} from 'react';
import classnames from 'classnames';
import InputWrapper, { AffixesProps } from '../InputWrapper/InputWrapper';
import { FieldStatusProps } from '../Field/Field';
import useRevealPassword from '../../../Form/Field/Input/hooks/useRevealPassword';
import { SizedIcon } from '../../../Icon';

import styles from './Input.module.scss';

export type InputPrimitiveProps = Omit<InputHTMLAttributes<any>, 'prefix' | 'suffix'> &
	AffixesProps &
	Omit<FieldStatusProps, 'errorMessage'>;

const Input = forwardRef((props: InputPrimitiveProps, ref: Ref<HTMLInputElement | null>) => {
	const {
		id,
		className,
		prefix,
		suffix,
		readOnly = false,
		disabled = false,
		type,
		onBlur,
		hasError,
		...rest
	} = props;

	// Password type management
	const inputRef = useRef<HTMLInputElement | null>(null);
	useImperativeHandle(ref, () => inputRef.current);
	function handleClick() {
		if (inputRef.current) {
			inputRef.current.focus();
			const valueLength = inputRef.current.value.length || 0;
			inputRef.current.setSelectionRange(valueLength, valueLength);
		}
	}

	const { currentType, onReset, RevealPasswordButton } = useRevealPassword();

	const handleBlur = (event: FocusEvent<HTMLInputElement, HTMLInputElement>) => {
		if (!!onBlur) {
			onBlur(event);
		}
		if (type === 'password') {
			onReset();
		}
	};

	return (
		<InputWrapper
			prefix={prefix}
			suffix={suffix}
			disabled={disabled}
			readOnly={readOnly}
			hasError={hasError}
		>
			<>
				{type === 'search' && (
					<span
						className={classnames(styles.icon, {
							[styles.icon_disabled]: disabled,
							[styles.icon_readOnly]: readOnly,
						})}
					>
						<SizedIcon size="M" name="magnifying-glass" />
					</span>
				)}
				<input
					{...rest}
					id={id}
					type={type === 'password' ? currentType : type}
					ref={inputRef}
					disabled={disabled}
					readOnly={readOnly}
					onBlur={handleBlur}
					className={classnames(styles.input, { [styles.input_readOnly]: readOnly }, className)}
				/>
				{type === 'password' && <RevealPasswordButton onClick={handleClick} disabled={disabled} />}
			</>
		</InputWrapper>
	);
});

Input.displayName = 'Input';

export default Input;
