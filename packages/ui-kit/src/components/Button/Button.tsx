import React from 'react'
import { Button as ButtonMantine, ButtonProps, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

export const Button = (props: ButtonProps) => (
  <MantineProvider>
    <ButtonMantine {...props}>button</ButtonMantine>
  </MantineProvider>
)
