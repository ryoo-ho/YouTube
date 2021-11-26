class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=25&key=${this.key}&part=snippet,statistics`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${query}chart=mostPopular&maxResults=25&key=${this.key}&part=snippet`,
      this.getRequestOptions
    );
    const result = await response.json();
    console.log(result);
    return result?.items?.map((video) => ({ ...video, id: video.id.videoId }));
  }

  // async searchId(idArray) {
  //   const newIdArray = idArray.map((id) => {
  //     fetch(
  //       `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.key}&part=snippet,statistics`,
  //       this.getRequestOptions
  //     )
  //       .then((response) => response.json())
  //       .then((result) => result.items);
  //   });
  //   console.log(newIdArray);
  // }
}

export default Youtube;
