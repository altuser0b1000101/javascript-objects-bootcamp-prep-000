var playlist = {
  artist1: 'song1',
  artist2: 'song2',
};

function updatePlaylist(playlist,artist1){
  playlist[artist1] = 'song1';
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artist1];
  delete playlist[artist2];
  return playlist;
}