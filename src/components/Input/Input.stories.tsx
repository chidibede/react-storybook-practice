import { Story } from '@storybook/react/types-6-0'
/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import Input from './Input'

export default {
    title:  'Forms/Input',
    component: Input
}

const Template: Story<any> = args => <Input {...args} />

export const Large = Template.bind({})
Large.args = {
    variantSize: 'lg',
    children: 'Large'
}

export const Medium = Template.bind({})
Medium.args = {
    variantSize: 'md',
    children: 'Medium'
}

export const Small = Template.bind({})
Small.args = {
    variantSize: 'sm',
    children: 'Small'
}