import React from 'react';
import styled from 'styled-components';
import Octicon, { MarkGithub } from '@primer/octicons-react';
import { Flex, Link } from 'rebass/styled-components';

import { Logo } from './logo';

const Container = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
`;

const GithubIcon = styled(Octicon)`
  color: white;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Navbar = ({ location }) => {
  return (
    <Container>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 960, mx: 'auto' }}
        px="2rem"
        py={2}
      >
        <a href="/">
          <Logo
            style={{
              maxWidth: '2rem',
              marginTop: '0.2rem',
            }}
          />
        </a>

        <MenuList>
          <li>
            <Link
              variant="link"
              href="https://github.com/manosim/gitify"
              aria-label="GitHub Repository"
            >
              <GithubIcon Octicon icon={MarkGithub} verticalAlign="middle" />
            </Link>
          </li>
        </MenuList>
      </Flex>
    </Container>
  );
};
