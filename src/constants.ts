import dotenv from 'dotenv'
dotenv.config()

export const BaseAssetsURI = process.env.BASE_ASSETS_URI
export const BaseMetadataURI = process.env.BASE_METADATA_URI

export const enum NFTTypesEnum {
  Plantinum = 'Plantinum',
  Gold = 'Gold',
  Silver = 'Silver',
  Bronze = 'Bronze',
}

export const NFTTypes = [
  NFTTypesEnum.Plantinum,
  NFTTypesEnum.Gold,
  NFTTypesEnum.Silver,
  NFTTypesEnum.Bronze,
]
