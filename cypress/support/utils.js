export const qaIdPath = (...ids) => ids.map(id => `[data-cy="${id}"]`).join(' ')

// useful for creating DRY page bound selectors
export const curryQaIdPath = (...curryIds) =>
    qaIdPath.bind(undefined, ...curryIds)
