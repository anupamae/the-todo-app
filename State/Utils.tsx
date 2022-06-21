export const truncateString = (str: string, maxLen: number) => {
  if (str.length > maxLen) {
    return str.slice(0, maxLen) + '...'
  }
  return str
}
