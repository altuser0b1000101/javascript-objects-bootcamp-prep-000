var playlist = {
  artist1:'song1',
  artist2:'song2',
};

Object.assaign( {} , playlist , { [artist1]: 'song1'});

function updatePlaylist(playlist,artist1){
  playlist[artist1] = 'song1';
}

