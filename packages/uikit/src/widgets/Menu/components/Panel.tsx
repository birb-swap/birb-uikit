import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText } from "../icons";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  isDark: boolean;
  href: string;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({ isPushed }) => !isPushed && "white-space: nowrap;"};

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    z-index: 30;
    padding-top: 0px;
  }
`;

const StyledLink = styled(Link)<{ isPushed: boolean }>`
  display: flex;
  justify-content: center;

  .mobile-icon {
    width: 46px;
    display: none;

    ${({ theme }) => theme.mediaQueries.nav} {
      display: ${({isPushed}) => (isPushed ? "none" : "block")};
      margin-top: 20px;
      margin-bottom: 36px;
    }
  }

  .desktop-icon {
    width: 170px;
    display: none;

    ${({ theme }) => theme.mediaQueries.nav} {
      display: ${({isPushed}) => (isPushed ? "block" : "none")};
      margin-top: 20px;
      margin-bottom: 36px;
    }
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, isDark, href, showMenu } = props;
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} isPushed={isPushed} aria-label="BirbSwap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} isPushed={isPushed} aria-label="BirbSwap home page">
          {innerLogo}
        </StyledLink>
      )}
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
