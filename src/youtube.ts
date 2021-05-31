let YouTubeIframeLoader = require("youtube-iframe");

YouTubeIframeLoader.load(function (YT) {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
});
