import React from 'react';
import Icon from "./Icon";
import FlexContainer from "./FlexContainer";
import styled from "styled-components";

type ExperienceItemProps = {
    data?: string
    iconid: string
    position: string
    list?: string[]
    link: string
}

const ExperienceItemContainer = styled(FlexContainer)`
  width: 896px;
  padding: 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06), 0 4px 3px 0 rgba(0, 0, 0, 0.07);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

`

const ExperienceItemHeading = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #111827;
  margin-bottom: 16px;
`

const ExperienceItemIcon = styled.figure`
  flex-basis: 150px;
  font-size: 12px;
  font-weight: 600;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ExperienceItemList = styled.li`
  list-style: disc inside;

  ::marker {
    color: #10B981
  }
`

const StyledDataSince = styled.span`
  margin-left: auto;
`
const ExperienceItem = (props: ExperienceItemProps) => {
    return (
        <ExperienceItemContainer gap={40} justify={"flex-start"} align={"flex-start"}>
            <ExperienceItemIcon>
                <a href={props.link} target="_blank">
                    <Icon width={"76"} height={"76"} iconId={props.iconid}/>
                </a>
                <figcaption>{props.iconid.toUpperCase()}</figcaption>
            </ExperienceItemIcon>
            <div>
                <ExperienceItemHeading>{props.position}</ExperienceItemHeading>
                {props.list &&
                    <FlexContainer as={"ul"} direction={"column"} gap={4} align={"start"}>
                        {props.list.map((li, i) => <ExperienceItemList key={i}>{li}</ExperienceItemList>)}
                    </FlexContainer>}
            </div>
            <StyledDataSince>{props.data || "Since Mar 2022"}</StyledDataSince>
        </ExperienceItemContainer>
    );
};

export default ExperienceItem;