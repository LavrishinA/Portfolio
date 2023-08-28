import React from 'react';
import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import StyledItemHeading from "./ItemHeading";
import Icon from "./Icon";


type ExperienceItemProps = {
    data?: string
    iconid: string
    position: string
    list?: string[]
    link: string
}

const StyledExperienceItemContainer = styled(FlexContainer)`
  max-width: 896px;
  width: 100%;
  padding: 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 4px 3px 0 rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledExperienceItemIcon = styled.figure`
  flex-basis: 20%;
  font-size: 12px;
  font-weight: 600;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`
const StyledExperienceItemList = styled.li`
  list-style: disc inside;

  ::marker {
    color: #10B981
  }
`

const StyledDataSince = styled.span`
  white-space: nowrap;
  margin-left: auto;
`
const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <StyledExperienceItemContainer gap={40} justify={"flex-start"} align={"flex-start"}>
            <StyledExperienceItemIcon>
                <a href={props.link} target="_blank">
                    <Icon width={"76"} height={"76"} iconId={props.iconid}/>
                </a>
                <figcaption>{props.iconid.toUpperCase()}</figcaption>
            </StyledExperienceItemIcon>
            <div>
                <StyledItemHeading>{props.position}</StyledItemHeading>
                {props.list &&
                    <FlexContainer as={"ul"} direction={"column"} gap={4} align={"start"}>
                        {props.list.map((li, i) => <StyledExperienceItemList key={i}>{li}</StyledExperienceItemList>)}
                    </FlexContainer>}
            </div>
            <StyledDataSince>{props.data || "Since Mar 2022"}</StyledDataSince>
        </StyledExperienceItemContainer>
    );
};

export default ExperienceItem;