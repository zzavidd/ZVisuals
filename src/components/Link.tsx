import type { ButtonProps, LinkProps } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';

export const Link = React.forwardRef<HTMLAnchorElement, ZavidLinkProps>(
  function ({ children, newTab, ...props }, ref) {
    const extraProps: LinkProps = newTab
      ? { target: '_blank', rel: 'noopener' }
      : {};
    return (
      <MuiLink
        fontWeight={700}
        underline={'hover'}
        {...props}
        {...extraProps}
        component={NextLink}
        ref={ref}>
        {children}
      </MuiLink>
    );
  },
);

interface ZavidLinkProps extends LinkProps {
  buttonVariant?: ButtonProps['variant'];
  newTab?: boolean;
}
