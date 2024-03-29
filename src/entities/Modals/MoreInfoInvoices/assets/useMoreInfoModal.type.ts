type ObjInfo = {
  key: string
  value: string
}

export interface useMoreInfoModalType {
  openModal: (id: number) => void
  closeModal: () => void
  isOpenModal: boolean
  info: ObjInfo[]
}
