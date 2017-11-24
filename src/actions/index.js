const types = {
  EXAMPLES: {
    EXAMPLE_ACTION: 'EXAMPLE_ACTION',
  },
}

const creators = {
  example: (payload) => ({
    type: types.EXAMPLES.EXAMPLE_ACTION,
    payload: {
      message: 'HELLO',
    },
  })
}

export {
  types,
  creators,
}
