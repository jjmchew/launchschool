// type guards (built-in to JS)
{
  // #region Problem 1
  const p1 = function() {
    type Video = {
      title: string;
      creator: string;
    };
    
    function printVideoInfo(videoOrVideos: Video | Video[]) {
      if ("length" in videoOrVideos) {
        videoOrVideos.forEach((v) =>
          console.log(`"${v.title}" by ${v.creator}`)
        );
      } else {
        console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
      }
    }
    
    printVideoInfo({
      title: "Introduction to TypeScript",
      creator: "John Doe",
    });
    // no errors
  }
  // #endregion



  // #region Problem 2
  const p2 = function() {
    type Video = {
      title: string;
      creator: string;
      length: number;
    };
    
    function printVideoInfo(videoOrVideos: Video | Video[]) {
      if ("length" in videoOrVideos) {
        videoOrVideos.forEach((v) =>
          console.log(`"${v.title}" by ${v.creator}`)
        );
      } else {
        console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
      }
    }
    
    printVideoInfo({
      title: "Introduction to TypeScript",
      creator: "John Doe",
      length: 100,
    });
    
    // error - the length property in type Video will allow type Video in first branch of 'if'
    //  - forEach is not an method of objects
  }
  // #endregion
}