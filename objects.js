var playlist = {
  artist1: 'song1',
  artist2: 'song2',
};

function updatePlaylist(playlist,artist1){
  playlist[artist1] = 'song1';
}
function removeFromPlaylist(playlist, artist2){
  return Object.assign({}, obj, {[artist2]:
  'song2'});
}