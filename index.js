function toFormData(o) {
  return Object.entries(o).reduce((d,e) => (d.append(...e),d), new FormData())
}

export default toFormData
