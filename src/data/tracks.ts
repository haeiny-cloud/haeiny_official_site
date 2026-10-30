export const featuredTrack = {
  title: "Rise and Shine",
  artists: "たちつてと · 박해인",
  language: "Korean",
  links: {
    spotify: "https://open.spotify.com/track/7bUpOTJo1aiWRUArYSejc4",
    apple: "https://music.apple.com/jp/song/rise-and-shine/6824900279",
    youtubeMusic: "https://www.youtube.com/watch?v=nNhvaF78hn0",
    lineMusic: "https://music.line.me/webapp/track/mt0000000027effd21",
    video: "https://www.youtube.com/watch?v=0tubu9olDp8",
  },
} as const;

export const streamingPlatforms = [
  { label: "Spotify", url: featuredTrack.links.spotify },
  { label: "Apple Music", url: featuredTrack.links.apple },
  { label: "YouTube Music", url: featuredTrack.links.youtubeMusic },
  { label: "LINE MUSIC", url: featuredTrack.links.lineMusic },
] as const;
