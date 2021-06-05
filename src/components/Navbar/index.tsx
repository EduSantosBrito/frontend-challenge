import { Link as ReactLink, useLocation } from 'react-router-dom';
import styled, { DefaultTheme, keyframes } from 'styled-components';
import Icon, { Icons } from '../Icon';

type WithRedirect<T> = T & { to: string };
type WithOnClick<T> = T & { onClick: () => void };
type DefaultItemProps = {
    label: string;
    iconName: Icons;
};

type NavbarItem = WithRedirect<DefaultItemProps> | WithOnClick<DefaultItemProps>;

type NavbarProps = {
    items: NavbarItem[];
    variant?: 'fixed' | 'floated';
};

type VariantPropertiesType = (theme: DefaultTheme) => Record<string, Record<'fixed' | 'floated', number | string>>;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const getContainerVariantProperties: VariantPropertiesType = theme => ({
    width: {
        fixed: '100%',
        floated: 'calc(100% - 2rem)',
    },
    bottom: {
        fixed: 0,
        floated: '3rem',
    },
    margin: {
        fixed: 0,
        floated: '0 1rem',
    },
    'box-shadow': {
        fixed: 'none',
        floated: theme.shadow,
    },
    'justify-content': {
        fixed: 'space-evenly',
        floated: 'center',
    },
    gap: {
        fixed: 'initial',
        floated: '0.5rem',
    },
});

const Container = styled.div<{ variant: 'fixed' | 'floated' }>`
    height: 3.75rem;
    width: ${({ variant, theme }) => getContainerVariantProperties(theme).width[variant]};
    position: fixed;
    bottom: ${({ variant, theme }) => getContainerVariantProperties(theme).bottom[variant]};
    margin: ${({ variant, theme }) => getContainerVariantProperties(theme).margin[variant]};
    box-shadow: ${({ variant, theme }) => getContainerVariantProperties(theme)['box-shadow'][variant]};

    display: flex;
    justify-content: ${({ variant, theme }) => getContainerVariantProperties(theme)['justify-content'][variant]};
    align-items: center;
    gap: ${({ variant, theme }) => getContainerVariantProperties(theme).gap[variant]};

    background-color: ${({ theme }) => theme.palette.white};
    animation: ${slideUp} 300ms linear forwards;
`;

const getLinkVariantProperties: VariantPropertiesType = () => ({
    'flex-direction': {
        fixed: 'column',
        floated: 'flow',
    },
    gap: {
        fixed: 0,
        floated: '0.3rem',
    },
});

const Link = styled(ReactLink)<{ variant: 'fixed' | 'floated' }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ variant, theme }) => getLinkVariantProperties(theme)['flex-direction'][variant]};
    gap: ${({ variant, theme }) => getLinkVariantProperties(theme).gap[variant]};
    text-decoration: none;
    color: inherit;
`;

const Button = styled.button<{ variant: 'fixed' | 'floated' }>`
    appearance: none;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ variant, theme }) => getLinkVariantProperties(theme)['flex-direction'][variant]};
    gap: ${({ variant, theme }) => getLinkVariantProperties(theme).gap[variant]};
    color: inherit;
`;

const getLinkLabelVariantProperties: VariantPropertiesType = theme => ({
    'font-weight': {
        fixed: 400,
        floated: 700,
    },
    'font-size': {
        fixed: theme.fonts.size.link.small,
        floated: theme.fonts.size.link.default,
    },
});

const LinkLabel = styled.p<{ active: boolean; variant: 'fixed' | 'floated' }>`
    font-family: ${({ theme }) => theme.fonts.family.link};
    font-weight: ${({ variant, theme }) => getLinkLabelVariantProperties(theme)['font-weight'][variant]};
    font-size: ${({ variant, theme }) => getLinkLabelVariantProperties(theme)['font-size'][variant]};
    margin: 0;
    color: ${({ active, theme }) => theme.palette.gray[active ? 500 : 200]};
    transition: color 300ms ease-out;
`;

const Divider = styled.hr<{ hidden: boolean }>`
    display: ${({ hidden }) => (hidden ? 'none' : 'block')};
    content: '';
    width: 2px;
    height: 1rem;
    background-color: ${({ theme }) => theme.palette.gray[200]};
    border: none;
    margin: 0;
`;

const Navbar = ({ items, variant = 'fixed' }: NavbarProps) => {
    const location = useLocation();

    return (
        <Container variant={variant}>
            {items.map((item, index) => {
                if ((item as WithRedirect<DefaultItemProps>).to) {
                    const itemWithRedirect = item as WithRedirect<DefaultItemProps>;
                    return (
                        <>
                            <Link variant={variant} key={item.label} to={(item as WithRedirect<DefaultItemProps>).to}>
                                <Icon active={location.pathname === itemWithRedirect.to && variant === 'fixed'} name={item.iconName} />
                                <LinkLabel variant={variant} active={location.pathname === itemWithRedirect.to}>
                                    {item.label}
                                </LinkLabel>
                            </Link>
                            <Divider hidden={variant === 'fixed' || index === items.length - 1} />
                        </>
                    );
                }
                const itemWithOnClick = item as WithOnClick<DefaultItemProps>;
                return (
                    <>
                        <Button variant={variant} key={item.label} onClick={itemWithOnClick.onClick}>
                            <Icon active={false} name={item.iconName} />
                            <LinkLabel variant={variant} active={variant === 'floated'}>
                                {item.label}
                            </LinkLabel>
                        </Button>
                        <Divider hidden={variant === 'fixed' || index === items.length - 1} />
                    </>
                );
            })}
        </Container>
    );
};

export default Navbar;
