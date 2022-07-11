import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT_FULL, MENU_ENTRY_HEIGHT_REDEUCED } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean, isActive: boolean }>`
  color: ${({ isActive, isPushed, theme }) => (isPushed ? isActive ? "#FFFFFF" : theme.colors.silver : "transparent")};
  display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ isPushed }) => (isPushed ? MENU_ENTRY_HEIGHT_FULL : MENU_ENTRY_HEIGHT_REDEUCED)}px;
  padding: ${({ secondary, isPushed }) => (secondary ? "0 36px" : isPushed ? "0 20px" : "0 5px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.colors.silver};
  
  a {
    display: flex;
    align-items: center;
    justify-content: ${({ isPushed }) => (isPushed ? "unset" : "center")};
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding: ${({ isPushed }) => (isPushed ? "0px 20px" : "0px 5px")};
    background-color: ${({ isActive, theme }) => (isActive ? `${theme.colors.primary}` : "none")};
  }

  svg {
    fill: ${({ isActive, theme }) => (isActive ? "#FFFFFF" : theme.colors.silver)};
    stroke: ${({ isActive, theme }) => (isActive ? "#FFFFFF" : theme.colors.silver)};
    margin-right: ${({ isPushed }) => (isPushed ? "12px" : "0px")};
  }

  &:hover {
    svg {
      fill: ${({ isActive, theme }) => (isActive ? "#e3ebf3" : "#9da1a5")};
      stroke: ${({ isActive, theme }) => (isActive ? "#e3ebf3" : "#9da1a5")};
    }
    ${LinkLabel} {
      color: ${({ isActive, theme }) => (isActive ? "#e3ebf3" : "#9da1a5")};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text) <{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
