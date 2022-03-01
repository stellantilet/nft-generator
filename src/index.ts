import fs from 'fs'
import fse from 'fs-extra'
import { BaseAssetsURI, NFTTypes } from './constants'

const main = async () => {
  if (!fs.existsSync('./targets')) {
    fs.mkdir('./targets', () => {})
  }
  if (!fs.existsSync('./targets/assets')) {
    fs.mkdir('./targets/assets', () => {})
  }
  if (!fs.existsSync('./targets/metadata')) {
    fs.mkdir('./targets/metadata', () => {})
  }

  NFTTypes.forEach((value) => {
    const directory = `./targets/metadata/${value}`
    const imageURL = `${BaseAssetsURI}${value}.png`
    const animationURL = `${BaseAssetsURI}${value}.mp4`
    for (var i = 1; i <= 30; i++) {
      const fileName = `${directory}/${i}.json`
      const metadata = {
        name: `${value} - ${i}`,
        image: imageURL,
        animation_url: animationURL,
        description: `${value} NFT`,
        attributes: [
          {
            trait_type: 'category',
            value,
          },
        ],
      }
      fs.writeFileSync(fileName, JSON.stringify(metadata))
    }
    if (!fs.existsSync(directory)) {
      fs.mkdir(directory, () => {})
    }
  })

  // copy assets
  fse.copy('./assets', './targets/assets', function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log('success!')
    }
  })
}

export default main
