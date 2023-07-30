import React from 'react'
import { styled } from 'styled-components'
import { areDatesEqual, formatDate } from '../../utils/dateTimeUtils'
import { $calendarStore, chooseDate } from '../../store/calendar'
import { useStore } from 'effector-react'

type Props = {
    date: Date
}

export const Day = ({ date }: Props) => {
    const { choosenDate } = useStore($calendarStore)
    const isChecked = areDatesEqual(choosenDate, date)
    return (
        <Layout $isChecked={isChecked}>
            <SwitchButton onChange={() => chooseDate(date)} id={date.toISOString()} type="radio" checked={isChecked} />
            <Label htmlFor={date.toISOString()}>
                <div>{formatDate(date)}</div> <div>3 окна</div>
            </Label>
        </Layout>
    )
}

type LayoutProps = {
    $isChecked: boolean
}

const Layout = styled.div<LayoutProps>`
    ${(props) =>
        props.$isChecked ? `outline :  1px solid ${props.theme.accent2}; border-bottom: none !important;` : ''}
    display: flex;
    width: 100%;
    height: 84px;
`

const Label = styled.label`
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 20px;
`
const SwitchButton = styled.input`
    visibility: hidden;
    height: 0;
    width: 0;
`
