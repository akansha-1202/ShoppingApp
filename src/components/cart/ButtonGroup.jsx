import { Button,ButtonGroup,styled } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
    margin-top :30px;
 `

 const StyledBtn = styled(Button)`
     border-radius : 50%;
 `
export default function GroupedBtn() {
  return (
    <Component>
        <StyledBtn>-</StyledBtn>
        <Button disabled>1</Button>
        <StyledBtn>+</StyledBtn>
    </Component>
  )
}
