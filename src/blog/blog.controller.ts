import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
} from '@nestjs/common'
import { BlogService } from './blog.service'

@Controller('/blog')
export class BlogController {
  constructor(private service: BlogService) {}

  @Render('blog')
  @Get()
  public async index() {
    return { posts: await this.service.all() }
  }

  @Render('blog/[slug]')
  @Get(':slug')
  public async get(@Param('slug') slug: string) {
    const post = await this.service.find(slug)

    if (post === null) {
      throw new NotFoundException()
    }

    return { post }
  }
}
