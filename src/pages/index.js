import React, { useState } from 'react'
import FilmList from '../components/film-list'
import Footer from '../components/footer'
import ToggleableSplash from '../components/toggleable-splash'
import { Helmet } from 'react-helmet'

export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true)

  function toggleSplashVisible() {
    setSplashVisible(!splashVisible)
  }

  return (
    <>
      <Helmet>
        <title>OpenShop</title>
        <meta name="title" content="Open Shop filmmaking" />
        <meta
          name="description"
          content="Open Shop is filmmaking duo Martin Sandin & Viktor Annerstål. Martin writes and directs. Viktor edits and shoots."
        />
        <meta
          name="keywords"
          content="filmmaking, stockholm, sweden, documentaries, documentary, street, mad dog from chaos to comeback, distressed, dimmiga dar, short film, photography, video, trailer, films, movies, openshop, open shop, art, artistic, filmskapande, dokumentärer, dokumentär, gata, kort film, fotografi, filmer, Martin sandin, viktor Annerstål, konst, konstnärlig"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="OpenShop" />
        <link rel="preload" href="splashvids/bg_1.mp4" as="video"></link>
        <link rel="preload" href="splashvids/bg_2.mp4" as="video"></link>
        <link rel="preload" href="splashvids/bg_3.mp4" as="video"></link>
      </Helmet>
      <main>
        <div id="#top" />
        <ToggleableSplash
          splashVisible={splashVisible}
          toggleSplashVisible={toggleSplashVisible}
        />
        {!splashVisible && <FilmList />}
      </main>
      {!splashVisible && <Footer />}
    </>
  )
}
