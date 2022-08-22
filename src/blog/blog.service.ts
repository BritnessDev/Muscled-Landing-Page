import { Injectable, Inject } from '@nestjs/common'
import { IPost } from '../../types/types'
import axios from 'axios'

export class BlogService {
  public async all(): Promise<{ id: number; attributes: IPost }[]> {
    const posts = await axios.get(
      'https://clownfish-app-emn2y.ondigitalocean.app/api/sections'
    )
    return posts.data.data
  }

  public async find(slug: string): Promise<{ id: number; attributes: IPost }> {
    // slug should be id
    const post = await axios.get(
      `https://clownfish-app-emn2y.ondigitalocean.app/api/sections/${slug}`
    )

    return post.data.data
  }
}
