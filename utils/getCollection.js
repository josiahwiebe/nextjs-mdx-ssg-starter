const fs = require('fs')

const getFilesInCollection = (collectionName) => fs.readdirSync(`./pages/${collectionName}`) || []
const ignoreList = ['_app.js', '_document.js', 'blog', '.DS_Store', 'index.js']

const collectionFilenames = (collectionName) => {
  const allCollectionFilenames = getFilesInCollection(collectionName)
  const filteredFilenames = allCollectionFilenames.filter((name) => !name || !ignoreList.includes(name))
  return Promise.resolve(filteredFilenames)
}

const createCollectionArray = (filenameList, collectionName) => {
  return filenameList.reduce((collection, name) => {
    const { title, ...meta } = require(`../pages/${collectionName}/${name}`).meta

    let cleanedName = name.split('.')[0]

    collection.push({
      title,
      date: new Date(meta.date),
      name,
      url: `/${collectionName}/${cleanedName === 'index' ? '' : cleanedName}`,
      ...meta,
    })

    return collection
  }, [])
}

export const getCollection = (collectionName) =>
  collectionFilenames(collectionName)
    .then((filenameList) => {
      const collectionArray = createCollectionArray(filenameList, collectionName)
      const sortedList = collectionArray.sort((a, b) => new Date(b.date) - new Date(a.date))
      return sortedList
    })
    .catch((err) => console.log('Error creating collection list', err))
