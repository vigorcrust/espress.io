import React from 'react'
import App from 'next/app'
import { Tina, TinaCMS } from 'tinacms'
import '../styles/global.css'
import { GitClient } from '@tinacms/git-client'

class MyApp extends App {
  constructor() {
    super()
    // initialize the cms
    this.cms = new TinaCMS({
        enabled: true,
        sidebar: {
          hidden: true,
        },
        toolbar: { hidden: false },
      })

    const client = new GitClient('/___tina')
    this.cms.registerApi('git', client)
  }
  render() {
    const { Component, pageProps } = this.props
    // Wrap the page with Tina, provide the cms
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    )
  }
}

export default MyApp