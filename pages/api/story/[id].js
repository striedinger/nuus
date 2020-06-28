export default async (req, res) => {
  const { query: { id } } = req;
  const NYT_API_KEY = process.env.NYT_API_KEY;
  const stories = {
    'nyt-home': {
      label: 'NYTimes Home',
      url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYT_API_KEY}`
    }
  };
  const story = stories[id];
  if (story) {
    const response = await fetch(story.url);
    if (!response.ok) return res.status(response.status).send(response.statusText);
    const json = await response.json();
    return res.json(json);
  }
  return res.status(404).send('Not Found');
};