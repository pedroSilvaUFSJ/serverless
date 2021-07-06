const ImageEventGenerator = (filename, filesize) => {
    return {
        Records: [
            { s3: { object: { key: filename, size: filesize } } }
        ]
    }
}

module.exports = ImageEventGenerator