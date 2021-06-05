import { FunctionComponent, SVGAttributes, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

export type Icons = 'home' | 'book' | 'profile' | 'listen' | 'read' | 'share';

type IconProps = {
    name: Icons;
    active: boolean;
};

const IconContainer = styled.div<{ active: boolean }>`
    > svg {
        width: 1.5rem;
        color: ${({ active, theme }) => theme.palette.gray[active ? 500 : 200]};
        transition: color 300ms ease-out;
    }
`;

const Icon = ({ name, active }: IconProps) => {
    const [iconModule, setIconModule] = useState<{ default: FunctionComponent<SVGAttributes<SVGElement>> } | null>(null);

    const getIcon = useCallback(async () => {
        try {
            const importedModule = await import(`icons/${name}.svg`);
            setIconModule(importedModule);
        } catch (error) {
            console.error(`Icon with name: ${name} not found!`);
        }
    }, [name]);

    useEffect(() => {
        getIcon();
    }, [getIcon]);

    if (!iconModule) {
        return null;
    }

    const IconComponent = iconModule.default;
    return (
        <IconContainer active={active}>
            <IconComponent />
        </IconContainer>
    );
};

export default Icon;
