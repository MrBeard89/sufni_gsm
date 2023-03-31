import React from 'react'

export const SelectedPhoneContextDefault = {
  value: null,
  setValue: () => {},
}

export const SelectedPhoneContext = React.createContext(
  SelectedPhoneContextDefault
)
