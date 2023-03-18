import React from 'react';
import useSWR, { SWRConfig } from "swr";

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/albums');
    return await res.json();
}

//SSG+SWR
const Albums = () => {
    const { data: albums } = useSWR("albums", fetcher);
    return (
        <>
          <h1>Albums List</h1>
            {
              albums.map(a => (
                  <div id={a.id}>
                      <h2>userId: {a.userId}</h2>
                      <p>title: {a.title}</p>
                      <hr/>
                  </div>
              ))
            }
        </>
    );
};

export async function getStaticProps(){
    const albums = await fetcher();
    return {
        props:{
            fallback: {
                'albums': albums
            }
        }
    }
}

const AlbumPage = ({ fallback }) => {
    return (
        <SWRConfig value={{ fallback }}>
            <Albums />
        </SWRConfig>
    )
}

export default AlbumPage;
