import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={`http://localhost:5432${url}`} alt={alternativeText} />
)

export default Logo
