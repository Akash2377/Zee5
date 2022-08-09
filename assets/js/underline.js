const pathMap = {
    '/index.html': document.getElementById('home_elem'),
    '/movies.html': document.getElementById('movie_elem'),
    '/tvshow.html': document.getElementById('tvshow_elem'),
    '/news.html': document.getElementById('news_elem'),
    '/webseries.html': document.getElementById('webseries_elem'),
  };
  
  const path = location.pathname;
  console.log(path)
  
  if (pathMap[path]) {
    pathMap[path].classList.add('active');
  }