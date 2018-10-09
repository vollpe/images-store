export const filterItemsByTags = (items, tags, searchTerm) => {
    if (!items) {
        return null;
    } else {
        if (!tags && !searchTerm) {
            return items;
        }
    }
    let result = [];
    // no selected tags
    if (tags) {
        if (tags.filter(el => el.active).length === 0) {
            result = items;
        } else {
            let selectedTags = tags.filter(tag => tag.active).map(e => e.name);
            for (let i in items) {
                // check by search
                let elementTags = items[i].tags;
                let isMatch = selectedTags.every((value) => {
                    return (elementTags.includes(value));
                });
                if (isMatch) {
                    result.push(items[i]);
                }
            }
        }
    }
    if (searchTerm) {
        return result.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return result;
};

export const getItemsLabel = (itemCount) => {
    switch (itemCount) {
        case 0:
            return 'No Items';
        case 1:
            return "1 Item";
        case 'Not loaded yet':
            return itemCount;
        default:
            return itemCount + ' Items';
    }
};