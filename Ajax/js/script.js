
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street + ',' + city; 
    $greeting.text('So, you want to live at'+ address + '?');
    var mapsApi = "https://maps.googleapis.com/maps/api/streetview?size=800x400&location=" + address + "&fov=90&heading=235&pitch=10&key=AIzaSyBlTjmGt3EcGjzkWix5d-m7xsGafxbYJE4";
    $body.append('<img class="bgimg" src="'+mapsApi+'">');

    //NYT
    // Built by LucyBot. www.lucybot.com
    var newsApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + address + "&sort=newest&api-key=db5d2781c1a44dcf9b75293d7a4c5a13";
    // url += '?' + $.param({
    //   'api-key': "db5d2781c1a44dcf9b75293d7a4c5a13"
    // });

    // $.ajax({
    //   url: url,
    //   method: 'GET',
    // }).done(function(result) {
    //   console.log(result);
    // }).fail(function(err) {
    //   throw err;
    // });


    // var newsApi = "http://developer.nytimes.com/";
    $.getJSON(newsApi,function(data){
        $nytHeaderElem.text('New York Times Articles About' + city);
        articles = data.response.docs;
        for (var i = 0; i < articles.length; i++){
            var article = articles[i];
            // .log(data);
            $nytElem.append('<li class="article">' + '<a href="'+article.web_url+'">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
        };
        }
    )
    .error(function(    ){
        $nytHeaderElem.text('Failed to load the news about '  + city)
        }
    );
    // } )
  var wikiApi = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback'; 
  var wikiRequestTimeout = setTimeout(function(){
    $wikiElem.text('Failed to load about '+ city);
  },5000);
    $.ajax({
  url: wikiApi,
  dataType: 'jsonp',
  success: function(response){
    var articleList = response[1];
    for( var i = 0; i < articleList.length; i++){
        articleStr = articleList[i];
        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
        $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
    };  
        clearTimeout(wikiRequestTimeout);
    }
  }
);

    return false;


};

$('#form-container').submit(loadData);

