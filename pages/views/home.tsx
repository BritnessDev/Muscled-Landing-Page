import * as React from 'react'
import { NextPage, NextPageContext } from 'next'
import Button from '../../components/Button'
import Card from '../../components/Card'

interface Props {
  query: { name?: string }
}

const Home: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World'

  return (
    <div>
      <Button text='I want to apply' rounded white outline arrow='small' />
      <div className='max-w-[280px] flex'>
        <Card type='' />
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const query = {
    name: ctx.query.name || null,
  }
  return { props: { query } }
}

export default Home
