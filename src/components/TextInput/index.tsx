import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Icon, { Icons } from '../Icon';

type TextInputProps = {
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: Icons;
};

const Container = styled.div<{ withIcon: boolean }>`
    position: relative;
    padding: 1rem;
    width: calc(100% - 2rem);
    display: flex;
    justify-content: stretch;
`;

const IconContainer = styled.label`
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
`;

const Input = styled.input`
    border: none;
    padding: 1rem 2.5rem;
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadow};
    width: 100%;
`;

const TextInput = ({ name, value, onChange, placeholder, icon }: TextInputProps) => {
    return (
        <Container withIcon={!!icon}>
            {icon && (
                <IconContainer htmlFor={name}>
                    <Icon name={icon} active={false} />
                </IconContainer>
            )}
            <Input id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </Container>
    );
};

export default TextInput;
