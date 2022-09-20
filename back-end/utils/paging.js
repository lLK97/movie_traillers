const paging = (dataMoie, paging, numberOfPage) => {
    return dataMoie.filter((item, index) => {
        if (
            index > numberOfPage * paging - 1 &&
            index < paging * numberOfPage + numberOfPage - 1
        ) {
            return item
        }
    })
}
exports.paging = paging;