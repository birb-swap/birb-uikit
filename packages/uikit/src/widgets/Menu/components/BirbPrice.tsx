import React from "react";
import styled from "styled-components";
import { BirbRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  birbPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BirbPrice: React.FC<Props> = ({ birbPriceUsd }) => {
  return birbPriceUsd ? (
    <PriceLink
      href="https://bscscan.com/token/0x82a479264b36104be4fdb91618a59a4fc0f50650"
      target="_blank"
    >
      <BirbRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${birbPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BirbPrice);
