export type BlogType = {
  id: string
  createdAt: string
  updatedAt: string
  revisedAt: string
  publishedAt: string
  title: string
  category: Category
  body: string
  createDate: string
  updateDate: string
  mainVisual: MainVisualType
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

export type MainVisualType = {
  url?: string
  height?: number
  width?: number
}

export type ResponseBlogDataType = {
  contents: Array<BlogType>
  totalCount: number
  offset: number
  limit: number
}
