'use strict'
const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB']

export const formatFileSize = (size) =>  {
  const units = ['', 'K', 'M', 'G', 'T', 'P']
  const unit = 1024
  let index = 0
  while (size / unit > 1) {
    index ++
    size = size / unit
  }
  return `${Math.round(size)}${units[index]}B`
}
