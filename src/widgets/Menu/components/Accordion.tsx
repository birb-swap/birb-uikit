import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT_FULL } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div<{isPushed: boolean}>`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  padding-left: ${({ isPushed }) => (isPushed ? "16px" : "10px")};
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container isPushed={isPushed}>
      <MenuEntry onClick={handleClick} className={className} isPushed={isPushed} isActive={isActive} role="button">
        {icon}
        <LinkLabel isPushed={isPushed} isActive={isActive}>{label}</LinkLabel>
        {status && (
          <LinkStatusComponent color={status.color} fontSize="14px">
            {status.text}
          </LinkStatusComponent>
        )}
        {isPushed && (isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT_FULL}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
