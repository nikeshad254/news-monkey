import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "California FLoods Live : No 'Happy' New Year As Citizens Brace For More Devastating Floods - TIMES NOW",
      description:
        "Parts of California were submerged in water after a Pacific storm hit the US state and may have claimed at least 3 lives#california  #cali  #floods  #america...",
      url: "https://www.youtube.com/watch?v=smdpGSnhwY0",
      urlToImage: "https://i.ytimg.com/vi/smdpGSnhwY0/maxresdefault_live.jpg",
      publishedAt: "2023-01-04T09:54:32Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Chris Boyette, Holly Yan",
      title:
        "Mega Millions jackpot soars to nearly $1 billion after no winner in Tuesday night's drawing - CNN",
      description:
        "There was no winner Tuesday in the first Mega Millions drawing of 2023, which means the next drawing on Friday will be worth $940 million, according to the lottery.",
      url: "https://www.cnn.com/2023/01/03/us/mega-millions-jackpot/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230103130915-mega-millions-lottery-221223-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-04T09:37:00Z",
      content:
        "There was no winner Tuesday in the first Mega Millions drawing of 2023, which means the next drawing on Friday will be worth $940 million, according to the lottery. \r\nThe winning numbers for Tuesdays… [+910 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Russia blames its soldiers' mobile phone use for deadly missile strike - Reuters",
      description:
        "Russia's defence ministry on Wednesday blamed mobile phone use by its soldiers for a deadly Ukrainian missile strike that it said killed 89 servicemen, raising the reported death toll from 63.",
      url: "https://www.reuters.com/world/europe/russia-blames-its-soldiers-mobile-phone-use-deadly-missile-strike-2023-01-03/",
      urlToImage:
        "https://www.reuters.com/resizer/ADSY66UPkRg-KtnRsVn41fvyN-Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OG57RY4V55K2ZMKTFEMW75FAWM.jpg",
      publishedAt: "2023-01-04T09:28:00Z",
      content:
        "MOSCOW, Jan 4 (Reuters) - Russia's defence ministry on Wednesday blamed mobile phone use by its soldiers for a deadly Ukrainian missile strike that it said killed 89 servicemen, raising the reported … [+4881 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Mail",
      },
      author: "Mark Mcgreal",
      title:
        "Hanson band members Isaac, Taylor and Zac pose with all 39 members of their family on New Year's - Daily Mail",
      description:
        "Isaac, Taylor and Zac Hanson from the band Hanson took a huge family photo on New Year's Eve. The brothers all stood alongside with tons of family members covering the couch and chairs.",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-11597679/Hanson-band-members-Isaac-Taylor-Zac-pose-39-members-family-New-Years.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2023/01/04/07/66180705-0-image-a-27_1672818437020.jpg",
      publishedAt: "2023-01-04T08:04:07Z",
      content:
        "Isaac, Taylor and Zac Hanson from the band Hanson took a huge family photo on New Year's Eve. \r\nThe brothers all stood alongside tons of family members covering the couch and creeping up the stairs. … [+1988 chars]",
    },
    {
      source: {
        id: null,
        name: "The Times of Israel",
      },
      author: null,
      title:
        "UN Security Council slated to meet on widely decried Temple Mount visit by Ben Gvir - The Times of Israel",
      description:
        "Session unlikely to lead to formal censure but will reflect anger and concerns surrounding sensitive site, with one US official accusing far-right minister of trying to sow chaos",
      url: "https://www.timesofisrael.com/un-security-council-slated-to-meet-on-widely-decried-temple-mount-visit-by-ben-gvir/",
      urlToImage:
        "https://static.timesofisrael.com/www/uploads/2023/01/AP23003379313041-1024x640.jpg",
      publishedAt: "2023-01-04T06:56:15Z",
      content:
        "The United Nations Security Council will convene an emergency session to discuss firebrand National Security Minister Itamar Ben Gvir’s visit to Jerusalem’s flashpoint Temple Mount, which drew a floo… [+8442 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "NBA Top 10 Plays of the Night | January 3, 2023 - NBA",
      description:
        "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.Download now ➡ https://app.l...",
      url: "https://www.youtube.com/watch?v=YXM9oIqQ9hA",
      urlToImage: "https://i.ytimg.com/vi/YXM9oIqQ9hA/maxresdefault.jpg",
      publishedAt: "2023-01-04T06:46:21Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: 'By <a href="/profiles/jessie-yeung">Jessie Yeung</a>, CNN',
      title:
        "Live updates: Damar Hamlin in critical condition after cardiac arrest - CNN",
      description:
        "Buffalo Bills safety Damar Hamlin, 24, remains in critical condition after suffering cardiac arrest mid-game on Monday night, his team said. Follow here for live updates.",
      url: "https://www.cnn.com/us/live-news/damar-hamlin-nfl-buffalo-bills-news-01-04-23/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/230103122500-03-damar-hamlin-file-super-tease.jpg",
      publishedAt: "2023-01-04T06:21:00Z",
      content:
        "Buffalo Bills players and staff are still processing what they witnessed Monday night when safety Damar Hamlin suffered cardiac arrest and collapsed on the field mid-game against the Cincinnati Benga… [+1106 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        '"I Felt So Hopeless That I Went Home": Friend Recounts Delhi Car Horror - NDTV',
      description:
        "The men who dragged a 20-year-old for 13 km under their car in Delhi on New Year's morning, \"knew she was stuck under,\" the victim's friend told reporters today.",
      url: "https://www.ndtv.com/delhi-news/anjali-singh-car-accident-case-she-was-screaming-driver-knew-friend-of-delhi-woman-dragged-by-car-3661148",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/lopm6icg_anjali-singh-accident_625x300_04_January_23.jpg",
      publishedAt: "2023-01-04T06:02:00Z",
      content:
        "New Delhi: The men who dragged a 20-year-old for 13 km under their car in Delhi on New Year's morning, \"knew she was stuck under,\" the victim's friend told reporters today.  Nidhi, who accompanied An… [+2425 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Waller discovers the cost of going viral in confrontation with Breakker: WWE NXT, Jan. 3, 2023 - WWE",
      description:
        "Bron Breakker and Grayson Waller come face to face one last time before meeting at New Year’s Evil for the NXT Championship. Catch WWE action on Peacock, WWE...",
      url: "https://www.youtube.com/watch?v=INQVJMdYic0",
      urlToImage: "https://i.ytimg.com/vi/INQVJMdYic0/maxresdefault.jpg",
      publishedAt: "2023-01-04T04:35:00Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Dakin Andone, Amir Vera",
      title:
        "Missouri carries out first known execution of an openly transgender person for 2003 murder - CNN",
      description:
        "Missouri carried out the first known US execution of an openly transgender person on Tuesday, when it put to death Amber McLaughlin, who was convicted of a 2003 murder and unsuccessfully sought clemency from the governor.",
      url: "https://www.cnn.com/2023/01/03/us/amber-mclaughlin-missouri-execution/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230103092347-amber-mclaughlin-mug.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-04T04:21:00Z",
      content:
        "Missouri carried out the first known US execution of an openly transgender person Tuesday when Amber McLaughlin, who was convicted of a 2003 murder and unsuccessfully sought clemency from the governo… [+5060 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Victor Nava",
      title:
        "Ron DeSantis takes a shot at ‘floundering’ DC in inauguration speech - New York Post ",
      description:
        "DeSantis called his state a “refuge of sanity” compared to Washington, DC, and the rest of the nation.",
      url: "https://nypost.com/2023/01/03/ron-desantis-takes-a-shot-at-floundering-dc-in-inauguration-speech/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/01/desantis-inauguration-613.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2023-01-04T03:31:00Z",
      content:
        "Florida Gov. Ron DeSantis previewed his second term as the Sunshine States governor in his inauguration speech Tuesday and pledged to continue the fight against woke ideology.\r\nFlorida is where woke … [+2792 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Kerry Breen",
      title:
        "Dharmesh A. Patel, driver of Tesla that plunged off California cliff, charged with attempted murder and child abuse - CBS News",
      description:
        'Investigators say they "developed probable cause to believe this incident was an intentional act."',
      url: "https://www.cbsnews.com/news/dharmesh-patel-tesla-driver-plunged-off-cliff-california-charged-with-attempted-murder/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/01/03/c3415478-eb35-4bb4-b83b-b1e5cfc984d4/thumbnail/1200x630/c90c45e6197fb4d2c8a7a313a5d15bd3/tesla-crash.jpg",
      publishedAt: "2023-01-04T02:56:00Z",
      content:
        "California officials say the driver of a Tesla that plummeted over 250 feet off a San Mateo highway Monday has been arrested for attempted murder and child abuse.\r\nDharmesh A. Patel, of Pasadena, Cal… [+1961 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "McCarthy Humiliated by Failed Speaker Vote as House GOP Explodes into Chaos: A Closer Look - Late Night with Seth Meyers",
      description:
        "Seth takes a closer look at Republicans exploding into absolute chaos on what was supposed to be their first day in charge of the House of Representatives wh...",
      url: "https://www.youtube.com/watch?v=Yfdf02hGTB8",
      urlToImage: "https://i.ytimg.com/vi/Yfdf02hGTB8/maxresdefault.jpg",
      publishedAt: "2023-01-04T02:00:08Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Jeremy Renner: Avengers actor thanks fans after being run over by snow plough - BBC",
      description:
        "The Avengers star was run over by his own snow plough, the local sheriff said in a press conference.",
      url: "https://www.bbc.com/news/world-us-canada-64159046",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/13C7B/production/_128191018_901b88fb0a72fe5a37a67e5e9d2ad28599281cd7.jpg",
      publishedAt: "2023-01-04T01:26:16Z",
      content:
        'US actor Jeremy Renner has thanked fans for their support after he was seriously injured by his snow plough.\r\nSharing a picture of his bruised face on Instagram, Renner said he was "too messed up now… [+2490 chars]',
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Google's answer to a killer AirPods feature is going live on the Pixel 6 and 7 series - Android Police",
      description: "not null",
      url: "https://news.google.com/__i/rss/rd/articles/CBMiQ2h0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2dvb2dsZS1waXhlbC02LXBpeGVsLTctc3BhdGlhbC1hdWRpby_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2023-01-04T01:15:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Neurosciencenews.com",
      },
      author: "Neuroscience News",
      title:
        "Age-Related Macular Degeneration a Risk Factor for COVID-19 Infection and Severe Disease - Neuroscience News",
      description:
        "More severe COVID-19 outcomes associated with age-related macular degeneration likely arise from a genetic predisposition in addition to higher levels of Pdgf in blood serum.",
      url: "https://neurosciencenews.com/amd-covid-22161/",
      urlToImage:
        "https://neurosciencenews.com/files/2023/01/amd-covid-neurosiceces-public.jpg",
      publishedAt: "2023-01-04T00:03:27Z",
      content:
        "Summary: More severe COVID-19 outcomes associated with age-related macular degeneration likely arise from a genetic predisposition in addition to higher levels of Pdgf in blood serum.\r\nSource: Boston… [+5961 chars]",
    },
    {
      source: {
        id: null,
        name: "San Francisco Chronicle",
      },
      author: "Jill Tucker, Michael Cabanatuan, Julie Johnson",
      title:
        "Bay Area storm: High winds of up to 70mph expected on Wednesday - San Francisco Chronicle",
      description:
        "The National Weather Service expects an urgent high wind warning starting at 4 a.m....",
      url: "https://www.sfchronicle.com/bayarea/article/Epic-storm-headed-for-Bay-Area-will-also-see-up-17692073.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/30/76/51/23325263/9/rawImage.jpg",
      publishedAt: "2023-01-03T23:36:13Z",
      content:
        "Residents, business owners and emergency workers already weary from recent tempests braced for an epic storm headed for the Bay Area this week, filling sandbags, moving inventory off the ground, and … [+7997 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Pressure mounts on Musk, Tesla after big Q4 deliveries miss - CNBC Television",
      description:
        "The Wall Street Journal's Tim Higgins on Tesla's stock plunge after the company's misses on delivery estimates. With CNBC's Brian Sullivan and the Fast Money...",
      url: "https://www.youtube.com/watch?v=NCqi0Abu-DI",
      urlToImage: "https://i.ytimg.com/vi/NCqi0Abu-DI/maxresdefault.jpg",
      publishedAt: "2023-01-03T23:30:03Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Aimee Picchi",
      title:
        'Southwest Airlines offers travelers 25,000 reward points as "gesture of goodwill" - CBS News',
      description:
        "The frequent-flier points, worth about $300, will never expire and have no blackout dates, according to airline's CEO.",
      url: "https://www.cbsnews.com/news/southwest-airlines-25000-points-customers-flight-cancellations/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/12/30/54f60c5b-de0f-4c66-b576-de4450d5fb98/thumbnail/1200x630/9724fbbe5bdd7b624ac975fb00067d6d/gettyimages-1245859264.jpg",
      publishedAt: "2023-01-03T22:50:00Z",
      content:
        "Southwest Airlines, which angered customers with thousands of flight cancellations over the holidays, is offering 25,000 frequent-flier points to travelers who were affected by the epic meltdown. \r\nS… [+2073 chars]",
    },
    {
      source: {
        id: null,
        name: "Spaceflight Now",
      },
      author: null,
      title:
        "SpaceX launches 114 small satellites on first mission of 2023 – Spaceflight Now - Spaceflight Now",
      description: "not null",
      url: "https://spaceflightnow.com/2023/01/03/falcon-9-transporter-6-live-coverage/",
      urlToImage: null,
      publishedAt: "2023-01-03T22:12:09Z",
      content:
        "Watch a replay of our live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida. The Transporter 6 mission laun… [+16934 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=61b2e6781f0447d98bd5744bfbc9ad3c&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async ()=>{
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=61b2e6781f0447d98bd5744bfbc9ad3c&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
      return;
    }
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=61b2e6781f0447d98bd5744bfbc9ad3c&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url ? element.url : ""}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://i.ytimg.com/vi/w_Ma8oQLmSM/maxresdefault.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next 	&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
