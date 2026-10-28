import type { ActionDispatch } from "react"

export type Photo = {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

type DispatchReducerTypes = "TOGGLE_LIKE"

type DispatchReducerPayloads = string

export type DispatchReducerArgs = {
  type: DispatchReducerTypes,
  payload: DispatchReducerPayloads
}

export type DispatchReducer = ActionDispatch<[DispatchReducerArgs]>