let video_d = document.getElementById("videos");

async function video_Show() {
  video_d.innerHTML = null;
  let res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBA3n_JJwYm--HmWnJK9VhbvmXCI2cRv1A&maxResults=20`
  );
  let data = await res.json();
  console.log(data);

  let { items } = data;

  items = items.filter((el) => {
    return el.id != undefined;
  });
  items.forEach(({ id, snippet: { title }, statistics: { viewCount } }) => {
    //   console.log(videoId);
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let p = document.createElement("p");
    let p1 = document.createElement("p");

    div.className = "container";
    div2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    p.innerHTML = title;
    p1.innerHTML = "views: " + viewCount;

    div3.append(p, p1);
    div.append(div2, div3);
    video_d.append(div);
    // console.log(title);
  });
}
video_Show();
