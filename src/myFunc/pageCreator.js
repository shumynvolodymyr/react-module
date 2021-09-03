export const pageCreator = (pages, total_pages, page) => {
    if (total_pages > 10) {
        if (page > 5) {
            for (let i = page - 4; i <= page + 5; i++) {
                pages.push(i)
                if (i === total_pages) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i === total_pages) break
            }
        }
    } else {
        for (let i = 1; i <= total_pages; i++) {
            pages.push(i)
        }
    }
}
