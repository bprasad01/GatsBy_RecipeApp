const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((key, value) => {
    const [firstTag] = key
    const [secondTag] = value
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
