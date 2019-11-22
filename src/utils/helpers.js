export const checkMimeType = (validTypes, file) => validTypes.includes(file.type)

export const checkFileSize = (validSize, file) => file.size <= validSize