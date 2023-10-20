import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries.json'


class AlbumMaker extends React.Component {

  render() {

    var radius=56;
    const pi=3.14;
    debugger;
    var area=radius ** 2 * pi;

    return (
      <div className="flex-container">
       {
        entries.itemlist.map((photo)=>{
          return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
        })
       }
      </div>
    )

  }

}

export default AlbumMaker;
